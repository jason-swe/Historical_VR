import { Link, Navigate, useParams } from 'react-router-dom'
import QuizCard from '../components/QuizCard'
import { getLocationById } from '../data/locations'

function LocationDetail() {
  const { id } = useParams()
  const location = getLocationById(id)

  if (!location) {
    return <Navigate to="/map" replace />
  }

  return (
    <>
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url('${location.bannerImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-red-950/85 to-zinc-950/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Link
            to="/map"
            className="inline-flex rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Quay lại bản đồ
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              Địa điểm lịch sử
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">
              {location.name}
            </h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {location.philosophy.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-amber-100 ring-1 ring-white/15"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
        <div className="space-y-8">
          <article className="rounded-lg border border-red-950/10 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-red-900">
              Giới thiệu lịch sử
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-700">
              {location.description}
            </p>
          </article>

          <article className="rounded-lg border border-red-950/10 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-red-900">
              Nội dung triết học
            </p>
            <h2 className="mt-3 text-2xl font-black text-zinc-950">
              {location.philosophy[0]}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-700">
              {location.philosophyContent}
            </p>
          </article>

          <section className="rounded-lg border border-red-950/10 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-red-900">
              Timeline sự kiện
            </p>
            <div className="mt-6 space-y-5">
              {location.timeline.map((item) => (
                <div key={item.year} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-amber-300 bg-red-900" />
                  <div className="absolute bottom-[-22px] left-[7px] top-6 w-px bg-red-950/10 last:hidden" />
                  <h3 className="font-black text-zinc-950">{item.year}</h3>
                  <p className="mt-1 leading-7 text-zinc-600">{item.event}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section className="rounded-lg border border-red-950/10 bg-white p-4 shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-zinc-950">
              <iframe
                title={`Trải nghiệm 360 độ - ${location.name}`}
                src={location.vrLink}
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 grid place-items-center px-5 text-center text-white">
                <div className="rounded-lg bg-zinc-950/75 p-4 backdrop-blur">
                  <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
                    Ảnh 360°
                  </p>
                  <p className="mt-2 text-sm text-zinc-200">
                    Placeholder iframe để thay bằng link Kuula, Google Street
                    View hoặc ảnh 360° của nhóm.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-red-950/10 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-red-900">
              Hotspot thông tin
            </p>
            <div className="mt-5 grid gap-3">
              {location.hotspots.map((hotspot) => (
                <article
                  key={hotspot.title}
                  className="rounded-lg bg-stone-50 p-4 transition hover:bg-amber-50"
                >
                  <h3 className="font-black text-zinc-950">{hotspot.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {hotspot.content}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <QuizCard quiz={location.quiz} />
        </aside>
      </section>
    </>
  )
}

export default LocationDetail
