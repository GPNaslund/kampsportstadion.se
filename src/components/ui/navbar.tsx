'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const PRIMARY = [
  { href: '/klasser', label: 'Klasser' },
  { href: '/schema', label: 'Schema' },
  { href: '/medlemskap', label: 'Medlemskap' },
  { href: '/pt', label: 'Personlig träning' },
];

const SECONDARY = [
  { href: '/foretag', label: 'Företag' },
  { href: '/sociala-projekt', label: 'Sociala projekt' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: 'https://kampsportstadion-online.se/', label: 'Online coachning', external: true },
];

const ALL = [{ href: '/', label: 'Hem' }, ...PRIMARY, ...SECONDARY];

const MEMBERSHIP_URL =
  'https://www.gymcontrol.se/global/webshop/index.php?uid=8975&action=home';

export default function Navbar({ overImage = false }: { overImage?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const surface = overImage && !scrolled
    ? 'bg-transparent border-transparent'
    : 'bg-paper/85 backdrop-blur-md border-graphite-300/70';

  const inkColor = overImage && !scrolled ? 'text-paper' : 'text-ink';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b transition-colors duration-300 ease-out-quint ${surface}`}
      >
        <div className="max-w-wide mx-auto edge h-16 w-900:h-20 flex items-center justify-between gap-6">
          {/* Wordmark */}
          <Link href="/" className={`flex items-center gap-3 ${inkColor} transition-colors`} aria-label="Kampsportstadion — startsida">
            <img src="/dif.png" alt="" width={36} height={36} className="w-9 h-9 w-900:w-10 w-900:h-10 object-contain" />
            <span className="font-display text-[1.05rem] w-900:text-[1.2rem] tracking-[-0.02em] leading-none">
              Kampsport<span className="opacity-60">·</span>stadion
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden w-900:flex items-center gap-1" aria-label="Primär navigation">
            {PRIMARY.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2 text-[14px] tracking-[-0.005em] rounded transition-colors ${
                    active
                      ? `${inkColor} underline underline-offset-[6px] decoration-accent decoration-2`
                      : `${inkColor} hover:text-accent`
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <span className={`mx-3 h-4 w-px ${overImage && !scrolled ? 'bg-paper/40' : 'bg-graphite-300'}`} aria-hidden="true" />
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center h-10 px-4 text-[14px] font-medium rounded-full bg-ink text-paper border border-ink hover:bg-accent hover:border-accent transition-colors"
            >
              Bli medlem
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`ml-2 w-10 h-10 inline-flex items-center justify-center rounded-full border ${overImage && !scrolled ? 'border-paper/40 text-paper' : 'border-graphite-300 text-ink'} hover:border-accent hover:text-accent transition-colors`}
              aria-label="Öppna meny"
              aria-expanded={open}
            >
              <Hamburger open={false} />
            </button>
          </nav>

          {/* Mobile trigger */}
          <button
            onClick={() => setOpen(true)}
            className={`w-900:hidden h-10 px-4 inline-flex items-center gap-2 rounded-full border ${overImage && !scrolled ? 'border-paper/50 text-paper' : 'border-graphite-300 text-ink'}`}
            aria-label="Öppna meny"
            aria-expanded={open}
          >
            <Hamburger open={false} />
            <span className="text-sm">Meny</span>
          </button>
        </div>
      </header>

      {/* Slide-down panel */}
      <div
        ref={panelRef}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-label="Stäng meny"
          tabIndex={open ? 0 : -1}
        />
        <div
          className={`absolute top-0 right-0 left-0 bg-paper border-b border-graphite-300 shadow-[0_30px_80px_-30px_rgba(20,24,40,0.25)] transition-transform duration-500 ease-out-quint ${open ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="max-w-wide mx-auto edge pt-6 pb-10 w-900:pt-8 w-900:pb-16">
            <div className="flex items-center justify-between h-12">
              <Link href="/" className="flex items-center gap-3 text-ink">
                <img src="/dif.png" alt="" width={36} height={36} className="w-9 h-9 object-contain" />
                <span className="font-display text-[1.1rem] tracking-[-0.02em] leading-none">
                  Kampsport<span className="opacity-60">·</span>stadion
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="h-10 px-4 inline-flex items-center gap-2 rounded-full border border-graphite-300 text-ink hover:border-accent hover:text-accent transition-colors"
                aria-label="Stäng meny"
              >
                <Hamburger open={true} />
                <span className="text-sm">Stäng</span>
              </button>
            </div>

            <div className="mt-10 grid w-900:grid-cols-12 gap-10 w-900:gap-16">
              <div className="w-900:col-span-8">
                <p className="eyebrow mb-6">Navigation</p>
                <ul className="grid w-450:grid-cols-2 gap-y-4 gap-x-10">
                  {ALL.map((l, i) => {
                    const active = pathname === l.href;
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          target={'external' in l && l.external ? '_blank' : undefined}
                          rel={'external' in l && l.external ? 'noopener noreferrer' : undefined}
                          className={`group flex items-baseline gap-4 py-3 border-b border-graphite-300 transition-colors ${
                            active ? 'text-accent' : 'text-ink hover:text-accent'
                          }`}
                        >
                          <span className="tabular text-[11px] text-graphite-500 mt-1 w-6">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display text-[1.65rem] w-900:text-[2rem] leading-[1.05] tracking-[-0.025em]">
                            {l.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <aside className="w-900:col-span-4 flex flex-col gap-6">
                <div>
                  <p className="eyebrow mb-3">Bli medlem</p>
                  <a
                    href={MEMBERSHIP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium rounded-full bg-ink text-paper hover:bg-accent transition-colors"
                  >
                    Köp medlemskap
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-3">Kontakt</p>
                  <ul className="space-y-1 text-[15px] text-ink-soft">
                    <li><a className="hover:text-accent" href="mailto:info@kampsportstadion.se">info@kampsportstadion.se</a></li>
                    <li><a className="hover:text-accent" href="tel:0766082803">076-608 28 03</a></li>
                    <li className="text-graphite-500">Lidingövägen 1, 11433 Stockholm</li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3">Följ oss</p>
                  <ul className="flex gap-3">
                    <li>
                      <a href="https://instagram.com/kampsportstadion" target="_blank" rel="noopener noreferrer" className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-graphite-300 hover:border-accent hover:text-accent transition-colors" aria-label="Instagram">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/kampsportstadion" target="_blank" rel="noopener noreferrer" className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-graphite-300 hover:border-accent hover:text-accent transition-colors" aria-label="Facebook">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 9h3V5h-3a4 4 0 00-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9z"/></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span className="relative inline-block w-4 h-3" aria-hidden="true">
      <span
        className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ease-out-quint ${open ? 'translate-y-[6px] rotate-45' : ''}`}
      />
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
      />
      <span
        className={`absolute left-0 bottom-0 h-px w-full bg-current transition-transform duration-300 ease-out-quint ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
      />
    </span>
  );
}
