'use client';

import { useState } from 'react';

const ZONES = [
  {
    id: 'play',
    line1: 'PLAY',
    line2: 'ZONE',
    tag: 'PC',
    description: 'Основной зал для одиночной игры и компании.',
    price: 'от 126 ₽/час',
    isPS: false,
    tariffs: [
      { label: '1 час',   weekday: '126 ₽',  weekend: '140 ₽' },
      { label: '3 часа',  weekday: '315 ₽',  weekend: '350 ₽' },
      { label: '5 часов', weekday: '490 ₽',  weekend: '560 ₽' },
      { label: 'Ночь',    weekday: '560 ₽',  weekend: '700 ₽' },
    ],
  },
  {
    id: 'squad',
    line1: 'SQUAD',
    line2: '',
    tag: 'PC',
    description: 'Шумоизолированная зона для тренировок и игр с командой.',
    price: 'от 175 ₽/час',
    isPS: false,
    tariffs: [
      { label: '1 час',   weekday: '175 ₽',  weekend: '189 ₽' },
      { label: '3 часа',  weekday: '385 ₽',  weekend: '455 ₽' },
      { label: '5 часов', weekday: '630 ₽',  weekend: '700 ₽' },
      { label: 'Ночь',    weekday: '910 ₽',  weekend: '1050 ₽' },
    ],
  },
  {
    id: 'trio',
    line1: 'TRIO |',
    line2: 'DUO',
    tag: 'PC',
    description: 'Уединённые кабинки для двух или трёх игроков.',
    price: 'от 210 ₽/час',
    isPS: false,
    tariffs: [
      { label: '1 час',   weekday: '210 ₽',  weekend: '245 ₽' },
      { label: '3 часа',  weekday: '560 ₽',  weekend: '630 ₽' },
      { label: '5 часов', weekday: '910 ₽',  weekend: '1050 ₽' },
      { label: 'Ночь',    weekday: '1260 ₽', weekend: '1400 ₽' },
    ],
  },
  {
    id: 'ps',
    line1: 'PS',
    line2: 'PLACE',
    tag: 'PS5',
    description: 'PlayStation 5. Большой каталог игр, широкий экран.',
    price: 'от 175 ₽/час',
    isPS: true,
    tariffs: [
      { label: '1 час',   weekday: '175 ₽',  weekend: '189 ₽' },
      { label: '3 часа',  weekday: '385 ₽',  weekend: '455 ₽' },
      { label: '5 часов', weekday: '630 ₽',  weekend: '700 ₽' },
      { label: 'Ночь',    weekday: '910 ₽',  weekend: '1050 ₽' },
    ],
  },
  {
    id: 'psvip',
    line1: 'PS',
    line2: 'VIP',
    tag: 'PS5',
    description: 'VIP PlayStation. ТВ 75", максимальный комфорт и уединение.',
    price: 'от 280 ₽/час',
    isPS: true,
    tariffs: [
      { label: '1 час',   weekday: '280 ₽',  weekend: '301 ₽' },
      { label: '3 часа',  weekday: '700 ₽',  weekend: '770 ₽' },
      { label: '5 часов', weekday: '1050 ₽', weekend: '1260 ₽' },
      { label: 'Ночь',    weekday: '1750 ₽', weekend: '1960 ₽' },
    ],
  },
];

export default function Pricing() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section id="pricing" className="w-full py-20 md:py-28">
      <div className="mx-auto px-4 md:px-8" style={{ maxWidth: 1400 }}>

        <div className="mb-12">
          <p className="section-label text-qb-gray">Игровые зоны</p>
          <h2 className="text-4xl font-black uppercase leading-none text-white md:text-5xl">Цены</h2>
          <p style={{ marginTop: 8, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            Выходной тариф: пт 20:00 — вс 23:59
          </p>
        </div>

        <div className="zones-scroll" style={{ paddingBottom: 16 }}>
          {ZONES.map(zone => {
            const color = zone.isPS ? '#c8d0dc' : '#C9A227';
            const isFlipped = flipped === zone.id;

            return (
              <div key={zone.id} className="zone-card" style={{ position: 'relative', overflow: 'hidden' }}>

                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: '#000',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'opacity 0.35s ease, transform 0.45s cubic-bezier(0.4,0,0.2,1)',
                    opacity: isFlipped ? 0 : 1,
                    transform: isFlipped ? 'scale(0.97)' : 'scale(1)',
                    pointerEvents: isFlipped ? 'none' : 'auto',
                  }}
                >
                  <div style={{ height: 220, position: 'relative', overflow: 'hidden', background: '#06060a', flexShrink: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 25% 70%, ${color}22 0%, transparent 65%)` }} />
                    <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`, borderRadius: '50%' }} />
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 12, left: 16, fontSize: 68, fontWeight: 900, fontStyle: 'italic', color: `${color}13`, letterSpacing: -3, textTransform: 'uppercase', lineHeight: 0.88, userSelect: 'none' }}>
                      <div>{zone.line1}</div>
                      {zone.line2 && <div>{zone.line2}</div>}
                    </div>
                    <div style={{ position: 'absolute', top: 16, left: 16, fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color, padding: '3px 9px', border: `1px solid ${color}44` }}>
                      {zone.tag}
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${color}55, transparent)` }} />
                  </div>

                  <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <p style={{ fontSize: 22, fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', color: '#fff', lineHeight: 1, letterSpacing: -0.5 }}>
                        {zone.line1}{zone.line2 && <><br />{zone.line2}</>}
                      </p>
                      <p style={{ marginTop: 10, fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.55 }}>
                        {zone.description}
                      </p>
                    </div>
                    <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
                      <button
                        onClick={() => setFlipped(zone.id)}
                        style={{ background: 'transparent', border: `1px solid ${color}`, color: '#fff', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, padding: '9px 22px', cursor: 'pointer', flexShrink: 0, transition: 'background 0.18s' }}
                        onMouseEnter={e => (e.currentTarget.style.background = `${color}1a`)}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        Цены
                      </button>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
                        {zone.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: '#040407',
                    border: `1px solid ${color}28`,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '28px 24px 24px',
                    transform: isFlipped ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <p style={{ fontSize: 26, fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', color: '#fff', lineHeight: 0.95, letterSpacing: -0.5, marginBottom: 22 }}>
                    {zone.line1}{zone.line2 && <><br />{zone.line2}</>}
                  </p>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: 1.5, paddingBottom: 8, marginBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span>Тариф</span>
                      <span style={{ marginRight: 12 }}>Будни</span>
                      <span>Вых</span>
                    </div>
                    {zone.tariffs.map((t, i) => (
                      <div key={t.label} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', padding: '9px 0', borderBottom: i < zone.tariffs.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{t.label}</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginRight: 12 }}>{t.weekday}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color }}>{t.weekend}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
                    <a
                      href="#booking"
                      style={{ display: 'block', textAlign: 'center', background: 'transparent', border: `1px solid ${color}`, color: '#fff', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, padding: '11px 16px', textDecoration: 'none', transition: 'background 0.18s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = `${color}1a`)}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      Забронировать
                    </a>
                    <button
                      onClick={() => setFlipped(null)}
                      style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, padding: '11px 16px', cursor: 'pointer', transition: 'border-color 0.18s, color 0.18s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
                    >
                      Назад
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
