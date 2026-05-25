const STATS = [
  { value: 'RTX 5080', label: 'Топовая карта\nVIP-комнат' },
  { value: '610 Гц',   label: 'Монитор VIP\nASUS ROG 24"' },
  { value: '380 Гц',   label: 'Монитор зал\nASUS ROG 24"' },
];

const SPECS = [
  {
    zone: 'VIP-комнаты',
    gpu: 'RTX 5080 16 GB',
    monitor: '24" ASUS ROG Strix XG248QSG-P · 610 Гц',
  },
  {
    zone: 'Общий зал',
    gpu: 'RTX 5070 16 GB',
    monitor: '24" ASUS ROG Strix XG259QN · 380 Гц',
  },
];

export default function Specs() {
  return (
    <section id="schedule" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">

        <div className="mb-14">
          <p className="section-label text-qb-gray">Железо</p>
          <h2 className="text-3xl font-black uppercase leading-none text-white md:text-5xl">
            Характеристики
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 mb-8"
          style={{ gap: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {STATS.map(s => (
            <div key={s.value} style={{ background: '#000', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 'clamp(28px, 8vw, 48px)', fontWeight: 900, fontStyle: 'italic', color: '#C9A227', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {s.value}
              </span>
              <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
          {SPECS.map(s => (
            <div key={s.zone} style={{ background: '#000', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C9A227' }}>
                {s.zone}
              </span>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>Видеокарта</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{s.gpu}</p>
                </div>
                <div>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>Монитор</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{s.monitor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
