import { getProfile } from '@/lib/store';

export default function ContactPage() {
  const profile = getProfile();

  return (
    <section className="section-container grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Contacto</h1>
        <p className="text-textSoft">¿Listo para vender, comprar o invertir? Escríbeme y te responderé en menos de 24 horas.</p>
        <div className="flex flex-col gap-3 text-accent">
          <a href={profile.redes.whatsapp}>WhatsApp</a>
          <a href={profile.redes.email}>Email</a>
          <a href={profile.redes.instagram}>Instagram</a>
          <a href={profile.redes.facebook}>Facebook</a>
        </div>
      </div>
      <form className="grid gap-3 rounded-2xl border border-white/10 p-6">
        <input className="rounded bg-black/30 p-3" placeholder="Nombre" required />
        <input type="email" className="rounded bg-black/30 p-3" placeholder="Email" required />
        <textarea className="min-h-32 rounded bg-black/30 p-3" placeholder="Mensaje" required />
        <button className="rounded bg-accent px-4 py-3 font-semibold text-black">Enviar mensaje</button>
      </form>
    </section>
  );
}
