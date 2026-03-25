'use client';

import { FormEvent, useState } from 'react';
import { Profile } from '@/lib/types';

export function ProfileForm({ profile, onSubmit }: { profile: Profile; onSubmit: (profile: Profile) => Promise<void> }) {
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    await onSubmit({
      nombre: String(formData.get('nombre')),
      foto: String(formData.get('foto')),
      descripcion: String(formData.get('descripcion')),
      experiencia: String(formData.get('experiencia')),
      redes: {
        instagram: String(formData.get('instagram')),
        facebook: String(formData.get('facebook')),
        whatsapp: String(formData.get('whatsapp')),
        email: String(formData.get('email'))
      }
    });
    setLoading(false);
  }

  return (
    <form onSubmit={submit} className="grid gap-3 rounded-2xl border border-white/10 p-4">
      <input name="nombre" defaultValue={profile.nombre} className="rounded bg-black/30 p-3" required />
      <input name="foto" defaultValue={profile.foto} className="rounded bg-black/30 p-3" required />
      <textarea name="descripcion" defaultValue={profile.descripcion} className="rounded bg-black/30 p-3" required />
      <textarea name="experiencia" defaultValue={profile.experiencia} className="rounded bg-black/30 p-3" required />
      <input name="instagram" defaultValue={profile.redes.instagram} className="rounded bg-black/30 p-3" required />
      <input name="facebook" defaultValue={profile.redes.facebook} className="rounded bg-black/30 p-3" required />
      <input name="whatsapp" defaultValue={profile.redes.whatsapp} className="rounded bg-black/30 p-3" required />
      <input name="email" defaultValue={profile.redes.email} className="rounded bg-black/30 p-3" required />
      <button className="rounded bg-accent px-4 py-2 font-medium text-black" disabled={loading}>
        {loading ? 'Guardando...' : 'Guardar perfil y redes'}
      </button>
    </form>
  );
}
