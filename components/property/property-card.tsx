'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Property } from '@/lib/types';
import { currency } from '@/lib/utils';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-glow">
      <div className="relative h-56">
        <Image src={property.imagenes[0]} alt={property.titulo} fill className="object-cover" loading="lazy" />
      </div>
      <div className="space-y-2 p-5">
        <p className="text-sm text-accent">{property.tipo}</p>
        <h3 className="text-lg font-semibold">{property.titulo}</h3>
        <p className="text-sm text-textSoft">{property.ubicacion}</p>
        <p className="line-clamp-2 text-sm text-textSoft">{property.descripcion}</p>
        <p className="text-xl font-bold">{currency.format(property.precio)}</p>
        <Link href={`/propiedades/${property.id}`} className="inline-block rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black">
          Ver detalle
        </Link>
      </div>
    </motion.article>
  );
}
