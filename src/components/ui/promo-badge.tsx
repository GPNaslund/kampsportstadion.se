const SHADOW = 'shadow-[0_2px_8px_-4px_rgba(8,9,10,0.35),0_20px_40px_-16px_rgba(8,9,10,0.5)]';
const MAIL = 'mailto:info@kampsportstadion.se';
const MESSAGE = 'Just nu bjuder vi på en gratis provträning — maila oss och boka din plats.';

export default function PromoBadge() {
  return (
    <div
      className={`fixed z-30 bg-ink-deep text-paper overflow-hidden ${SHADOW} top-20 w-900:top-24 left-0 w-full h-[104px] w-625:h-[88px] w-900:h-16`}
    >
      <div className="max-w-wide mx-auto edge h-full flex flex-col w-900:flex-row w-900:items-center justify-center gap-3 w-900:gap-5">
        {/* < 900: dot, label and message flow as one wrapped sentence */}
        <p className="w-900:hidden text-[12.5px] leading-snug text-paper/60">
          <span className="inline-flex align-middle -translate-y-px mr-2">
            <PulseDot />
          </span>
          <span className="font-semibold uppercase tracking-[0.14em] text-[11px] text-paper">
            Prova på gratis
          </span>{' '}
          — {MESSAGE}
        </p>

        <Hook className="hidden w-900:flex" />

        <span className="hidden w-900:block h-4 w-px bg-paper/20 shrink-0" aria-hidden="true" />

        <p className="hidden w-900:block text-[13px] leading-snug text-paper/60 truncate">
          {MESSAGE}
        </p>

        <Cta className="w-900:ml-auto w-900:shrink-0" />
      </div>
    </div>
  );
}

function Hook({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      <PulseDot />
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper">
        Prova på gratis
      </span>
    </span>
  );
}

function Cta({ className = '' }: { className?: string }) {
  return (
    <a
      href={MAIL}
      className={`group inline-flex items-center justify-center gap-2 h-9 px-4 text-[12.5px] font-medium rounded-full bg-paper text-ink hover:bg-accent hover:text-paper transition-colors duration-200 ease-out-quint ${className}`}
    >
      Boka provträning
      <span className="transition-transform duration-200 ease-out-quint group-hover:translate-x-0.5" aria-hidden="true">
        →
      </span>
    </a>
  );
}

function PulseDot() {
  return (
    <span className="relative flex h-[7px] w-[7px] shrink-0">
      <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-75" />
      <span className="relative inline-flex h-full w-full rounded-full bg-accent" />
    </span>
  );
}
