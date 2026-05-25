'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import DarkVeil from '@/ui/DarkVeil';

export default function Hero() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrolled(Math.min(window.scrollY / 200, 1));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-qb-black">
      <div
        className="absolute inset-0 z-0"
        style={{ filter: 'sepia(1) hue-rotate(8deg) saturate(1.4) brightness(0.55)' }}
      >
        <DarkVeil
          hueShift={0}
          speed={3}
          noiseIntensity={0.015}
          scanlineIntensity={0.04}
          scanlineFrequency={80}
          warpAmount={0.2}
          resolutionScale={0.8}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(201,162,39,0.10)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-[3] flex flex-col items-center gap-6 px-4 text-center">
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.15)_0%,transparent_70%)]" />
          <Image
            src="/logo.jpg"
            alt="Quantum Black Club"
            width={160}
            height={160}
            priority
            className="relative rounded-full"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-qb-gold">
            Компьютерный клуб
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-qb-white sm:text-5xl md:text-6xl lg:text-7xl">
            QUANTUM BLACK
          </h1>
          <p className="mt-1 text-sm text-qb-gray">Власиха, Алтайский край</p>
        </div>

        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="rounded-lg bg-qb-gold px-7 py-3 text-sm font-semibold text-qb-black transition-all hover:bg-qb-gold-light active:scale-95"
          >
            Забронировать место
          </a>
          <a
            href="#about"
            className="rounded-lg border border-qb-border px-7 py-3 text-sm font-semibold text-qb-white transition-all hover:border-qb-gold hover:text-qb-gold active:scale-95"
          >
            Узнать больше
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 inset-x-0 z-[3] flex flex-col items-center gap-2 text-qb-gray/60"
        style={{ opacity: 1 - scrolled, transform: `translateY(${scrolled * 12}px)` }}
      >
        <span className="text-xs uppercase tracking-widest">Листать</span>
        <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-32 bg-gradient-to-t from-qb-black to-transparent" />
    </section>
  );
}
