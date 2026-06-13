import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

function normalizeHeading(value) {
  return ((((value + 180) % 360) + 360) % 360) - 180
}

// ─── Load Google Maps JS API (works with or without API key on localhost) ───
let googleMapsPromise = null
function loadGoogleMaps() {
  if (window.google?.maps?.StreetViewPanorama) {
    return Promise.resolve(window.google)
  }
  if (googleMapsPromise) return googleMapsPromise

  googleMapsPromise = new Promise((resolve, reject) => {
    // If the script already exists wait for it
    const existing = document.querySelector('script[data-gmaps]')
    if (existing) {
      existing.addEventListener('load', () => resolve(window.google))
      existing.addEventListener('error', reject)
      return
    }
    const script = document.createElement('script')
    script.src = mapsApiKey
      ? `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}`
      : `https://maps.googleapis.com/maps/api/js`
    script.async = true
    script.defer = true
    script.dataset.gmaps = 'true'
    script.addEventListener('load', () => resolve(window.google))
    script.addEventListener('error', () => {
      googleMapsPromise = null
      reject(new Error('Google Maps failed to load'))
    })
    document.head.appendChild(script)
  })
  return googleMapsPromise
}

// ─── Project a hotspot yaw/pitch → 2-D screen position ───────────────────
function projectHotspot(hotspot, pov, zoom, width, height) {
  const yaw = hotspot.yaw ?? hotspot.position?.yaw ?? 0
  const pitch = hotspot.pitch ?? hotspot.position?.pitch ?? 0

  const dHead = normalizeHeading(yaw - pov.heading)
  const dPitch = pitch - pov.pitch
  const hFov = Math.max(34, 100 / 2 ** Math.max(0, zoom - 1))
  const vFov = hFov * (height / width)

  return {
    visible: Math.abs(dHead) <= hFov / 2 && Math.abs(dPitch) <= vFov / 2,
    x: width / 2 + (dHead / hFov) * width,
    y: height / 2 - (dPitch / vFov) * height,
  }
}

// ─── Find the nearest Street View panorama using StreetViewService ────────
// Returns the full StreetViewPanoramaData object.
// data.location.pano  ← panorama ID
function findNearestPanorama(google, lat, lng) {
  return new Promise((resolve, reject) => {
    const svc = new google.maps.StreetViewService()
    // First try outdoor only within 100 m
    svc.getPanorama(
      { location: { lat, lng }, radius: 100, source: google.maps.StreetViewSource.OUTDOOR },
      (data, status) => {
        if (status === google.maps.StreetViewStatus.OK) {
          resolve(data)
        } else {
          // Widen search to 600 m, accept any source
          svc.getPanorama(
            { location: { lat, lng }, radius: 600 },
            (data2, status2) => {
              if (status2 === google.maps.StreetViewStatus.OK) resolve(data2)
              else reject(new Error(`No Street View panorama found nearby (status: ${status2})`))
            }
          )
        }
      }
    )
  })
}

