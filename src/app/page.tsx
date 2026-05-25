import { redirect } from 'next/navigation';
import { CLUBS } from '@/lib/clubs';

export default function RootPage() {
  redirect(`/${CLUBS[0].id}`);
}
