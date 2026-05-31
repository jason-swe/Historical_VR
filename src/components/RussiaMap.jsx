import L from 'leaflet'
import { Link } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { locations } from '../data/locations'

const museumMarker = L.divIcon({
  className: 'museum-marker',
  html: '<span></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -16],
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
            <div className="w-64 space-y-3 p-1">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-red-800">
                  Điểm dừng lịch sử
                </p>
                <h3 className="mt-1 text-base font-bold text-zinc-950">
                  {location.name}
                </h3>
              </div>
              <p className="text-sm leading-6 text-zinc-600">
                {location.philosophy[0]}
              </p>
              <Link
                to={`/locations/${location.id}`}
                className="inline-flex w-full items-center justify-center rounded-md bg-red-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-800"
              >
                Khám phá
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default RussiaMap
