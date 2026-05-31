import { Link } from 'react-router-dom'
import { locations } from '../data/locations'

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://commons.wikimedia.org/wiki/Special:FilePath/Winter_Palace_Panorama_4.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-red-950/90 to-zinc-950/50" />

        <div className="relative mx-auto grid min-h-[calc(100svh-65px)] max-w-7xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
              Triết học Mác - Lênin qua không gian lịch sử
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Hành trình đến Cách mạng Tháng Mười Nga
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-100 sm:text-lg">
              Khám phá Saint Petersburg qua các địa điểm gắn với tiến trình
              Cách mạng Tháng Mười, từ mâu thuẫn xã hội, phong trào công nhân,
              tri thức cách mạng đến sự chuyển giao quyền lực lịch sử.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/map"
                className="inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-sm font-black uppercase tracking-wider text-red-950 shadow-lg shadow-red-950/30 transition hover:bg-amber-300"
              >
                Bắt đầu khám phá
              </Link>
              <a
                href="#overview"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Xem lộ trình
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-stone-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-red-900">
              4 điểm dừng
            </p>
            <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
              Một tuyến học tập từ địa điểm đến khái niệm triết học
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location, index) => (
              <Link
                key={location.id}
                to={`/locations/${location.id}`}
                className="group rounded-lg border border-red-950/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-500 hover:shadow-xl"
              >
                <span className="grid h-10 w-10 place-items-center rounded-md bg-red-900 font-black text-amber-300">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-black text-zinc-950">
                  {location.shortName}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {location.philosophy[0]}
                </p>
                <span className="mt-5 inline-flex text-sm font-bold text-red-900 group-hover:text-red-700">
                  Khám phá chi tiết
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
