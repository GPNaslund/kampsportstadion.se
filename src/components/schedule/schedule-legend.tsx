import { ClassFamily, FAMILY_LABELS } from '@/data/schedule';

const SWATCH: Record<ClassFamily, string> = {
  thai: 'bg-cls-thai',
  bjj:  'bg-cls-bjj',
  mma:  'bg-cls-mma',
  sw:   'bg-cls-sw',
  fys:  'bg-cls-fys',
  npf:  'bg-cls-npf',
};

const ORDER: ClassFamily[] = ['thai', 'bjj', 'mma', 'sw', 'fys', 'npf'];

export default function ScheduleLegend({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-ink-soft ${className}`}>
      {ORDER.map((f) => (
        <span key={f} className="inline-flex items-center gap-2">
          <span className={`block w-2.5 h-2.5 ${SWATCH[f]}`} aria-hidden="true" />
          <span>{FAMILY_LABELS[f]}</span>
        </span>
      ))}
      <span className="inline-flex items-center gap-2">
        <span className="block w-2.5 h-2.5 rounded-full bg-cls-barn" aria-hidden="true" />
        <span>Barnpass</span>
      </span>
    </div>
  );
}
