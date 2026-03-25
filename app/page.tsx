import Image from 'next/image';
import Link from 'next/link';
import { getProfile, getProperties } from '@/lib/store';
import { PropertyCard } from '@/components/property/property-card';

export default function HomePage() {
  const featured = getProperties().slice(0, 3);
  const profile = getProfile();

  return (
    <div>
      <section className="section-container grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-accent">Real Estate Premium</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Inversiones inmobiliarias de alto nivel con {profile.nombre}</h1>
          <p className="text-textSoft">Encuentra propiedades exclusivas con una experiencia de asesoría personalizada y estratégica.</p>
          <div className="flex gap-4">
            <Link href="/contacto" className="rounded-lg bg-accent px-6 py-3 font-semibold text-black">
              Contactar ahora
            </Link>
            <Link href="/propiedades" className="rounded-lg border border-white/20 px-6 py-3">
              Ver propiedades
            </Link>
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10">
          <Image src="https://images.unsplash.com/photo-1600607687644-c7f34b5db31f" alt="Hero propiedades" fill className="object-cover" priority />
        </div>
      </section>

      <section className="section-container space-y-6">
        <h2 className="text-3xl font-semibold">Propiedades destacadas</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="section-container text-center">
        <p className="text-textSoft">Sígueme en redes:</p>
        <div className="mt-4 flex justify-center gap-6 text-accent">
          <a href={profile.redes.instagram}>Instagram</a>
          <a href={profile.redes.facebook}>Facebook</a>
          <a href={profile.redes.whatsapp}>WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
