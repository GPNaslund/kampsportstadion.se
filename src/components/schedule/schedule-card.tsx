import { Session, FAMILY_LABELS } from '@/data/schedule';

const TOP_BORDER: Record<Session['family'], string> = {
  thai: 'border-t-cls-thai',
  bjj:  'border-t-cls-bjj',
  mma:  'border-t-cls-mma',
  sw:   'border-t-cls-sw',
  fys:  'border-t-cls-fys',
  npf:  'border-t-cls-npf',
};

interface Props {
  session: Session;
  dim?: boolean;
  density?: 'compact' | 'comfortable';
}

export default function ScheduleCard({ session, dim = false, density = 'compact' }: Props) {
  const padding = density === 'comfortable' ? 'px-3.5 pt-3 pb-3' : 'px-3 pt-2.5 pb-2.5';
  return (
    <article
      className={`relative bg-paper border border-graphite-300 border-t-2 ${TOP_BORDER[session.family]} ${padding} transition-opacity duration-200 ${dim ? 'opacity-25' : 'opacity-100'}`}
      data-family={session.family}
    >
      <div className="flex items-baseline gap-1.5 tabular text-[11px] text-ink-soft leading-none">
        <span className="font-medium text-ink">{session.start}</span>
        <span className="text-graphite-500">→</span>
        <span className="text-ink-soft">{session.end}</span>
      </div>
      <h4 className="mt-1.5 text-[13px] leading-tight font-medium text-ink tracking-[-0.005em]">
        {session.title}
      </h4>
      {(session.ageNote || session.isKids || session.location) && (
        <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[10.5px] text-graphite-500 leading-tight">
          {session.ageNote && <span>{session.ageNote}</span>}
          {session.isKids && (
            <span className="inline-flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-cls-barn" aria-hidden="true" />
              <span>barn</span>
            </span>
          )}
          {session.location && (
            <span className="text-ink-soft">· {session.location}</span>
          )}
        </div>
      )}
      <span className="sr-only">{FAMILY_LABELS[session.family]}</span>
    </article>
  );
}
