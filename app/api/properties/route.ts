import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getProperties, upsertProperty } from '@/lib/store';

const schema = z.object({
  id: z.string(),
  titulo: z.string(),
  descripcion: z.string(),
  precio: z.number(),
  ubicacion: z.string(),
  latitud: z.number(),
  longitud: z.number(),
  imagenes: z.array(z.string()),
  tipo: z.string(),
  fecha: z.string()
});

export async function GET() {
  return NextResponse.json(getProperties());
}

export async function POST(request: Request) {
  const payload = schema.parse(await request.json());
  return NextResponse.json(upsertProperty(payload));
}
