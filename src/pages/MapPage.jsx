import { Link } from 'react-router-dom'
import RussiaMap from '../components/RussiaMap'
import { locations } from '../data/locations'

function MapPage() {
  return (
    <section className="min-h-[calc(100svh-68px)] bg-[#08172f] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[0.88fr_1.55fr] lg:px-8">
        <aside className="lg:sticky lg:top-24">
          <p className="text-xs font-bold uppercase tracking-[0.38em] text-amber-300">
            Virtual Museum / Saint Petersburg
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-white sm:text-6xl">
            Bản đồ triển lãm Cách mạng Tháng Mười
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
            Chọn một điểm trên bản đồ để bước vào phòng trưng bày số. Mỗi địa
            điểm được kể như một lát cắt lịch sử, gắn với timeline và khái niệm
            triết học cốt lõi.
          </p>

          <div className="mt-8 grid gap-3">
            {locations.map((location, index) => (
              <Link
                key={location.id}
                to={`/locations/${location.id}`}
                className="group rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-300/70 hover:bg-white/[0.1]"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-sky-300/30 bg-sky-300/10 text-sm font-black text-sky-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-400">
                      {location.exhibitCode}
                    </p>
                    <h2 className="mt-1 text-lg font-black text-white">
                      {location.shortName}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      {location.theme}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>

        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b1e3d] p-3 shadow-2xl shadow-black/40">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#041022]/55 to-transparent" />
          <RussiaMap />
          <div className="pointer-events-none absolute bottom-5 left-5 z-10 rounded-md border border-white/10 bg-[#041022]/60 px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-sky-200 backdrop-blur">
            Interactive Historical Storytelling
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapPage
