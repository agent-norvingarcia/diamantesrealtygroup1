import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapShell } from '@/components/property/map-shell';
import { getProfile, getPropertyById } from '@/lib/store';
import { currency } from '@/lib/utils';

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = getPropertyById(id);
  const profile = getProfile();

  if (!property) notFound();

  return (
    <section className="section-container space-y-8">
      <h1 className="text-4xl font-bold">{property.titulo}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {property.imagenes.map((image, index) => (
          <div className="relative h-72 overflow-hidden rounded-2xl" key={image + index}>
            <Image src={image} alt={property.titulo} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <article className="space-y-4 lg:col-span-2">
          <p className="text-textSoft">{property.descripcion}</p>
          <p className="text-3xl font-semibold text-accent">{currency.format(property.precio)}</p>
          <p>{property.ubicacion}</p>
          <MapShell properties={[property]} zoom={14} />
        </article>
        <aside className="rounded-2xl border border-white/10 p-6">
          <h3 className="text-xl font-semibold">Agente</h3>
          <p className="mt-2">{profile.nombre}</p>
          <p className="mt-4 text-sm text-textSoft">{profile.experiencia}</p>
          <div className="mt-6 flex flex-col gap-3">
            <Link href={profile.redes.whatsapp} className="rounded-lg bg-accent px-4 py-2 text-center font-medium text-black">
              Contactar por WhatsApp
            </Link>
            <Link href={profile.redes.email} className="rounded-lg border border-white/20 px-4 py-2 text-center">
              Contactar por Email
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
