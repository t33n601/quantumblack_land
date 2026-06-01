'use client';

import { useClub } from '@/providers/ClubProvider';

const MAP_EMBED =
  'https://yandex.ru/map-widget/v1/?ll=83.56661%2C53.29356&z=15&pt=83.56661%2C53.29356%2Cpm2rdm&size=650%2C400';

export default function Contacts() {
  const { club } = useClub();

  return (
    <section id="contacts" className="w-full py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">

          <div style={{ maxWidth: 400 }}>
            <p className="section-label text-qb-gray">Контакты</p>
            <h2 className="mb-10 text-4xl font-black uppercase text-white md:text-5xl" style={{ letterSpacing: '0.08em', lineHeight: 1.2 }}>
              КАК НАС<br />НАЙТИ
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

              <div>
                <p className="section-label" style={{ color: '#C9A227', marginBottom: 6 }}>Адрес</p>
                <p style={{ fontSize: 15, fontWeight: 700, textTransform: 'uppercase', color: '#fff' }}>
                  {club?.address ?? 'Алтайский край, Власиха'}
                </p>
              </div>

              <div>
                <p className="section-label" style={{ color: '#C9A227', marginBottom: 6 }}>Телефон</p>
                <a
                  href="tel:+79619928660"
                  style={{ fontSize: 20, fontWeight: 900, textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A227')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                >
                  +7-961-992-86-60
                </a>
              </div>

              <div>
                <p className="section-label" style={{ color: '#C9A227', marginBottom: 10 }}>Мы в сети</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[
                    {
                      href: 'https://t.me/QuantumBlackClub',
                      platform: 'Telegram',
                      handle: '@QuantumBlackClub',
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      ),
                    },
                    {
                      href: 'https://max.ru/join/_L6pXbZYBmW64eQ0FuMX0tBS1tTu0ATdCtgjOP7_N7Q',
                      platform: 'Max',
                      handle: 'QuantumBlackClub',
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-13C4.67 20 4 19.33 4 18.5v-13zM7 17h1.8v-4.4l2.2 2.8 2.2-2.8V17H15V7h-1.6L12 9.5 10.6 7H7v10z"/>
                        </svg>
                      ),
                    },
                    {
                      href: 'https://www.instagram.com/quantumblackclub?igsh=MTVleWR2cDR1YmoxNA%3D%3D&utm_source=qr',
                      platform: 'Instagram',
                      handle: '@quantumblackclub',
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
                      platform: 'TikTok',
                      handle: '@quantumblackclub',
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                        </svg>
                      ),
                    },
                  ].map((s, i, arr) => (
                    <a
                      key={s.platform}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#fff', textDecoration: 'none', padding: '8px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#C9A227')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                    >
                      <span style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {s.icon}
                      </span>
                      <div>
                        <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 1 }}>{s.platform}</p>
                        <p style={{ fontWeight: 600 }}>{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div style={{ flex: 1, minHeight: 400, maxWidth: 600, width: '100%' }}>
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="450"
              style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
              allowFullScreen
              loading="lazy"
              title="Карта клуба"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
