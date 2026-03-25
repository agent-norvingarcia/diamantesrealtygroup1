import { PropertyFilters } from '@/components/property/property-filters';
import { getProperties } from '@/lib/store';

export default function PropertiesPage() {
  const properties = getProperties();

  return (
    <section className="section-container space-y-8">
      <h1 className="text-4xl font-bold">Todas las propiedades</h1>
      <PropertyFilters properties={properties} />
    </section>
  );
}
