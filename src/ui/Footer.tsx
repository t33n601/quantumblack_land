'use client';

import Image from 'next/image';
import { useState } from 'react';

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

const SOCIALS = [
  {
    href: 'https://t.me/QuantumBlackClub',
    label: 'Telegram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    href: 'https://max.ru/join/_L6pXbZYBmW64eQ0FuMX0tBS1tTu0ATdCtgjOP7_N7Q',
    label: 'Max',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-13C4.67 20 4 19.33 4 18.5v-13zM7 17h1.8v-4.4l2.2 2.8 2.2-2.8V17H15V7h-1.6L12 9.5 10.6 7H7v10z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/quantumblackclub?igsh=MTVleWR2cDR1YmoxNA%3D%3D&utm_source=qr',
    label: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: 'https://www.tiktok.com/@quantumblackclub',
    label: 'TikTok',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  function copyEmail() {
    navigator.clipboard.writeText('quantumblack@bk.ru').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: '#000', padding: '48px 0 32px' }}>
      <div className="container mx-auto px-4 md:px-8">

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 40, marginBottom: 40, alignItems: 'flex-start' }}>

          {/* Brand */}
          <div style={{ minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Image src="/logo.png" alt="Quantum Black" width={38} height={38} unoptimized style={{ borderRadius: 4 }} />
              <div>
                <p className="qb-brand-label" style={{ fontSize: 14, fontWeight: 400 }}>
                  QUANTUM BLACK
                </p>
                <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>
                  Компьютерный клуб
                </p>
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', transition: 'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#C9A227'; e.currentTarget.style.borderColor = 'rgba(201,162,39,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', alignContent: 'flex-start' }}>
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

          {/* Commercial email */}
          <div>
            <p className="section-label" style={{ color: '#C9A227', marginBottom: 8 }}>По вопросам сотрудничества</p>
            <button
              onClick={copyEmail}
              style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: copied ? '#C9A227' : '#fff', fontSize: 14, fontWeight: 600, transition: 'color 0.2s' }}
            >
              <span>quantumblack@bk.ru</span>
              <span style={{ fontSize: 11, color: copied ? '#C9A227' : 'rgba(255,255,255,0.3)', transition: 'color 0.2s', display: 'inline-block', minWidth: 100 }}>
                {copied ? '✓ Скопировано' : 'скопировать'}
              </span>
            </button>
            <p style={{ marginTop: 4, fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>
              Коммерческие предложения, партнёрство
            </p>
          </div>

        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }} suppressHydrationWarning>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }} suppressHydrationWarning>{LEGAL.entity}</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }} suppressHydrationWarning>{LEGAL.inn} · {LEGAL.kpp} · {LEGAL.ogrn}</p>
          {/* x-apple-data-detectors="false" prevents iOS Safari from auto-linking the address */}
          <p {...{ 'x-apple-data-detectors': 'false' }} style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }} suppressHydrationWarning>Юр. адрес: {LEGAL.address}</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', marginTop: 8 }} suppressHydrationWarning>
            © {currentYear} Quantum Black Club
          </p>
        </div>

      </div>
    </footer>
  );
}
