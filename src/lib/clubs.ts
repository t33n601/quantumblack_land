import type { Club } from '@/types';

export const CLUBS: Club[] = [
  {
    id: process.env.NEXT_PUBLIC_CLUB_1_ID ?? 'vlasiha',
    name: process.env.NEXT_PUBLIC_CLUB_1_NAME ?? 'Quantum Black — Власиха',
    address: process.env.NEXT_PUBLIC_CLUB_1_ADDRESS ?? 'Алтайский край, Власиха',
    phone: process.env.NEXT_PUBLIC_CLUB_1_PHONE ?? '+7-961-992-86-60',
    lat: parseFloat(process.env.NEXT_PUBLIC_CLUB_1_LAT ?? '53.29356'),
    lng: parseFloat(process.env.NEXT_PUBLIC_CLUB_1_LNG ?? '83.56661'),
  },
  {
    id: process.env.NEXT_PUBLIC_CLUB_2_ID ?? 'krasnodar',
    name: process.env.NEXT_PUBLIC_CLUB_2_NAME ?? 'Quantum Black — Краснодар',
    address: process.env.NEXT_PUBLIC_CLUB_2_ADDRESS ?? 'Краснодар',
    phone: process.env.NEXT_PUBLIC_CLUB_2_PHONE ?? '',
    lat: parseFloat(process.env.NEXT_PUBLIC_CLUB_2_LAT ?? '45.0355'),
    lng: parseFloat(process.env.NEXT_PUBLIC_CLUB_2_LNG ?? '38.9753'),
    comingSoon: true,
  },
  {
    id: process.env.NEXT_PUBLIC_CLUB_3_ID ?? 'siberia',
    name: process.env.NEXT_PUBLIC_CLUB_3_NAME ?? 'Quantum Black — Сибирь',
    address: process.env.NEXT_PUBLIC_CLUB_3_ADDRESS ?? 'Сибирь',
    phone: process.env.NEXT_PUBLIC_CLUB_3_PHONE ?? '',
    lat: parseFloat(process.env.NEXT_PUBLIC_CLUB_3_LAT ?? '54.9885'),
    lng: parseFloat(process.env.NEXT_PUBLIC_CLUB_3_LNG ?? '82.9207'),
    comingSoon: true,
  },
];
