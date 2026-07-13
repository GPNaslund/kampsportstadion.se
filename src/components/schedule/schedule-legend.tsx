import { ClassFamily, FAMILY_LABELS, Session } from '@/data/schedule';

const SWATCH: Record<ClassFamily, string> = {
  thai: 'bg-cls-thai',
  bjj:  'bg-cls-bjj',
  mma:  'bg-cls-mma',
  sw:   'bg-cls-sw',
  fys:  'bg-cls-fys',
  npf:  'bg-cls-npf',
};

const ORDER: ClassFamily[] = ['thai', 'bjj', 'mma', 'sw', 'fys', 'npf'];

interface Props {
  sessions: Session[];
  className?: string;
}

// Only legend what the shown term actually runs — a summer term with no kids'
// classes shouldn't advertise a barn swatch.
export default function ScheduleLegend({ sessions, className = '' }: Props) {
  const families = new Set(sessions.map((s) => s.family));
  const hasKids = sessions.some((s) => s.isKids);

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-ink-soft ${className}`}>
      {ORDER.filter((f) => families.has(f)).map((f) => (
        <span key={f} className="inline-flex items-center gap-2">
          <span className={`block w-2.5 h-2.5 ${SWATCH[f]}`} aria-hidden="true" />
          <span>{FAMILY_LABELS[f]}</span>
        </span>
      ))}
      {hasKids && (
        <span className="inline-flex items-center gap-2">
          <span className="block w-2.5 h-2.5 rounded-full bg-cls-barn" aria-hidden="true" />
          <span>Barnpass</span>
        </span>
      )}
    </div>
  );
}
