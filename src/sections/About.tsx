export default function About() {
  return (
    <section id="about" className="w-full py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">

          <div className="md:max-w-sm">
            <p className="section-label text-qb-gray">О клубе</p>
            <h2 className="text-4xl font-black uppercase leading-none text-white md:text-5xl">
              QUANTUM <span className="md:hidden" style={{ color: '#C9A227' }}>BLACK</span>
              <span className="hidden md:inline"><br /><span style={{ color: '#C9A227' }}>BLACK</span></span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-sm leading-relaxed text-white/70">
              Это больше, чем просто компьютерный клуб. Современное игровое пространство
              в Алтайском крае, где мощные игровые станции сочетаются с комфортной атмосферой
              и высоким уровнем сервиса. Топовое железо, быстрый интернет и дружная команда —
              всё для твоей игры.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['24 / 7', 'VIP-комнаты', 'PS5', 'RTX 5080', 'RTX 5070', '610 Гц'].map((tag, i) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: i === 0 ? '#C9A227' : 'rgba(255,255,255,0.6)',
                    border: `1px solid ${i === 0 ? 'rgba(201,162,39,0.4)' : 'rgba(255,255,255,0.08)'}`,
                    background: i === 0 ? 'rgba(201,162,39,0.07)' : 'rgba(255,255,255,0.03)',
                    padding: '5px 12px',
                    boxShadow: i === 0 ? '0 0 10px rgba(201,162,39,0.15)' : 'none',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: 'rgba(201,162,39,0.15)' }} />
          <div className="h-1.5 w-1.5 rounded-full" style={{ background: '#C9A227', boxShadow: '0 0 6px #C9A227' }} />
          <div className="h-px flex-1" style={{ background: 'rgba(201,162,39,0.15)' }} />
        </div>

      </div>
    </section>
  );
}
