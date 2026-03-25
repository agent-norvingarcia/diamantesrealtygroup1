'use client';

import dynamic from 'next/dynamic';
import { Property } from '@/lib/types';

const DynamicMap = dynamic(() => import('./property-map').then((mod) => mod.PropertyMap), {
  ssr: false,
  loading: () => <div className="h-[500px] animate-pulse rounded-2xl bg-white/5" />
});

export function MapShell({ properties, zoom }: { properties: Property[]; zoom?: number }) {
  return <DynamicMap properties={properties} zoom={zoom} />;
}
