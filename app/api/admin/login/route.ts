import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@norvin.com';
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'Admin123*';

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  }

  (await cookies()).set('admin_token', 'authenticated', {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 8
  });

  return NextResponse.json({ ok: true });
}
