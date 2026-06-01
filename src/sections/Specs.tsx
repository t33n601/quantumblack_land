'use client';

import { useClub } from '@/providers/ClubProvider';

type ZoneSpec = {
  zone: string;
  zoneTag: string;
  cpu: string;
  gpu: string;
  ram: string;
  monitor: string;
  keyboard: string;
  mouse: string;
  headset: string;
  chair: string;
};

const CLUB_SPECS: Record<string, ZoneSpec[]> = {
  vlasiha: [
    {
      zone: 'Play Zone',
      zoneTag: 'Основной зал',
      cpu: 'AMD Ryzen 7 7800X3D',
      gpu: 'NVIDIA GeForce RTX 5070 (16 GB)',
      ram: 'KingBand DDR5 32 GB',
      monitor: '24.5" ASUS ROG Strix XG259QN · 380 Гц',
      keyboard: 'CyberLynx RX75 Pro',
      mouse: 'Logitech Superlight Pro',
      headset: 'HyperX Cloud II',
      chair: 'DXRacer Gladiator',
    },
    {
      zone: 'Squad · Trio · Duo',
      zoneTag: 'Приватные зоны',
      cpu: 'AMD Ryzen 7 7800X3D',
      gpu: 'NVIDIA GeForce RTX 5080 (16 GB)',
      ram: 'KingBand DDR5 32 GB',
      monitor: '24" ASUS ROG Strix XG248Q5G-P · 610 Гц',
      keyboard: 'CyberLynx RX75 Pro',
      mouse: 'Logitech Superlight Pro',
      headset: 'HyperX Cloud III',
      chair: 'DXRacer Master XL',
    },
  ],
};

const SPEC_LABELS: { key: keyof ZoneSpec; label: string; icon: string }[] = [
  { key: 'cpu',      label: 'Процессор',  icon: '⚡' },
  { key: 'gpu',      label: 'Видеокарта', icon: '🎮' },
  { key: 'ram',      label: 'Память',     icon: '💾' },
  { key: 'monitor',  label: 'Монитор',    icon: '🖥' },
  { key: 'keyboard', label: 'Клавиатура', icon: '⌨' },
  { key: 'mouse',    label: 'Мышь',       icon: '🖱' },
  { key: 'headset',  label: 'Наушники',   icon: '🎧' },
  { key: 'chair',    label: 'Кресло',     icon: '💺' },
];

export default function Specs() {
  const { club } = useClub();
  const clubId = club?.id ?? 'vlasiha';
  const zones = CLUB_SPECS[clubId] ?? CLUB_SPECS['vlasiha'];

  return (
    <section id="schedule" className="w-full py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8">

        <div className="mb-14">
          <p className="section-label text-qb-gray">Железо</p>
          <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
            Характеристики
          </h2>
        </div>

        {/* Headline stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 mb-10"
          style={{ gap: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { value: 'RTX 5080', label: 'Видеокарта\nSquad · Trio · Duo' },
            { value: '610 Гц',   label: 'Монитор\nSquad · Trio · Duo' },
            { value: 'RTX 5070', label: 'Видеокарта\nPlay Zone' },
            { value: '380 Гц',   label: 'Монитор\nPlay Zone' },
          ].map(s => (
            <div key={s.value} style={{ background: '#000', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 'clamp(22px, 6vw, 40px)', fontWeight: 900, fontStyle: 'italic', color: '#C9A227', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {s.value}
              </span>
              <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Zone cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
          {zones.map((z, zi) => (
            <div
              key={z.zone}
              style={{
                background: '#000',
                border: '1px solid rgba(255,255,255,0.07)',
                overflow: 'hidden',
              }}
            >
              {/* Zone header */}
              <div style={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: zi === 1 ? 'rgba(201,162,39,0.04)' : 'rgba(255,255,255,0.02)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
              }}>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', color: zi === 1 ? '#C9A227' : '#fff', letterSpacing: '-0.01em' }}>
                    {z.zone}
                  </p>
                  <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
                    {z.zoneTag}
                  </p>
                </div>
                {zi === 1 && (
                  <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#C9A227', padding: '3px 8px', border: '1px solid rgba(201,162,39,0.4)' }}>
                    Топ
                  </span>
                )}
              </div>

              {/* Spec rows */}
              <div style={{ padding: '8px 0' }}>
                {SPEC_LABELS.map((row, ri) => (
                  <div
                    key={row.key}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '90px 1fr',
                      alignItems: 'center',
                      gap: 12,
                      padding: '9px 20px',
                      borderBottom: ri < SPEC_LABELS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    }}
                  >
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {row.label}
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>
                      {z[row.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
