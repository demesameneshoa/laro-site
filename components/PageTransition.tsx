'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

// A two-tone curtain sweeps away every time the route changes (not on first load: the preloader covers that).
export default function PageTransition() {
  const pathname = usePathname();
  const first = useRef(true);
  const [key, setKey] = useState(0);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setKey((k) => k + 1);
    window.scrollTo(0, 0);
  }, [pathname]);
  if (key === 0) return null;
  return (
    <div className="curtain" key={key} aria-hidden="true"><i className="c1" /><i className="c2" /></div>
  );
}
