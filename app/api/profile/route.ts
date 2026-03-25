import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getProfile, updateProfile } from '@/lib/store';

const schema = z.object({
  nombre: z.string(),
  foto: z.string(),
  descripcion: z.string(),
  experiencia: z.string(),
  redes: z.object({
    instagram: z.string(),
    facebook: z.string(),
    whatsapp: z.string(),
    email: z.string()
  })
});

export async function GET() {
  return NextResponse.json(getProfile());
}

export async function PUT(request: Request) {
  const payload = schema.parse(await request.json());
  return NextResponse.json(updateProfile(payload));
}
