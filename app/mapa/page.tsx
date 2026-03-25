import { MapShell } from '@/components/property/map-shell';
import { getProperties } from '@/lib/store';

export default function MapPage() {
  const properties = getProperties();

  return (
    <section className="section-container space-y-6">
      <h1 className="text-4xl font-bold">Mapa de propiedades</h1>
      <p className="text-textSoft">Explora todas las propiedades disponibles de manera visual e interactiva.</p>
      <MapShell properties={properties} />
    </section>
  );
}
