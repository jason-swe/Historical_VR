import { Link } from 'react-router-dom'
import { locations } from '../data/locations'

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#10100f] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{
            backgroundImage:
              "url('https://commons.wikimedia.org/wiki/Special:FilePath/Winter_Palace_Panorama_4.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#10100f] to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(100svh-68px)] max-w-7xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.42em] text-amber-300">
              Google Arts & Culture inspired virtual museum
            </p>
            <h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
              Cách mạng Tháng Mười Nga
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-100">
              Một triển lãm số kể lại hành trình lịch sử tại Saint Petersburg
              qua bản đồ tương tác, timeline sự kiện và các infographic triết
              học Mác - Lênin.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/map"
                className="inline-flex items-center justify-center rounded-md bg-amber-300 px-6 py-3 text-sm font-black uppercase tracking-wider text-zinc-950 shadow-lg shadow-black/30 transition hover:bg-amber-200"
              >
                Vào triển lãm
              </Link>
              <a
                href="#overview"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Xem phòng trưng bày
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-[#10100f] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-amber-300">
                4 phòng trưng bày
              </p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                Lịch sử được kể như một hành trình tương tác
              </h2>
            </div>
            <Link
              to="/map"
              className="w-fit rounded-md border border-white/15 px-4 py-2 text-sm font-bold text-zinc-200 transition hover:border-amber-300 hover:text-amber-200"
            >
              Mở bản đồ
            </Link>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location, index) => (
              <Link
                key={location.id}
                to={`/locations/${location.id}`}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-300/70 hover:bg-white/[0.1]"
              >
                <div
                  className="h-44 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${location.bannerImage}')` }}
                />
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.26em] text-amber-300">
                    {String(index + 1).padStart(2, '0')} / {location.exhibitCode}
                  </span>
                  <h3 className="mt-3 text-xl font-black text-white">
                    {location.shortName}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {location.philosophy[0]}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-black uppercase tracking-wider text-amber-200">
                    Khám phá
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
