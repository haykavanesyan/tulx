import { NextResponse } from 'next/server';

import { searchFunctions } from '@/lib/functions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  if (!query.trim()) {
    return NextResponse.json({ functions: [] });
  }

  const functions = await searchFunctions(query);
  return NextResponse.json({ functions });
}
