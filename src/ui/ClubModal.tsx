'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClub } from '@/providers/ClubProvider';
import { CLUBS } from '@/lib/clubs';
import type { Club } from '@/types';

export default function ClubModal() {
  const { showModal, setShowModal, setClub } = useClub();
  const router = useRouter();

  function handleSelect(club: Club) {
    setClub(club);
    router.push(`/${club.id}`);
  }

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => CLUBS.length > 1 && setShowModal(false)}
      />
      <div className="relative w-full max-w-sm rounded-xl border border-qb-border bg-qb-surface p-6 shadow-2xl">
        <h2 className="mb-1 text-lg font-semibold text-qb-white">Выберите клуб</h2>
        <p className="mb-5 text-sm text-qb-gray">
          Не удалось определить ближайший клуб автоматически.
        </p>
        <div className="flex flex-col gap-3">
          {CLUBS.map((club: Club) => (
            <button
              key={club.id}
              onClick={() => handleSelect(club)}
              className="flex items-center justify-between rounded-lg border border-qb-border bg-qb-card px-4 py-3 text-left transition-colors hover:border-qb-gold hover:bg-qb-gold/5"
            >
              <div>
                <span className="text-sm font-medium text-qb-white">{club.name}</span>
                {club.address && !club.comingSoon && (
                  <span className="mt-0.5 block text-xs text-qb-gray">{club.address}</span>
                )}
              </div>
              {club.comingSoon && (
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#C9A227', border: '1px solid rgba(201,162,39,0.35)', padding: '2px 7px', flexShrink: 0 }}>
                  Скоро
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
