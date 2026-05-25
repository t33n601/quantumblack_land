'use client';

import { useState } from 'react';

const ZONE_OPTIONS = [
  'Play Zone — PC',
  'Squad — PC',
  'Trio | Duo — PC',
  'PS Place — PlayStation 5',
  'PS VIP — PlayStation 5',
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: '1px solid rgba(255,255,255,0.12)',
  padding: '12px 16px',
  fontSize: 14,
  color: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s',
};

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  const d = digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits;
  const n = d.slice(0, 10);
  if (n.length === 0) return '+7';
  if (n.length <= 3) return `+7 (${n}`;
  if (n.length <= 6) return `+7 (${n.slice(0, 3)}) ${n.slice(3)}`;
  if (n.length <= 8) return `+7 (${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`;
  return `+7 (${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 8)}-${n.slice(8)}`;
}

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '+7', zone: '', players: '1', datetime: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Бронь:\nИмя: ${form.name}\nТел: ${form.phone}\nЗона: ${form.zone}\nИгроков: ${form.players}\nДата/время: ${form.datetime}`;
    window.open(`https://t.me/quantum_black22?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  }

  function focusStyle(name: string): React.CSSProperties {
    return {
      ...inputStyle,
      borderColor: focused === name ? '#C9A227' : 'rgba(255,255,255,0.12)',
      boxShadow: focused === name ? '0 0 6px rgba(201,162,39,0.2)' : 'none',
    };
  }

  return (
    <section id="booking" className="w-full py-20 md:py-28">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-4 md:flex-row md:px-8">

        <div className="md:max-w-xs">
          <p className="section-label text-qb-gray">Бронирование</p>
          <h2 className="font-black uppercase leading-none text-white" style={{ fontSize: 'clamp(28px, 8vw, 48px)' }}>
            ЗАБРОНИРОВАТЬ
          </h2>
          <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
            Заполни форму — мы подтвердим бронь через Telegram. Или звони:{' '}
            <a href="tel:+79619928660" style={{ color: '#C9A227' }}>+7-961-992-86-60</a>
          </p>
        </div>

        <div style={{ flex: 1, maxWidth: 520 }}>
          {sent ? (
            <div
              style={{
                border: '1px solid rgba(201,162,39,0.3)',
                padding: 40,
                textAlign: 'center',
                background: 'rgba(201,162,39,0.05)',
              }}
            >
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: '#C9A227',
                }}
              >
                Бронь записана!
              </p>
              <p style={{ marginTop: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                Мы свяжемся с тобой в ближайшее время.
              </p>
              <button
                onClick={() => setSent(false)}
                className="neon-btn" data-text="Новая бронь"
                style={{ marginTop: 24, borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)' }}
              >
                Новая бронь
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Имя</p>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Твоё имя"
                    style={{ ...focusStyle('name'), '::placeholder': { color: 'rgba(255,255,255,0.2)' } } as React.CSSProperties}
                  />
                </div>
                <div>
                  <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Телефон</p>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: formatPhone(e.target.value) }))}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                    style={focusStyle('phone')}
                  />
                </div>
              </div>

              <div>
                <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Дата и время</p>
                <input
                  required
                  type="datetime-local"
                  value={form.datetime}
                  onChange={e => setForm(f => ({ ...f, datetime: e.target.value }))}
                  onFocus={() => setFocused('datetime')}
                  onBlur={() => setFocused(null)}
                  style={{ ...focusStyle('datetime'), colorScheme: 'dark' } as React.CSSProperties}
                />
              </div>

              <div>
                <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Выбери зону</p>
                <select
                  required
                  value={form.zone}
                  onChange={e => setForm(f => ({ ...f, zone: e.target.value }))}
                  onFocus={() => setFocused('zone')}
                  onBlur={() => setFocused(null)}
                  style={{ ...focusStyle('zone'), background: '#000' }}
                >
                  <option value="">— Выбрать —</option>
                  {ZONE_OPTIONS.map(z => (
                    <option key={z} value={z}>{z}</option>
                  ))}
                </select>
              </div>

              <div>
                <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Кол-во игроков</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, players: String(Math.max(1, Number(f.players) - 1)) }))}
                    style={{
                      width: 36,
                      height: 36,
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'transparent',
                      color: '#fff',
                      fontSize: 18,
                      cursor: 'pointer',
                      lineHeight: 1,
                    }}
                  >−</button>
                  <span style={{ fontSize: 20, fontWeight: 700, color: '#fff', width: 28, textAlign: 'center' }}>
                    {form.players}
                  </span>
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, players: String(Math.min(10, Number(f.players) + 1)) }))}
                    style={{
                      width: 36,
                      height: 36,
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'transparent',
                      color: '#fff',
                      fontSize: 18,
                      cursor: 'pointer',
                      lineHeight: 1,
                    }}
                  >+</button>
                </div>
              </div>

              <button type="submit" className="neon-btn" data-text="Забронировать" style={{ marginTop: 8, display: 'block', textAlign: 'center', width: '100%' }}>
                Забронировать
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
