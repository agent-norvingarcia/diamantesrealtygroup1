import Image from 'next/image';
import { getProfile } from '@/lib/store';

export default function ProfilePage() {
  const profile = getProfile();

  return (
    <section className="section-container grid items-start gap-10 lg:grid-cols-2">
      <div className="relative mx-auto h-96 w-full max-w-md overflow-hidden rounded-3xl border border-white/10">
        <Image src={profile.foto} alt={profile.nombre} fill className="object-cover" />
      </div>
      <article className="space-y-6">
        <h1 className="text-4xl font-bold">{profile.nombre}</h1>
        <p className="text-textSoft">{profile.descripcion}</p>
        <p>{profile.experiencia}</p>
        <div className="flex flex-wrap gap-4 text-accent">
          <a href={profile.redes.instagram}>Instagram</a>
          <a href={profile.redes.facebook}>Facebook</a>
          <a href={profile.redes.whatsapp}>WhatsApp</a>
          <a href={profile.redes.email}>Email</a>
        </div>
      </article>
    </section>
  );
}
