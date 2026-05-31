import L from 'leaflet'
import { Link } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { locations } from '../data/locations'

const museumMarker = L.divIcon({
  className: 'museum-marker',
  html: '<span></span>',
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -18],
})

function RussiaMap() {
  return (
    <MapContainer
      center={[59.928, 30.31]}
      zoom={12}
      minZoom={10}
      scrollWheelZoom
      className="museum-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <Marker
          key={location.id}
          icon={museumMarker}
          position={location.coordinates}
        >
          <Popup>
            <div className="w-72 overflow-hidden rounded-md bg-[#111110] text-white">
              <div
                className="h-28 bg-cover bg-center"
                style={{ backgroundImage: `url('${location.bannerImage}')` }}
              />
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  {location.exhibitCode}
                </p>
                <h3 className="mt-2 text-lg font-black leading-tight text-white">
                  {location.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {location.philosophy[0]}
                </p>
                <Link
                  to={`/locations/${location.id}`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-amber-300 px-4 py-2.5 text-sm font-black uppercase tracking-wider text-zinc-950 transition hover:bg-amber-200"
                >
                  Mở phòng trưng bày
                </Link>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default RussiaMap
