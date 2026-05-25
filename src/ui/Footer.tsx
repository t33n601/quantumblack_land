'use client';

import Image from 'next/image';

const currentYear = new Date().getFullYear();

const LEGAL = {
  entity: 'ООО «Альянс ИКС»',
  inn: 'ИНН: 2222912820',
  kpp: 'КПП: 222201001',
  ogrn: 'ОГРН: 1252200013053',
  address: '656902, Алтайский край, с. Власиха, ул. Строительная, д. 206',
};

const NAV = [
  { href: '#about',    label: 'О клубе' },
  { href: '#pricing',  label: 'Зоны' },
  { href: '#schedule', label: 'Характеристики' },
  { href: '#booking',  label: 'Бронь' },
  { href: '#faq',      label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: '#000', padding: '48px 0 32px' }}>
      <div className="container mx-auto px-4 md:px-8">

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 24, alignItems: 'flex-start' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Image src="/logo.jpg" alt="Quantum Black" width={38} height={38} style={{ borderRadius: 4 }} />
              <div>
                <p style={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff' }}>
                  QUANTUM BLACK
                </p>
                <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>
                  Компьютерный клуб
                </p>
              </div>
            </div>

            <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
              {NAV.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A227')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  {l.label}
                </a>
              ))}
            </nav>

          </div>
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{LEGAL.entity}</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{LEGAL.inn} · {LEGAL.kpp} · {LEGAL.ogrn}</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>Юр. адрес: {LEGAL.address}</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', marginTop: 8 }}>
            © {currentYear} Quantum Black Club
          </p>
        </div>

      </div>
    </footer>
  );
}
