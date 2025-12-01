import { NextResponse } from 'next/server';

import { getFunctions } from '@/lib/functions';

export async function GET() {
  const functions = await getFunctions();
  return NextResponse.json({ functions });
}
