import { Link, Navigate, useParams } from 'react-router-dom'
import QuizCard from '../components/QuizCard'
import StreetViewHotspotViewer from '../components/StreetViewHotspotViewer'
import { getLocationById } from '../data/locations'

function LocationDetail() {
  const { id } = useParams()
  const location = getLocationById(id)

  if (!location) {
    return <Navigate to="/map" replace />
  }

  const infographicItems = [
    ['Nguyên lý', location.infographic.principle],
    ['Tác nhân', location.infographic.catalyst],
    ['Chuyển hóa', location.infographic.shift],
  ]

  return (
    <div className="detail-zoom bg-[#0f0f0e] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[88svh] overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center detail-hero-image"
          style={{ backgroundImage: `url('${location.bannerImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f0f0e] to-transparent" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-between px-4 py-8 sm:px-6 lg:px-8">
          <Link
            to="/map"
            className="w-fit rounded-md border border-white/20 bg-black/25 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
          >
            Quay lại bản đồ
          </Link>

          <div className="max-w-4xl pb-8">
            <p className="text-xs font-bold uppercase tracking-[0.42em] text-amber-300">
              {location.exhibitCode} / {location.theme}
            </p>
            <h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
              {location.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
              {location.description}
            </p>
          </div>
        </div>
      </section>

      {/* Immersive 360 Panorama Viewer with hotspots */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 pb-4 mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            Trải nghiệm tương tác số
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Khám phá không gian triển lãm 360°
          </h2>
        </div>
        <StreetViewHotspotViewer location={location} />
      </section>

      {/* Content & Sidebars */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <div className="space-y-8">
          <article className="rounded-lg border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Infographic triết học
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              {location.philosophy[0]}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {infographicItems.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-black/25 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
                    {label}
                  </p>
                  <p className="mt-3 text-2xl font-black text-amber-200">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-4 border-amber-300 pl-4 text-base leading-8 text-zinc-200">
              {location.infographic.takeaway}
            </p>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              {location.philosophyContent}
            </p>
          </article>

          <section className="rounded-lg border border-white/10 bg-white/[0.06] p-5 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
                  Timeline trực quan
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">
                  Các lớp sự kiện
                </h2>
              </div>
              <p className="text-sm text-zinc-400">Cuộn ngang trên màn hình nhỏ</p>
            </div>

            <div className="timeline-strip mt-8">
              {location.timeline.map((item, index) => (
                <article key={item.year} className="timeline-node">
                  <span className="timeline-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-xl font-black text-white">
                    {item.year}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {item.event}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.06] p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Hotspot triển lãm
            </p>
            <div className="mt-5 grid gap-3">
              {location.hotspots.map((hotspot, idx) => (
                <article
                  key={hotspot.title}
                  className="rounded-lg border border-white/10 bg-black/25 p-4 transition hover:border-amber-300/50 hover:bg-black/35"
                >
                  <h3 className="font-black text-white">
                    {idx + 1}. {hotspot.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {hotspot.question}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <QuizCard quiz={location.quiz} />
        </aside>
      </section>
    </div>
  )
}

export default LocationDetail
