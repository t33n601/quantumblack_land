import type { Metadata } from 'next';
import { Montserrat, Audiowide } from 'next/font/google';
import './globals.css';
import { ClubProvider } from '@/providers/ClubProvider';
import ClubModal from '@/ui/ClubModal';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], variable: '--font-montserrat' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400', variable: '--font-audiowide' });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: 'Quantum Black Club — Компьютерный клуб в Алтайском крае',
  description:
    'Quantum Black — современный компьютерный клуб в Власихе, Алтайский край. Топовые ПК, профессиональная периферия, быстрый интернет.',
  openGraph: {
    type: 'website',
    title: 'Quantum Black Club',
    description: 'Компьютерный клуб в Алтайском крае',
    images: ['/logo.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${audiowide.variable} h-full scroll-smooth antialiased`}>
      <head>
        <meta property="og:type" content="website" />
      </head>
      <body className="min-h-full bg-qb-black text-qb-white">
        <ClubProvider>
          {children}
          <ClubModal />
        </ClubProvider>
      </body>
    </html>
  );
}
