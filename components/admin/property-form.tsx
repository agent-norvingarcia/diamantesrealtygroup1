'use client';

import { FormEvent, useState } from 'react';
import { Property } from '@/lib/types';

type Props = {
  initial?: Property;
  onSubmit: (property: Property) => Promise<void>;
};

export function PropertyForm({ initial, onSubmit }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload: Property = {
      id: initial?.id ?? crypto.randomUUID(),
      titulo: String(formData.get('titulo')),
      descripcion: String(formData.get('descripcion')),
      precio: Number(formData.get('precio')),
      ubicacion: String(formData.get('ubicacion')),
      latitud: Number(formData.get('latitud')),
      longitud: Number(formData.get('longitud')),
      imagenes: String(formData.get('imagenes'))
        .split(',')
        .map((img) => img.trim())
        .filter(Boolean),
      tipo: String(formData.get('tipo')),
      fecha: new Date().toISOString()
    };
    setLoading(true);
    await onSubmit(payload);
    setLoading(false);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 rounded-2xl border border-white/10 p-4">
      <input name="titulo" defaultValue={initial?.titulo} placeholder="Título" className="rounded bg-black/30 p-3" required />
      <textarea name="descripcion" defaultValue={initial?.descripcion} placeholder="Descripción" className="rounded bg-black/30 p-3" required />
      <div className="grid gap-3 md:grid-cols-2">
        <input name="precio" type="number" defaultValue={initial?.precio} placeholder="Precio" className="rounded bg-black/30 p-3" required />
        <input name="ubicacion" defaultValue={initial?.ubicacion} placeholder="Ubicación" className="rounded bg-black/30 p-3" required />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input name="latitud" type="number" step="any" defaultValue={initial?.latitud} placeholder="Latitud" className="rounded bg-black/30 p-3" required />
        <input name="longitud" type="number" step="any" defaultValue={initial?.longitud} placeholder="Longitud" className="rounded bg-black/30 p-3" required />
      </div>
      <input name="tipo" defaultValue={initial?.tipo} placeholder="Tipo de propiedad" className="rounded bg-black/30 p-3" required />
      <input
        name="imagenes"
        defaultValue={initial?.imagenes.join(',')}
        placeholder="URLs de imágenes separadas por comas"
        className="rounded bg-black/30 p-3"
        required
      />
      <button disabled={loading} className="rounded bg-accent px-4 py-2 font-medium text-black">
        {loading ? 'Guardando...' : 'Guardar propiedad'}
      </button>
    </form>
  );
}
