import { NextRequest, NextResponse } from 'next/server';
import { CLUBS } from '@/lib/clubs';
import { nearestClub } from '@/lib/geo';

export async function GET(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0].trim() ?? request.headers.get('x-real-ip') ?? '';

  if (!ip || ip === '127.0.0.1' || ip.startsWith('::')) {
    return NextResponse.json({ club: null, reason: 'local' });
  }

  try {
    const base = process.env.IPAPI_BASE_URL ?? 'http://ip-api.com/json';
    const res = await fetch(`${base}/${ip}?fields=status,lat,lon`, { next: { revalidate: 0 } });
    const data: { status: string; lat: number; lon: number } = await res.json();

    if (data.status !== 'success') {
      return NextResponse.json({ club: null, reason: 'ip-fail' });
    }

    const club = nearestClub(CLUBS, data.lat, data.lon);
    return NextResponse.json({ club, lat: data.lat, lng: data.lon });
  } catch {
    return NextResponse.json({ club: null, reason: 'error' });
  }
}
