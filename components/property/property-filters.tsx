'use client';

import { useMemo, useState } from 'react';
import { Property } from '@/lib/types';
import { PropertyCard } from './property-card';

type Props = { properties: Property[] };

export function PropertyFilters({ properties }: Props) {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const byType = type ? property.tipo === type : true;
      const byLocation = location ? property.ubicacion.toLowerCase().includes(location.toLowerCase()) : true;
      const byPrice = maxPrice ? property.precio <= Number(maxPrice) : true;
      return byType && byLocation && byPrice;
    });
  }, [location, maxPrice, properties, type]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-2xl border border-white/10 p-4 md:grid-cols-3">
        <input className="rounded-lg bg-black/40 p-3" placeholder="Ubicación" onChange={(e) => setLocation(e.target.value)} />
        <select className="rounded-lg bg-black/40 p-3" onChange={(e) => setType(e.target.value)}>
          <option value="">Todos los tipos</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Terreno">Terreno</option>
        </select>
        <input className="rounded-lg bg-black/40 p-3" type="number" placeholder="Precio máximo" onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