// ─── Main Component ──────────────────────────────────────────────────────
export default function StreetViewHotspotViewer({ location }) {
  const wrapperRef = useRef(null)   // outer div — used for fullscreen
  const containerRef = useRef(null) // inner div — Street View target
  const panoramaRef = useRef(null)

  const [apiReady, setApiReady] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [noStreetView, setNoStreetView] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Color/filter presets for the Street View container
  const FILTER_PRESETS = {
    original: '',
    inverted: 'invert(1)',
    amber: 'grayscale(0.15) sepia(0.35) saturate(1.6) hue-rotate(10deg) brightness(0.98)',
    corrected: 'invert(1)',
  }
  const [filterPreset, setFilterPreset] = useState('inverted')

  // Track real size via ResizeObserver so projection is always accurate
  const [containerSize, setContainerSize] = useState({ width: 800, height: 450 })

  const [pov, setPov] = useState({ heading: 0, pitch: 0 })
  const [zoom, setZoom] = useState(1)

  const [activeHotspotIndex, setActiveHotspotIndex] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  // ── Fullscreen toggle ─────────────────────────────────────────────────
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      wrapperRef.current?.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }, [])

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  // ── ResizeObserver so container size is always correct ────────────────
  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        if (width > 0 && height > 0) {
          setContainerSize({ width, height })
        }
      }
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // ── Street View init ─────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false
    setApiReady(false)
    setApiError(null)
    setNoStreetView(false)
    setActiveHotspotIndex(null)
    setSelectedAnswer(null)

    // Extract initial heading/pitch from vrLink
    let initialHeading = 0
    let initialPitch = 0
    const cbpMatch = location.vrLink?.match(/cbp=11,([^,]+),([^,]+)/)
    if (cbpMatch) {
      initialHeading = parseFloat(cbpMatch[1])
      initialPitch = parseFloat(cbpMatch[2])
    }

    // Use streetViewCoords (precise SV point) if provided, else fall back to coordinates
    const [lat, lng] = location.streetViewCoords ?? location.coordinates

    loadGoogleMaps()
      .then((google) => findNearestPanorama(google, lat, lng))
      .then((panoramaData) => {
        if (cancelled || !containerRef.current) return

        // StreetViewPanoramaData shape: { location: { pano, latLng, ... }, ... }
        const panoId = panoramaData.location.pano
        const google = window.google
        const panorama = new google.maps.StreetViewPanorama(containerRef.current, {
          pano: panoId,                      // use exact pano ID found by service
          pov: { heading: initialHeading, pitch: initialPitch },
          zoom: 1,
          addressControl: false,
          fullscreenControl: false,          // we provide our own button
          motionTracking: false,
          motionTrackingControl: false,
          panControl: true,
          linksControl: true,
          showRoadLabels: false,
          zoomControl: true,
          clickToGo: true,
        })

        panoramaRef.current = panorama
        setApiReady(true)
        setPov({ heading: initialHeading, pitch: initialPitch })

        const onPov = () => { if (!cancelled) setPov({ ...panorama.getPov() }) }
        const onZoom = () => { if (!cancelled) setZoom(panorama.getZoom() ?? 1) }

        const l1 = panorama.addListener('pov_changed', onPov)
        const l2 = panorama.addListener('zoom_changed', onZoom)

        panorama.__cleanup = () => {
          l1.remove()
          l2.remove()
        }
      })
      .catch((err) => {
        if (cancelled) return
        console.error('Street View error:', err)
        if (err.message?.includes('No panorama')) {
          setNoStreetView(true)
        } else {
          setApiError(err)
        }
      })

    return () => {
      cancelled = true
      panoramaRef.current?.__cleanup?.()
      panoramaRef.current = null
    }
  }, [location])

  // ── Project hotspots ─────────────────────────────────────────────────
  const projectedHotspots = useMemo(() => {
    if (!apiReady) return []
    const { width, height } = containerSize
    return (location.hotspots ?? []).map((h) => ({
      ...h,
      screen: projectHotspot(h, pov, zoom, width, height),
    }))
  }, [location.hotspots, pov, zoom, containerSize, apiReady])

  const activeHotspot = activeHotspotIndex === null ? null : projectedHotspots[activeHotspotIndex]
  const answerIsCorrect = activeHotspot && selectedAnswer === activeHotspot.answer

  const advanceHotspot = () => {
    const nextIndex = (activeHotspotIndex ?? 0) + 1
    if (nextIndex < projectedHotspots.length) {
      setActiveHotspotIndex(nextIndex)
      setSelectedAnswer(null)
      return
    }
    setActiveHotspotIndex(null)
    setSelectedAnswer(null)
  }

  // ── Render ───────────────────────────────────────────────────────────
  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-[#08172f] shadow-2xl"
    >
      {/* Street View + hotspot overlay */}
      <div
        className="relative w-full bg-[#08172f]"
        style={{ minHeight: isFullscreen ? '100vh' : 'clamp(380px, 55vw, 640px)' }}
      >
        {/* Google Street View target */}
        <div
          ref={containerRef}
          className="absolute inset-0"
          style={{
            filter: FILTER_PRESETS[filterPreset] || undefined,
            transition: 'filter 220ms ease',
          }}
        />

        {/* ── Top-left info badge ── */}
        <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs rounded-lg bg-[#041022]/80 px-4 py-2.5 text-white shadow-xl ring-1 ring-white/15 backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">
              Google Street View thực tế
            </p>
            <p className="mt-0.5 text-[11px] leading-5 text-zinc-300">
              Xoay 360° • Nhấp điểm sáng để mở câu hỏi
            </p>
          </div>

          {apiReady && (
            <div className="w-fit self-start rounded-full bg-amber-400 px-3 py-1.5 text-[11px] font-black text-zinc-950 shadow-xl backdrop-blur-md">
              {projectedHotspots.filter((h) => h.screen.visible).length}
              &nbsp;/&nbsp;{location.hotspots?.length ?? 0} hotspot trong tầm nhìn
            </div>
          )}
        </div>

        {/* ── Fullscreen button (top-right) ── */}
        <button
          type="button"
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
          className="pointer-events-auto absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-md border border-white/20 bg-[#041022]/70 text-white shadow-lg backdrop-blur transition hover:bg-[#041022]/90"
        >
            {isFullscreen ? (
            /* shrink / exit-fullscreen icon */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
            </svg>
          ) : (
            /* expand / enter-fullscreen icon */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          )}
        </button>

        {/* Filter fixed to 'N' tone (inverted) — presets removed per request */}

        {/* ── Loading spinner ── */}
        {!apiReady && !apiError && !noStreetView && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-[#08172f] text-center">
            <div>
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-amber-300 border-t-transparent" />
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-amber-200">
                Đang tải Street View...
              </p>
            </div>
          </div>
        )}

        {/* ── No Street View coverage fallback ── */}
        {noStreetView && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-[#08172f] p-6 text-center text-white">
            <div className="max-w-sm">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-amber-300/10 ring-2 ring-amber-300/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                Không có Street View tại khu vực này
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Google chưa có ảnh Street View ở tọa độ này. Các câu hỏi hotspot vẫn có thể xem qua danh sách bên dưới.
              </p>
            </div>
          </div>
        )}

        {/* ── API Error fallback ── */}
        {apiError && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-[#08172f] p-6 text-center text-white">
            <div className="max-w-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-rose-400">Lỗi tải Street View</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Kiểm tra kết nối internet. Nếu lỗi vẫn còn, thêm API key vào file{' '}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-amber-300">.env</code>.
              </p>
            </div>
          </div>
        )}

        {/* ── Floating hotspot buttons ── */}
        {apiReady &&
          projectedHotspots.map((hotspot, idx) =>
            hotspot.screen.visible ? (
              <button
                key={hotspot.title}
                type="button"
                onClick={() => {
                  setActiveHotspotIndex(idx)
                  setSelectedAnswer(null)
                }}
                title={hotspot.title}
                className="absolute z-20 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-amber-200 bg-red-900 text-[11px] font-black text-amber-200 shadow-[0_0_0_8px_rgba(250,204,21,0.2)] transition duration-200 hover:scale-110 hover:bg-red-700 hover:shadow-[0_0_0_10px_rgba(250,204,21,0.3)]"
                style={{
                  left: hotspot.screen.x,
                  top: hotspot.screen.y,
                  animation: 'pulse-hotspot-star 1.8s infinite alternate',
                }}
              >
                {idx + 1}
              </button>
            ) : null
          )}
      </div>

      {/* ── Hotspot popup modal ─────────────────────────────────────────── */}
      {activeHotspot && (
        <div className="absolute inset-0 z-30 grid place-items-center bg-[#041022]/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0b1e3d] text-white shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 bg-[#041022]/45 px-5 py-4 sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300">
                  Câu hỏi triết học Mác - Lênin
                </p>
                <h3 className="mt-1 text-lg font-black">{activeHotspot.title}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                  Câu {activeHotspotIndex + 1} / {projectedHotspots.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveHotspotIndex(null)
                  setSelectedAnswer(null)
                }}
                className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                ✕ Đóng
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[65vh] overflow-y-auto p-5 sm:p-6">
              <p className="text-base font-black leading-7 text-amber-100">
                {activeHotspot.question}
              </p>
              <div className="mt-3 rounded-lg border border-white/5 bg-[#041022]/35 p-3 text-xs leading-6 text-zinc-400">
                {activeHotspot.content}
              </div>

              {/* Options */}
              <div className="mt-5 grid gap-2.5">
                {activeHotspot.options?.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx
                  const isCorrect = activeHotspot.answer === idx
                  let cls = 'border-white/10 bg-white/5 text-zinc-200 hover:border-sky-400/50 hover:bg-sky-400/5'
                  if (selectedAnswer !== null) {
                    if (isCorrect)
                      cls = 'border-emerald-500 bg-emerald-950/40 text-emerald-300 font-bold'
                    else if (isSelected)
                      cls = 'border-rose-500 bg-rose-950/40 text-rose-300 font-bold'
                    else cls = 'border-white/5 opacity-40'
                  }
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={selectedAnswer !== null}
                      onClick={() => setSelectedAnswer(idx)}
                      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-all ${cls}`}
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {selectedAnswer !== null && (
                <div
                  className={`mt-5 rounded-lg border p-4 text-sm leading-6 ${
                    answerIsCorrect
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                      : 'border-amber-500/30 bg-amber-500/10 text-amber-200'
                  }`}
                >
                  <strong className="mb-1 block text-white">
                    {answerIsCorrect ? '✓ Chính xác!' : '✗ Chưa đúng. Giải thích:'}
                  </strong>
                  {activeHotspot.feedback}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-white/5 bg-[#041022]/25 px-5 py-3">
              {selectedAnswer !== null && (
                <button
                  type="button"
                  onClick={advanceHotspot}
                  className="rounded-md bg-amber-300 px-5 py-2 text-xs font-black uppercase tracking-wider text-zinc-950 transition hover:bg-amber-200"
                >
                  {activeHotspotIndex + 1 < projectedHotspots.length ? 'Câu tiếp theo' : 'Hoàn tất'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
