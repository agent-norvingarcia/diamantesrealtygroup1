'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);
    const data = new FormData(event.currentTarget);

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.get('email'), password: data.get('password') })
    });

    setLoading(false);
    if (!response.ok) {
      setError('Credenciales inválidas');
      return;
    }

    router.push('/admin/dashboard');
  }

  return (
    <section className="section-container max-w-lg">
      <h1 className="mb-6 text-3xl font-bold">Acceso Admin</h1>
      <form onSubmit={handleSubmit} className="grid gap-3 rounded-2xl border border-white/10 p-6">
        <input name="email" type="email" placeholder="Email" className="rounded bg-black/30 p-3" required />
        <input name="password" type="password" placeholder="Contraseña" className="rounded bg-black/30 p-3" required />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button disabled={loading} className="rounded bg-accent px-4 py-2 font-semibold text-black">
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </section>
  );
}
