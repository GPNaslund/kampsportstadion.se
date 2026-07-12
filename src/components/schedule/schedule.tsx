'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  SCHEDULE,
  SCHEDULE_META,
  DAY_ORDER,
  DAY_LABELS,
  FAMILY_LABELS,
  ClassFamily,
  Day,
  sessionsByDay,
} from '@/data/schedule';
import ScheduleCard from './schedule-card';
import ScheduleLegend from './schedule-legend';
import SchedulePrintable from './schedule-printable';

type Filter = ClassFamily | 'all' | 'barn';

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all',  label: 'Alla' },
  { value: 'thai', label: FAMILY_LABELS.thai },
  { value: 'bjj',  label: FAMILY_LABELS.bjj },
  { value: 'mma',  label: FAMILY_LABELS.mma },
  { value: 'sw',   label: FAMILY_LABELS.sw },
  { value: 'fys',  label: FAMILY_LABELS.fys },
  { value: 'npf',  label: FAMILY_LABELS.npf },
  { value: 'barn', label: 'Barnpass' },
];

function todayAsDay(): Day {
  const idx = (new Date().getDay() + 6) % 7;          // Mon=0..Sun=6
  return DAY_ORDER[idx] as Day;
}

function matchesFilter(session: ReturnType<typeof sessionsByDay>[Day][number], f: Filter) {
  if (f === 'all') return true;
  if (f === 'barn') return !!session.isKids;
  return session.family === f;
}

export default function Schedule() {
  const [filter, setFilter] = useState<Filter>('all');
  const [activeDay, setActiveDay] = useState<Day>('mon');
  const [downloading, setDownloading] = useState(false);

  // After mount, jump to today (avoids hydration mismatch from new Date() at render)
  useEffect(() => { setActiveDay(todayAsDay()); }, []);

  const byDay = useMemo(() => sessionsByDay(SCHEDULE), []);
  const printableRef = useRef<HTMLDivElement>(null);
  const dayStripRef = useRef<HTMLDivElement>(null);
  const dayTabRefs = useRef<Partial<Record<Day, HTMLButtonElement | null>>>({});

  useEffect(() => {
    const tab = dayTabRefs.current[activeDay];
    const strip = dayStripRef.current;
    if (!tab || !strip) return;
    const stripRect = strip.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const delta = (tabRect.left + tabRect.width / 2) - (stripRect.left + stripRect.width / 2);
    strip.scrollBy({ left: delta, behavior: 'smooth' });
  }, [activeDay]);

  const totalCount = SCHEDULE.length;
  const visibleCount = SCHEDULE.filter((s) => matchesFilter(s, filter)).length;

  async function handleDownload() {
    if (!printableRef.current) return;
    setDownloading(true);
    try {
      const { toPng } = await import('html-to-image');
      const node = printableRef.current;
      // Make sure fonts are loaded before rasterising
      if (typeof document !== 'undefined' && (document as any).fonts?.ready) {
        await (document as any).fonts.ready;
      }
      const dataUrl = await toPng(node, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#ffffff',
      });
      const link = document.createElement('a');
      link.download = `kampsportstadion-schema-${SCHEDULE_META.validFrom.replace(/[^\w]+/g, '-').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Schedule export failed', err);
      alert('Kunde inte ladda ner bilden. Försök igen.');
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex flex-col w-900:flex-row w-900:items-end w-900:justify-between gap-6 mb-8">
        <div>
          <p className="eyebrow mb-2">Veckoschema · {SCHEDULE_META.validFrom}</p>
          <p className="text-[15px] text-ink-soft max-w-prose">
            {visibleCount} av {totalCount} pass i veckan. Tryck på en dag för att fokusera, eller filtrera per klass nedan.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center gap-2 h-11 px-5 text-[14px] rounded-full border border-graphite-300 hover:border-ink hover:bg-ink hover:text-paper transition-colors disabled:opacity-50"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
            <span>{downloading ? 'Laddar ner…' : 'Ladda ner som bild'}</span>
          </button>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`h-8 px-3.5 text-[12.5px] rounded-full border transition-colors ${
                active
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-paper text-ink-soft border-graphite-300 hover:border-ink hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* DESKTOP: 7-column grid */}
      <div className="hidden w-900:grid grid-cols-7 gap-3">
        {DAY_ORDER.map((d) => (
          <div key={d} className="flex flex-col gap-2">
            <div className="pb-2 mb-1 border-b border-graphite-300 flex items-baseline justify-between">
              <h3 className="font-display text-[1.25rem] tracking-[-0.02em] leading-none">
                {DAY_LABELS[d].full}
              </h3>
              <span className="eyebrow tabular text-[10px]">{byDay[d].length}</span>
            </div>
            <div className="flex flex-col gap-2 min-h-[80px]">
              {byDay[d].length === 0 && (
                <p className="text-[12px] text-graphite-500 italic mt-2">Inga pass</p>
              )}
              {byDay[d].map((s, i) => (
                <ScheduleCard
                  key={i}
                  session={s}
                  dim={!matchesFilter(s, filter)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE: day tabs + single-day list */}
      <div className="w-900:hidden">
        <div ref={dayStripRef} className="flex gap-1.5 overflow-x-auto pb-3 -mx-6 px-6 scrollbar-hide" role="tablist" aria-label="Välj dag">
          {DAY_ORDER.map((d) => {
            const active = d === activeDay;
            return (
              <button
                key={d}
                ref={(el) => { dayTabRefs.current[d] = el; }}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveDay(d)}
                className={`flex-shrink-0 inline-flex flex-col items-center justify-center min-w-[60px] h-16 px-3 rounded border transition-colors ${
                  active
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper text-ink border-graphite-300'
                }`}
              >
                <span className="text-[11px] eyebrow leading-none" style={{ color: active ? 'currentColor' : undefined }}>
                  {DAY_LABELS[d].short}
                </span>
                <span className="tabular text-[18px] font-medium leading-none mt-1.5">
                  {byDay[d].length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-baseline justify-between border-b border-graphite-300 pb-2">
          <h3 className="font-display text-[1.5rem] tracking-[-0.02em] leading-none">
            {DAY_LABELS[activeDay].full}
          </h3>
          <span className="eyebrow tabular">
            {byDay[activeDay].filter((s) => matchesFilter(s, filter)).length} av {byDay[activeDay].length}
          </span>
        </div>

        <ul className="mt-4 flex flex-col gap-2">
          {byDay[activeDay].length === 0 && (
            <li className="text-[14px] text-graphite-500 italic py-4">Inga pass denna dag.</li>
          )}
          {byDay[activeDay].map((s, i) => (
            <li key={i}>
              <ScheduleCard session={s} dim={!matchesFilter(s, filter)} density="comfortable" />
            </li>
          ))}
        </ul>
      </div>

      <ScheduleLegend className="mt-10" />

      {SCHEDULE_META.note && (
        <p className="mt-6 text-[13px] text-ink-soft max-w-prose">{SCHEDULE_META.note}</p>
      )}

      {/* Off-screen printable variant for image export */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: '-10000px',
          opacity: 1,
          pointerEvents: 'none',
        }}
      >
        <SchedulePrintable ref={printableRef} />
      </div>
    </div>
  );
}
