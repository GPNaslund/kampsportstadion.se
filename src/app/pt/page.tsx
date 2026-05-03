import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import PageHeader from '@/components/ui/page-header';
import { TRAINERS, Trainer } from '@/data/trainers';

export const metadata = {
  title: 'Personlig träning — Kampsportstadion',
  description:
    'PT på Kampsportstadion. Erfarna tränare inom styrka, kondition, boxning, thaiboxning, MMA och BJJ.',
};

export default function PTPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Personlig träning"
          title="Personlig träning"
          description="Är du intresserad av PT har vi ett gäng duktiga, erfarna tränar som kan hjälpa dig — både inom styrka, kondition, boxning, thaiboxning, MMA och BJJ."
        />

        <Section pad="default" className="border-t border-graphite-300">
          <Container variant="wide">
            <ul className="flex flex-col">
              {TRAINERS.map((t, i) => (
                <li key={t.name}>
                  <TrainerEntry trainer={t} index={i + 1} total={TRAINERS.length} isLast={i === TRAINERS.length - 1} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section pad="default" className="bg-paper-dim border-t border-graphite-300">
          <Container variant="wide">
            <div className="grid w-900:grid-cols-12 gap-8">
              <div className="w-900:col-span-6">
                <p className="eyebrow">Pris</p>
                <p className="font-display font-extrabold mt-3 text-[2rem] w-900:text-[2.75rem] leading-none tracking-[-0.04em] tabular">
                  900:- <span className="text-ink-soft text-[1.25rem] font-medium tracking-normal">/ PT-timme</span>
                </p>
                <p className="mt-4 text-[15px] text-ink-soft max-w-prose">
                  Rabatterat pris om du är medlem på Kampsportstadion.<br />
                  (Rickard Nordstrand har egen prislista.)
                </p>
              </div>
              <div className="w-900:col-span-6">
                <p className="eyebrow">Kontakt</p>
                <p className="mt-3 text-[16px] text-ink leading-relaxed max-w-prose">
                  Kontakta oss på{' '}
                  <a className="underline underline-offset-4 decoration-graphite-300 hover:text-accent hover:decoration-accent" href="mailto:info@kampsportstadion.se">
                    info@kampsportstadion.se
                  </a>{' '}
                  för mer information.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function TrainerEntry({ trainer, index, total, isLast }: { trainer: Trainer; index: number; total: number; isLast: boolean }) {
  return (
    <article className={`grid w-900:grid-cols-12 gap-6 w-900:gap-12 py-10 w-900:py-14 ${isLast ? '' : 'border-b border-graphite-300'}`}>
      <header className="w-900:col-span-4">
        <p className="eyebrow tabular">
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
        <h2 className="mt-3 font-display text-[1.85rem] w-900:text-[2.25rem] tracking-[-0.025em] leading-[1.05] text-ink">
          {trainer.name}
        </h2>
        {trainer.specialty && (
          <p className="mt-3 text-[13px] text-graphite-500 uppercase tracking-[0.12em]">{trainer.specialty}</p>
        )}
      </header>
      <div className="w-900:col-span-8">
        <p className="text-[16px] w-900:text-[17px] leading-relaxed text-ink-soft max-w-prose">{trainer.description}</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
          {trainer.email && (
            <a className="inline-flex items-center gap-2 text-ink hover:text-accent" href={`mailto:${trainer.email}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              {trainer.email}
            </a>
          )}
          {trainer.phone && (
            <a className="inline-flex items-center gap-2 text-ink hover:text-accent tabular" href={`tel:${trainer.phone}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
              {formatPhone(trainer.phone)}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function formatPhone(p: string) {
  // 0707122201 -> 070-712 22 01
  if (p.length === 10 && p.startsWith('0')) {
    return `${p.slice(0, 3)}-${p.slice(3, 6)} ${p.slice(6, 8)} ${p.slice(8, 10)}`;
  }
  return p;
}
