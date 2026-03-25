'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Property } from '@/lib/types';

export function PropertyMap({ properties, zoom = 10 }: { properties: Property[]; zoom?: number }) {
  const center: [number, number] = [properties[0]?.latitud ?? 18.4861, properties[0]?.longitud ?? -69.9312];

  return (
    <div className="h-[500px] overflow-hidden rounded-2xl border border-white/10">
      <MapContainer center={center} zoom={zoom} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property) => (
          <Marker key={property.id} position={[property.latitud, property.longitud]}>
            <Popup>
              <strong>{property.titulo}</strong>
              <br />
              {property.ubicacion}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
