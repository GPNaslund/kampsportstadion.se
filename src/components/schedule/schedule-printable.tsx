import { forwardRef } from 'react';
import {
  SCHEDULE,
  SCHEDULE_META,
  DAY_ORDER,
  DAY_LABELS,
  sessionsByDay,
} from '@/data/schedule';
import ScheduleCard from './schedule-card';
import ScheduleLegend from './schedule-legend';

// 1600 × 1100 landscape, intended to be rasterised by html-to-image and downloaded.
// Visually richer than the on-screen variant: full 7-column grid, branded header + footer.

const ScheduleprintableInner = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const byDay = sessionsByDay(SCHEDULE);
  return (
    <div
      ref={ref}
      style={{ width: '1600px', minHeight: '1100px' }}
      className="bg-paper text-ink p-12 flex flex-col gap-10"
    >
      <header className="flex items-end justify-between border-b border-graphite-300 pb-6">
        <div>
          <p className="eyebrow mb-3">Veckoschema</p>
          <h2 className="font-display text-[3.25rem] leading-none tracking-[-0.03em]">
            Kampsport<span className="opacity-60">·</span>stadion
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft tabular">
            {SCHEDULE_META.validFrom} · Stockholm Stadion
          </p>
        </div>
        <div className="text-right">
          <p className="eyebrow mb-3">DIF Kampsport</p>
          <p className="text-[15px] text-ink-soft tabular leading-snug">
            kampsportstadion.se<br />
            Lidingövägen 1, 114 33 Stockholm
          </p>
        </div>
      </header>

      <div className="grid grid-cols-7 gap-3 flex-1">
        {DAY_ORDER.map((d) => (
          <div key={d} className="flex flex-col gap-2">
            <div className="border-b border-graphite-300 pb-2 mb-1">
              <h3 className="font-display text-[1.4rem] tracking-[-0.02em] leading-none">
                {DAY_LABELS[d].full}
              </h3>
              <p className="eyebrow mt-2 tabular">{byDay[d].length} pass</p>
            </div>
            <div className="flex flex-col gap-2">
              {byDay[d].length === 0 && (
                <p className="text-[12px] text-graphite-500 italic">Inga pass</p>
              )}
              {byDay[d].map((s, i) => (
                <ScheduleCard key={i} session={s} density="comfortable" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="border-t border-graphite-300 pt-6 flex items-end justify-between">
        <ScheduleLegend />
        <p className="text-[12px] text-graphite-500 tabular text-right max-w-md">
          {SCHEDULE_META.note}
        </p>
      </footer>
    </div>
  );
});
ScheduleprintableInner.displayName = 'SchedulePrintable';

export default ScheduleprintableInner;
