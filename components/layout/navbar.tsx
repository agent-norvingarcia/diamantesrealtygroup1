'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/propiedades', label: 'Propiedades' },
  { href: '/mapa', label: 'Mapa' },
  { href: '/perfil', label: 'Perfil' },
  { href: '/contacto', label: 'Contacto' }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 mx-auto mt-4 w-[95%] max-w-6xl rounded-2xl glass"
    >
      <nav className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-accent">
          Norvin Garcia
        </Link>
        <div className="hidden gap-5 text-sm md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/admin/login" className="rounded-full border border-accent/50 px-4 py-2 text-xs hover:bg-accent/20">
          Panel Admin
        </Link>
      </nav>
    </motion.header>
  );
}
