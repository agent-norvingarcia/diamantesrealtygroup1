import { NextResponse } from 'next/server';
import { deleteProperty } from '@/lib/store';

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  deleteProperty(id);
  return NextResponse.json({ ok: true });
}
