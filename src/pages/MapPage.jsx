import RussiaMap from '../components/RussiaMap'
import { locations } from '../data/locations'

function MapPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.55fr] lg:items-start">
        <aside>
          <p className="text-sm font-bold uppercase tracking-widest text-red-900">
            Saint Petersburg, Nga
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-zinc-950 sm:text-5xl">
            Bản đồ hành trình Cách mạng Tháng Mười
          </h1>
          <p className="mt-5 leading-8 text-zinc-600">
            Click vào từng marker để xem phạm trù triết học liên quan và đi tới
            trang trải nghiệm chi tiết. Các điểm dừng được sắp xếp như một
            tuyến học tập: kinh tế, công nhân, tri thức và quyền lực chính trị.
          </p>

          <div className="mt-6 grid gap-3">
            {locations.map((location) => (
              <div
                key={location.id}
                className="rounded-lg border border-red-950/10 bg-white p-4 shadow-sm"
              >
                <h2 className="font-black text-zinc-950">
                  {location.shortName}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {location.philosophy.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <div className="overflow-hidden rounded-lg border border-red-950/10 bg-white p-2 shadow-xl">
          <RussiaMap />
        </div>
      </div>
    </section>
  )
}

export default MapPage
