'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Нужно ли бронировать заранее?',
    a: 'Бронь не обязательна — можно прийти в любое время, мы работаем 24/7. Но в выходные и вечером в пятницу лучше забронировать заранее, чтобы гарантированно занять место.',
  },
  {
    q: 'Есть ли минимальное время игры?',
    a: 'Минимальное время — 1 час. Дальше оплата поминутно или по выбранному пакету.',
  },
  {
    q: 'Можно прийти компанией?',
    a: 'Да, у нас есть зоны для команд — Squad и Trio|Duo. Для большой компании рекомендуем забронировать заранее.',
  },
  {
    q: 'Есть ли еда и напитки?',
    a: 'Уточняйте у администратора — наличие и ассортимент могут меняться.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">

          <div className="lg:w-56 lg:flex-shrink-0">
            <p className="section-label text-qb-gray">Вопросы</p>
            <h2 className="text-4xl font-black uppercase leading-none text-white md:text-5xl">
              ЧАСТО<br />ЗАДАЮТ
            </h2>
          </div>

          <div style={{ flex: 1 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: open === i ? '#fff' : 'rgba(255,255,255,0.7)' }}>
                    {faq.q}
                  </span>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', border: `1px solid ${open === i ? '#C9A227' : 'rgba(255,255,255,0.15)'}`, background: open === i ? '#C9A227' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: open === i ? '#000' : 'rgba(255,255,255,0.4)', transition: 'all 0.2s', boxShadow: open === i ? '0 0 8px rgba(201,162,39,0.5)' : 'none' }}>
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                <div style={{ display: 'grid', gridTemplateRows: open === i ? '1fr' : '0fr', transition: 'grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ paddingBottom: 18, fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
