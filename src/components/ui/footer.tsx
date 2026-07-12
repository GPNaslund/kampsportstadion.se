import Link from 'next/link';
import Container from './container';

const NAV = [
  { href: '/klasser', label: 'Klasser' },
  { href: '/schema', label: 'Schema' },
  { href: '/medlemskap', label: 'Medlemskap' },
  { href: '/pt', label: 'Personlig träning' },
  { href: '/foretag', label: 'Företag' },
  { href: '/sociala-projekt', label: 'Sociala projekt' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-deep text-paper">
      <Container variant="wide" as="div" className="py-16 w-900:py-24">
        <div className="grid w-900:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="w-900:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4 text-paper">
              <img src="/dif.png" alt="" width={72} height={72} className="w-16 h-16 w-900:w-[72px] w-900:h-[72px] object-contain" />
              <img
                src="/ks-logo.svg"
                alt="Kampsportstadion"
                width={240}
                height={129}
                className="h-14 w-900:h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-paper/85">
              En ideell idrottsförening i Djurgårdens IF. Kampsport för alla, från barngrupp till tävlingselit, på Stockholm Stadion sedan över ett decennium.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="https://instagram.com/kampsportstadion" label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
              </SocialIcon>
              <SocialIcon href="https://facebook.com/kampsportstadion" label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 9h3V5h-3a4 4 0 00-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://goo.gl/maps/5ipnHxJKXbrAHLBw6" label="Google Maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Sitemap */}
          <div className="w-900:col-span-3">
            <p className="eyebrow text-paper/85 mb-4">Sidor</p>
            <ul className="space-y-2 text-[15px]">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-900:col-span-4">
            <p className="eyebrow text-paper/85 mb-4">Kontakt</p>
            <ul className="space-y-2 text-[15px]">
              <li><a className="text-paper hover:text-accent" href="mailto:info@kampsportstadion.se">info@kampsportstadion.se</a></li>
              <li><a className="text-paper hover:text-accent" href="tel:0766082803">076-608 28 03</a></li>
              <li className="text-paper/85">Lidingövägen 1, 114 33 Stockholm</li>
            </ul>

            <p className="eyebrow text-paper/85 mt-8 mb-4">Öppettider</p>
            <ul className="space-y-1 text-[14px] text-paper/85 tabular">
              <li className="flex gap-3"><span className="w-28">Mån–Tor</span><span>16.30 – 19.30</span></li>
              <li className="flex gap-3"><span className="w-28">Lördag</span><span>09.30 – 13.30</span></li>
              <li className="flex gap-3"><span className="w-28">Söndag</span><span>10.30 – 13.30</span></li>
              <li className="text-paper/75 mt-1">Stängt röda dagar samt sommar och jul.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper/30 flex flex-col w-625:flex-row gap-3 w-625:justify-between text-[12px] text-paper/75 tabular">
          <p>© {year} Djurgårdens IF Kampsport · Idrottsförening · Stockholm Stadion sedan 1912</p>
          <p>Org.nr · 802004-2426</p>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-paper/35 text-paper hover:border-accent hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}
