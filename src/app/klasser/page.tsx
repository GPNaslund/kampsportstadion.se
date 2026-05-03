import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import PageHeader from '@/components/ui/page-header';
import classes, { WorkoutClass } from '@/data/classes';

export const metadata = {
  title: 'Klasser — Kampsportstadion',
  description:
    'Alla klasser på Kampsportstadion. Thaiboxning, BJJ, MMA, fys, barngrupper och mer.',
};

export default function ClassesPage() {
  const total = classes.length;
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Träningsutbud"
          title="Klasser"
          description="Vi har klasser för Barn 7–9 år & 9–12 år, ungdomar 13–16 år, nybörjare, fortsättning & avancerad."
        />

        <Section pad="default" className="border-t border-graphite-300">
          <Container variant="wide">
            <ol className="flex flex-col">
              {classes.map((c, i) => (
                <li key={c.header}>
                  <ClassEntry
                    index={i + 1}
                    total={total}
                    item={c}
                    isLast={i === total - 1}
                  />
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function ClassEntry({
  item,
  index,
  total,
  isLast,
}: {
  item: WorkoutClass;
  index: number;
  total: number;
  isLast: boolean;
}) {
  const { header, description, levels, rawHtml } = item;
  return (
    <article
      className={`grid w-900:grid-cols-12 gap-6 w-900:gap-12 py-10 w-900:py-14 ${isLast ? '' : 'border-b border-graphite-300'}`}
    >
      <header className="w-900:col-span-4">
        <p className="eyebrow tabular">
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
        <h2 className="mt-3 font-display text-[1.85rem] w-900:text-[2.5rem] tracking-[-0.025em] leading-[1.05] text-ink">
          {header}
        </h2>
      </header>

      <div className="w-900:col-span-8">
        {description && (
          <p className="text-[16px] w-900:text-[17px] leading-relaxed text-ink-soft max-w-prose">
            {description}
          </p>
        )}

        {levels && levels.length > 0 && (
          <dl className="mt-8 border-t border-graphite-300">
            {levels.map((level, idx) => (
              <div
                key={idx}
                className="grid w-625:grid-cols-12 gap-2 w-625:gap-6 py-5 border-b border-graphite-300"
              >
                <dt className="w-625:col-span-4 font-medium text-[15px] w-900:text-[16px] text-ink">
                  {level.header}
                </dt>
                <dd className="w-625:col-span-8 text-[14.5px] w-900:text-[15.5px] text-ink-soft leading-relaxed max-w-prose">
                  {level.description}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {rawHtml && (
          <div
            className="mt-6 text-[15px] text-ink-soft leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-graphite-300 hover:[&_a]:text-accent hover:[&_a]:decoration-accent"
            dangerouslySetInnerHTML={{ __html: rawHtml }}
          />
        )}
      </div>
    </article>
  );
}
