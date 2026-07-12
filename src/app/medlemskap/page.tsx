import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import PageHeader from '@/components/ui/page-header';
import Button from '@/components/ui/button';
import Eyebrow from '@/components/ui/eyebrow';
import {
  MEMBERSHIP_PLANS,
  MEMBERSHIP_TERMS,
  MEMBERSHIP_URL,
  PLAN_GROUP_LABELS,
  PlanGroup,
  MembershipPlan,
} from '@/data/membership';

export const metadata = {
  title: 'Medlemskap — Kampsportstadion',
  description:
    'Medlemskap, priser och villkor för Kampsportstadion. Vuxen, ungdom, student, barn och prova på.',
};

const GROUPS: PlanGroup[] = ['voksen', 'ungdom', 'barn', 'prova'];

export default function MembershipPage() {
  const grouped = GROUPS.map((g) => ({
    group: g,
    plans: MEMBERSHIP_PLANS.filter((p) => p.group === g),
  }));

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Bli medlem"
          title="Medlemskap"
          description="Välj det medlemskap som passar dig. Alla aktiva medlemmar får tillgång till hela schemat och vårt gym."
          actions={
            <Button href={MEMBERSHIP_URL} external variant="primary" size="lg">
              Köp medlemskap
            </Button>
          }
        />

        <Section pad="default" className="border-t border-graphite-300">
          <Container variant="wide">
            <div className="flex flex-col gap-16 w-900:gap-24">
              {grouped.map(({ group, plans }) => (
                <PlanGroupBlock
                  key={group}
                  groupLabel={PLAN_GROUP_LABELS[group]}
                  plans={plans}
                />
              ))}
            </div>
          </Container>
        </Section>

        <Section pad="marquee" className="border-t border-graphite-300">
          <Container variant="wide">
            <div className="grid w-900:grid-cols-12 gap-10 w-900:gap-16">
              <div className="w-900:col-span-4">
                <Eyebrow>Villkor</Eyebrow>
                <h2 className="mt-4 font-display text-[2rem] w-900:text-[2.75rem] leading-[1.05] tracking-[-0.025em]">
                  Det finstilta,<br />i klartext.
                </h2>
                <p className="mt-5 max-w-prose text-[15px] text-ink-soft leading-relaxed">
                  Vi vill att det ska vara tydligt vad som gäller, oavsett om
                  du är på gång att skriva på eller redan är medlem.
                </p>
              </div>
              <div className="w-900:col-span-8">
                <dl className="border-t border-graphite-300">
                  {MEMBERSHIP_TERMS.map((t) => (
                    <div
                      key={t.heading}
                      className="grid w-625:grid-cols-12 gap-2 w-625:gap-6 py-6 border-b border-graphite-300"
                    >
                      <dt className="w-625:col-span-4 font-medium text-[15px] w-900:text-[16px] text-ink">
                        {t.heading}
                      </dt>
                      <dd className="w-625:col-span-8 text-[14.5px] w-900:text-[15px] text-ink-soft leading-relaxed">
                        {t.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function PlanGroupBlock({ groupLabel, plans }: { groupLabel: string; plans: MembershipPlan[] }) {
  return (
    <section>
      <Eyebrow>{groupLabel}</Eyebrow>
      <ul className="mt-6 grid w-625:grid-cols-2 w-900:grid-cols-3 gap-px bg-graphite-300 border border-graphite-300">
        {plans.map((p) => (
          <li key={p.title} className="bg-paper">
            <PlanCard plan={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function PlanCard({ plan }: { plan: MembershipPlan }) {
  const accent = plan.highlight;
  return (
    <article className={`relative h-full p-6 w-900:p-7 flex flex-col ${accent ? 'bg-ink text-paper' : ''}`}>
      {accent && (
        <span className="eyebrow mb-3 text-paper/85">Mest valda</span>
      )}
      <h3 className={`font-display text-[1.4rem] w-900:text-[1.6rem] leading-[1.1] tracking-[-0.02em] ${accent ? 'text-paper' : 'text-ink'}`}>
        {plan.title}
      </h3>

      <div className="mt-5 flex flex-col gap-1.5">
        {plan.prices.map((p, i) => (
          <p key={i} className="flex items-baseline gap-1.5 tabular">
            <span className={`font-display text-[1.65rem] leading-none ${accent ? 'text-paper' : 'text-ink'}`}>
              {p.amount}
            </span>
            <span className={`text-[12.5px] ${accent ? 'text-paper/85' : 'text-ink-soft'}`}>
              {p.cadence}
            </span>
          </p>
        ))}
      </div>

      {plan.body.length > 0 && (
        <ul className={`mt-6 space-y-2 text-[13.5px] leading-relaxed ${accent ? 'text-paper/90' : 'text-ink-soft'}`}>
          {plan.body.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <a
          href={MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-[13px] font-medium underline underline-offset-4 ${accent ? 'text-paper decoration-paper/40 hover:decoration-paper' : 'text-ink decoration-graphite-300 hover:decoration-accent hover:text-accent'}`}
        >
          Köp →
        </a>
      </div>
    </article>
  );
}
