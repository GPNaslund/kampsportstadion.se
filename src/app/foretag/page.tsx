import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import PageHeader from '@/components/ui/page-header';
import Eyebrow from '@/components/ui/eyebrow';

export const metadata = {
  title: 'Företag — Kampsportstadion',
  description:
    'Företagsträning, after work och teamträning på Kampsportstadion, Stockholm Stadion.',
};

const COMPANIES = [
  'Schibsted',
  'Aftonbladet',
  'Addnature',
  'Supper',
  'Indiska',
  'Nocco',
  'Refune',
  'Academic Work',
  'Djurgårdens IF Fotboll ungdom',
  'Hammarby Fotboll 06',
];

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="För arbetsplatsen"
          title="Företagsträning"
          description="Vi håller även i företagsträning. Investera i din personal och få tillbaka friskare, gladare personal. En fantastisk möjlighet att skapa en bra sammanhållning på arbetsplatsen samt sänka sjukfrånvaron."
        />

        <Section pad="default" className="border-t border-graphite-300">
          <Container variant="wide">
            <div className="grid w-900:grid-cols-12 gap-12">
              <div className="w-900:col-span-7">
                <p className="text-[16px] w-900:text-[18px] leading-relaxed text-ink-soft max-w-prose">
                  Vi kör även fotboll, handboll, hockey och andra idrottslag. Maila{' '}
                  <a className="text-ink underline underline-offset-4 decoration-graphite-300 hover:decoration-accent hover:text-accent" href="mailto:info@kampsportstadion.se">
                    info@kampsportstadion.se
                  </a>{' '}
                  för mera information.
                </p>
              </div>

              <aside className="w-900:col-span-5">
                <Eyebrow>Företag och föreningar som tränar hos oss</Eyebrow>
                <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
                  {COMPANIES.map((c) => (
                    <li key={c} className="text-[13px] px-3 h-8 inline-flex items-center border border-graphite-300 rounded-full text-ink-soft">
                      {c}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </Container>
        </Section>

        <Section pad="marquee" className="bg-paper-dim border-t border-graphite-300">
          <Container variant="wide">
            <div className="grid w-900:grid-cols-12 gap-10">
              <div className="w-900:col-span-5">
                <Eyebrow>After Work</Eyebrow>
                <h2 className="mt-4 font-display text-[2rem] w-900:text-[2.75rem] leading-[1.05] tracking-[-0.025em]">
                  Byt ut ölen<br />mot en Nocco.
                </h2>
              </div>
              <div className="w-900:col-span-7">
                <p className="text-[16px] w-900:text-[18px] leading-relaxed text-ink-soft max-w-prose">
                  Byt ut ölen med en Nocco och dra med kollegor på ett After Workout pass. 60 min grym träning med dryck och snacks till. Bästa sättet att bygga teamkänsla och skapa sammanhållning i gruppen. Omklädningsrum med bastu finns.
                </p>
                <p className="mt-6 text-[16px] w-900:text-[18px] leading-relaxed text-ink max-w-prose">
                  Vill ditt företag köra en After Workout, maila{' '}
                  <a className="underline underline-offset-4 decoration-graphite-300 hover:text-accent hover:decoration-accent" href="mailto:info@kampsportstadion.se">
                    info@kampsportstadion.se
                  </a>.
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
