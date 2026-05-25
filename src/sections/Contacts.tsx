'use client';

import { useClub } from '@/providers/ClubProvider';

const MAP_EMBED =
  'https://yandex.ru/map-widget/v1/?ll=83.56661%2C53.29356&z=15&pt=83.56661%2C53.29356%2Cpm2rdm&size=650%2C400';

export default function Contacts() {
  const { club } = useClub();

  return (
    <section id="contacts" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">

          <div style={{ maxWidth: 400 }}>
            <p className="section-label text-qb-gray">Контакты</p>
            <h2 className="mb-10 text-4xl font-black uppercase leading-none text-white md:text-5xl">
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
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a
                    href="https://t.me/quantum_black22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn"
                    style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, padding: '8px 20px' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    @quantum_black22
                  </a>
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
