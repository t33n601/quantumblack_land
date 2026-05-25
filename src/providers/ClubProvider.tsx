'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import type { Club } from '@/types';
import { CLUBS } from '@/lib/clubs';
import { nearestClub } from '@/lib/geo';

interface ClubContextValue {
  club: Club | null;
  setClub: (club: Club) => void;
  showModal: boolean;
  setShowModal: (v: boolean) => void;
}

const ClubContext = createContext<ClubContextValue>({
  club: null,
  setClub: () => {},
  showModal: false,
  setShowModal: () => {},
});

export function ClubProvider({ children }: { children: React.ReactNode }) {
  const [club, setClubState] = useState<Club | null>(null);
  const [showModal, setShowModal] = useState(false);
  const resolved = useRef(false);

  function setClub(c: Club) {
    resolved.current = true;
    setClubState(c);
    setShowModal(false);
    try { localStorage.setItem('qb_club', c.id); } catch { }
  }

  useEffect(() => {
    const pathSegment = window.location.pathname.replace(/^\//, '').split('/')[0];
    if (pathSegment) {
      const urlClub = CLUBS.find(c => c.id === pathSegment);
      if (urlClub) {
        resolved.current = true;
        setClubState(urlClub);
        try { localStorage.setItem('qb_club', urlClub.id); } catch { }
        return;
      }
    }

    try {
      const saved = localStorage.getItem('qb_club');
      if (saved) {
        const found = CLUBS.find(c => c.id === saved);
        if (found) { resolved.current = true; setClubState(found); return; }
      }
    } catch { }

    if (CLUBS.length === 1) {
      resolved.current = true;
      setClubState(CLUBS[0]);
      return;
    }

    const fallbackTimer = setTimeout(() => {
      if (!resolved.current) { resolved.current = true; setShowModal(true); }
    }, 8000);

    function tryResolve(c: Club) {
      if (resolved.current) return;
      clearTimeout(fallbackTimer);
      setClub(c);
    }

    navigator.geolocation?.getCurrentPosition(
      pos => tryResolve(nearestClub(CLUBS, pos.coords.latitude, pos.coords.longitude)),
      () => { },
      { timeout: 5000 }
    );

    fetch('/api/detect-club')
      .then(r => r.json())
      .then((d: { club: Club | null }) => { if (d.club) tryResolve(d.club); })
      .catch(() => { });

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <ClubContext.Provider value={{ club, setClub, showModal, setShowModal }}>
      {children}
    </ClubContext.Provider>
  );
}

export const useClub = () => useContext(ClubContext);
