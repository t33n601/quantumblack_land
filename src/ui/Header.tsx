'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useClub } from '@/providers/ClubProvider';
import { CLUBS } from '@/lib/clubs';

const NAV_LINKS = [
  { href: '#about',    label: 'О клубе' },
  { href: '#pricing',  label: 'Зоны' },
  { href: '#schedule', label: 'Характеристики' },
  { href: '#booking',  label: 'Бронь' },
  { href: '#faq',      label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  const { club, setShowModal } = useClub();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    function onResize() { if (window.innerWidth >= 768) setMenuOpen(false); }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header ref={menuRef} className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-qb-border">
      <div className="flex items-center justify-between px-4 md:px-8 h-16">

        <div className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Quantum Black" width={36} height={36} className="rounded-sm" />
          <span className="hidden sm:block text-qb-white font-semibold tracking-widest text-sm uppercase">
            Quantum Black
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-qb-gray">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="hover:text-qb-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => CLUBS.length > 1 && setShowModal(true)}
            className={[
              'flex items-center gap-2 rounded border px-3 py-1.5 text-xs transition-colors',
              CLUBS.length > 1
                ? 'border-qb-gold/40 text-qb-gold hover:border-qb-gold hover:bg-qb-gold/10 cursor-pointer'
                : 'border-qb-border text-qb-gray cursor-default',
            ].join(' ')}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-qb-gold animate-pulse shrink-0" />
            <span className="max-w-[120px] truncate">
              {club ? club.address : 'Определяем…'}
            </span>
            {CLUBS.length > 1 && (
              <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 16 16">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Меню"
          >
            <span className={['block h-0.5 w-5 bg-qb-white transition-all duration-200', menuOpen ? 'rotate-45 translate-y-2' : ''].join(' ')} />
            <span className={['block h-0.5 w-5 bg-qb-white transition-all duration-200', menuOpen ? 'opacity-0' : ''].join(' ')} />
            <span className={['block h-0.5 w-5 bg-qb-white transition-all duration-200', menuOpen ? '-rotate-45 -translate-y-2' : ''].join(' ')} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-qb-border bg-black/95 backdrop-blur-md">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-6 py-4 text-sm text-qb-gray border-b border-qb-border/50 hover:text-qb-gold hover:bg-qb-gold/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
