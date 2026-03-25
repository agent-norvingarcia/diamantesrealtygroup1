'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PropertyForm } from '@/components/admin/property-form';
import { ProfileForm } from '@/components/admin/profile-form';
import { Profile, Property } from '@/lib/types';

export default function DashboardPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const router = useRouter();

  async function loadData() {
    const [pRes, profileRes] = await Promise.all([fetch('/api/properties'), fetch('/api/profile')]);
    setProperties(await pRes.json());
    setProfile(await profileRes.json());
  }

  useEffect(() => {
    loadData();
  }, []);

  async function saveProperty(property: Property) {
    await fetch('/api/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(property)
    });
    await loadData();
  }

  async function removeProperty(id: string) {
    await fetch(`/api/properties/${id}`, { method: 'DELETE' });
    await loadData();
  }

  async function saveProfile(nextProfile: Profile) {
    await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nextProfile)
    });
    await loadData();
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <section className="section-container space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dashboard Admin</h1>
        <button onClick={logout} className="rounded border border-white/20 px-4 py-2">
          Cerrar sesión
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Crear o editar propiedad</h2>
          <PropertyForm onSubmit={saveProperty} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Propiedades actuales</h2>
          <div className="space-y-3">
            {properties.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/10 p-4">
                <div>
                  <p className="font-medium">{item.titulo}</p>
                  <p className="text-sm text-textSoft">{item.ubicacion}</p>
                </div>
                <button onClick={() => removeProperty(item.id)} className="rounded border border-red-400 px-3 py-1 text-red-300">
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {profile && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Editar perfil y redes</h2>
          <ProfileForm profile={profile} onSubmit={saveProfile} />
        </div>
      )}
    </section>
  );
}
