// Source of truth for the weekly class schedule.
// Autumn term (HT 2026). Edit here, the site updates everywhere.

export type ClassFamily = 'thai' | 'bjj' | 'mma' | 'sw' | 'fys' | 'npf';

export type Day =
  | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface Session {
  day: Day;
  start: string;   // "HH.MM"
  end: string;     // "HH.MM"
  title: string;
  family: ClassFamily;
  isKids?: boolean;       // adds the barn marker
  ageNote?: string;       // "4–6 år", "7–9 år", etc.
  location?: string;      // for off-site sessions ("Majoren")
}

export interface ScheduleMeta {
  validFrom: string;      // human-readable, e.g. "v.2 · 2026"
  note?: string;
}

export const SCHEDULE_META: ScheduleMeta = {
  validFrom: 'HT · 2026',
  note: 'Inga pass under skollov för barngrupperna. Vid förändring av enstaka pass informeras medlemmen via GymControl och e-mail.',
};

export const DAY_ORDER: Day[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export const DAY_LABELS: Record<Day, { full: string; short: string }> = {
  mon: { full: 'Måndag',  short: 'Mån' },
  tue: { full: 'Tisdag',  short: 'Tis' },
  wed: { full: 'Onsdag',  short: 'Ons' },
  thu: { full: 'Torsdag', short: 'Tor' },
  fri: { full: 'Fredag',  short: 'Fre' },
  sat: { full: 'Lördag',  short: 'Lör' },
  sun: { full: 'Söndag',  short: 'Sön' },
};

export const FAMILY_LABELS: Record<ClassFamily, string> = {
  thai: 'Thaiboxning',
  bjj:  'BJJ',
  mma:  'MMA',
  sw:   'SW',
  fys:  'Kampsportfys',
  npf:  'NPF',
};

// Tailwind-friendly token names — must match the cls-* keys in tailwind.config.js
export const FAMILY_DOT: Record<ClassFamily, string> = {
  thai: 'bg-cls-thai',
  bjj:  'bg-cls-bjj',
  mma:  'bg-cls-mma',
  sw:   'bg-cls-sw',
  fys:  'bg-cls-fys',
  npf:  'bg-cls-npf',
};

export const SCHEDULE: Session[] = [
  // ── Måndag
  { day: 'mon', start: '12.00', end: '12.45', title: 'Kampsportfys',        family: 'fys' },
  { day: 'mon', start: '17.00', end: '18.00', title: 'BJJ Barn Steg 2',     family: 'bjj',  isKids: true },
  { day: 'mon', start: '17.30', end: '18.30', title: 'Thaiboxning Steg 2',  family: 'thai' },
  { day: 'mon', start: '18.00', end: '19.30', title: 'BJJ Mixgrupp',        family: 'bjj' },
  { day: 'mon', start: '18.30', end: '19.30', title: 'Thaiboxning Steg 1',  family: 'thai' },

  // ── Tisdag
  { day: 'tue', start: '12.00', end: '13.00', title: 'Thaiboxning Mixgrupp',   family: 'thai' },
  { day: 'tue', start: '15.00', end: '16.00', title: 'After School',           family: 'thai', isKids: true },
  { day: 'tue', start: '16.15', end: '17.00', title: 'Thaiboxning barn',       family: 'thai', isKids: true, ageNote: '9–12 år' },
  { day: 'tue', start: '17.00', end: '18.00', title: 'Thaiboxning Ungdom',     family: 'thai' },
  { day: 'tue', start: '17.00', end: '18.30', title: 'MMA Tävling',            family: 'mma' },
  { day: 'tue', start: '18.00', end: '19.00', title: 'Kampsportfys',           family: 'fys' },
  { day: 'tue', start: '18.30', end: '20.00', title: 'SW / MMA Steg 1 & 2',    family: 'sw' },
  { day: 'tue', start: '19.00', end: '20.00', title: 'Thaiboxning Steg 1 & 2', family: 'thai' },

  // ── Onsdag
  { day: 'wed', start: '06.45', end: '07.40', title: 'Kampsportfys',          family: 'fys' },
  { day: 'wed', start: '12.00', end: '12.45', title: 'Kampsportfys',          family: 'fys' },
  { day: 'wed', start: '16.15', end: '17.00', title: 'BJJ barn Steg 1',       family: 'bjj',  isKids: true },
  { day: 'wed', start: '16.30', end: '17.15', title: 'Barn Thaiboxning',      family: 'thai', isKids: true, ageNote: '7–9 år' },
  { day: 'wed', start: '17.00', end: '18.00', title: 'BJJ Barn Steg 2 + Ungdom', family: 'bjj', isKids: true },
  { day: 'wed', start: '17.30', end: '18.30', title: 'Thaiboxning Steg 2',    family: 'thai' },
  { day: 'wed', start: '18.00', end: '19.00', title: 'BJJ Steg 2',            family: 'bjj' },
  { day: 'wed', start: '18.30', end: '19.30', title: 'Thaiboxning Steg 1',    family: 'thai' },
  { day: 'wed', start: '19.00', end: '20.00', title: 'BJJ Steg 1',            family: 'bjj' },

  // ── Torsdag
  { day: 'thu', start: '15.00', end: '16.00', title: 'After School',                    family: 'thai', isKids: true },
  { day: 'thu', start: '16.15', end: '17.00', title: 'Thaiboxning barn',                family: 'thai', isKids: true, ageNote: '9–12 år' },
  { day: 'thu', start: '17.00', end: '18.00', title: 'Thaiboxning Ungdom',              family: 'thai' },
  { day: 'thu', start: '17.00', end: '18.30', title: 'MMA Tävling',                     family: 'mma' },
  { day: 'thu', start: '18.00', end: '19.00', title: 'Kampsportfys',                    family: 'fys' },
  { day: 'thu', start: '18.30', end: '20.00', title: 'SW',                              family: 'sw' },
  { day: 'thu', start: '19.00', end: '20.00', title: 'Thaiboxning Sparring alla nivåer', family: 'thai' },

  // ── Fredag
  { day: 'fri', start: '12.00', end: '12.45', title: 'Kampsportfys',    family: 'fys' },
  { day: 'fri', start: '16.15', end: '17.00', title: 'BJJ barn Steg 1', family: 'bjj', isKids: true },
  { day: 'fri', start: '17.00', end: '18.30', title: 'MMA Mixgrupp',    family: 'mma' },
  { day: 'fri', start: '17.00', end: '18.00', title: 'BJJ Mixgrupp',    family: 'bjj' },
  { day: 'fri', start: '18.00', end: '19.00', title: 'BJJ Sparring',    family: 'bjj' },

  // ── Lördag
  { day: 'sat', start: '10.00', end: '11.30', title: 'Dunkardax fys',    family: 'fys',  location: 'Majoren' },
  { day: 'sat', start: '12.00', end: '12.45', title: 'Barn Kampsportlek', family: 'thai', isKids: true, ageNote: '4–6 år' },
  { day: 'sat', start: '12.00', end: '12.45', title: 'Barn Thaiboxning',  family: 'thai', isKids: true, ageNote: '7–9 år' },

  // ── Söndag
  { day: 'sun', start: '09.00', end: '09.45', title: 'NPF Grupp',           family: 'npf' },
  { day: 'sun', start: '10.00', end: '10.45', title: 'Barn BJJ Steg 1 & 2', family: 'bjj',  isKids: true },
  { day: 'sun', start: '11.00', end: '12.00', title: 'BJJ Steg 1',          family: 'bjj' },
  { day: 'sun', start: '12.00', end: '13.00', title: 'BJJ No Gi Sparring',  family: 'bjj' },
  { day: 'sun', start: '12.00', end: '13.00', title: 'MMA Tävling',         family: 'mma' },
];

// Helpers
export function sessionsByDay(sessions: Session[] = SCHEDULE) {
  const map = {} as Record<Day, Session[]>;
  for (const d of DAY_ORDER) map[d] = [];
  for (const s of sessions) map[s.day].push(s);
  for (const d of DAY_ORDER) {
    map[d].sort((a, b) => toMinutes(a.start) - toMinutes(b.start));
  }
  return map;
}

export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split('.').map(Number);
  return h * 60 + m;
}

export function durationLabel(s: Session): string {
  const mins = toMinutes(s.end) - toMinutes(s.start);
  return `${mins} min`;
}
