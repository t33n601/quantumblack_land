import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { CLUBS } from '@/lib/clubs';
import Header from '@/ui/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Pricing from '@/sections/Pricing';
import Specs from '@/sections/Specs';
import Booking from '@/sections/Booking';
import Faq from '@/sections/Faq';
import Contacts from '@/sections/Contacts';
import Footer from '@/ui/Footer';

interface Props {
  params: Promise<{ club: string }>;
}

export async function generateStaticParams() {
  return CLUBS.map(c => ({ club: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { club: clubId } = await params;
  const club = CLUBS.find(c => c.id === clubId);
  if (!club) return {};

  const title = `${club.name} — Компьютерный клуб`;
  const description = club.comingSoon
    ? `${club.name} — скоро открытие. Следите за новостями в Telegram.`
    : `Современный игровой клуб в ${club.address}. Мощные ПК, PlayStation 5, командные зоны. Онлайн-бронирование.`;

  return {
    title,
    description,
    openGraph: { title, description, images: ['/logo.jpg'] },
  };
}

export default async function ClubPage({ params }: Props) {
  const { club: clubId } = await params;
  const club = CLUBS.find(c => c.id === clubId);
  if (!club) redirect(`/${CLUBS[0].id}`);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Specs />
        <Booking />
        <Faq />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
