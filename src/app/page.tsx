import Link from 'next/link';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Heading from '@/components/ui/heading';
import Eyebrow from '@/components/ui/eyebrow';
import Button from '@/components/ui/button';
import Divider from '@/components/ui/divider';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Schedule from '@/components/schedule/schedule';

const CLASS_FAMILIES = [
  {
    family: 'Thaiboxning',
    short: 'Slag, spark, armbåge, knän, clinch.',
    levels: 'Steg 1 · Steg 2 · Tävling · Ungdom · Barn',
    color: 'bg-cls-thai',
  },
  {
    family: 'BJJ',
    short: 'Brasiliansk Jiu-Jitsu. Markkamp, kontroll, submissions.',
    levels: 'Steg 1 · Steg 2 · Mixgrupp · Sparring · Barn',
    color: 'bg-cls-bjj',
  },
  {
    family: 'MMA · SW',
    short: 'Mixed Martial Arts. Stående, mark, sparring.',
    levels: 'Steg 1 & 2 · Tävling · Mixgrupp',
    color: 'bg-cls-mma',
  },
  {
    family: 'Kampsportsfys',
    short: 'Funktionell styrka med kampsportsmoment. Inga förkunskaper krävs.',
    levels: 'Mor­gon · Lunch · Kväll',
    color: 'bg-cls-fys',
  },
  {
    family: 'Barngrupp',
    short: 'Kampsportlek 4–6 år, Thaiboxning 7–12 år, BJJ 7–11 år.',
    levels: 'Måndag–söndag',
    color: 'bg-cls-barn',
  },
  {
    family: 'NPF-grupp',
    short: 'Anpassad träning för barn och unga med NPF-diagnoser.',
    levels: 'Söndagsmorgon',
    color: 'bg-cls-npf',
  },
];

export default function Home() {
  return (
    <>
      <Navbar overImage />
      <main>
        {/* ─────────────────────────────────  Hero */}
        <section className="relative">
          <div className="relative w-full">
            <picture>
              <source media="(min-width: 900px)" srcSet="/bg-lg.jpg" />
              <source media="(min-width: 625px)" srcSet="/bg-md.jpg" />
              <img
                src="/bg-sm.jpg"
                alt=""
                className="w-full h-[80vh] min-h-[560px] max-h-[820px] object-cover"
              />
            </picture>
            {/* Bottom paper fade so the page transitions cleanly */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-paper to-transparent pointer-events-none" />
            {/* Subtle bottom-left text — newspaper-page feel, not SaaS-overlay */}
            <div className="absolute inset-x-0 bottom-0">
              <Container variant="wide">
                <div className="pb-10 w-900:pb-16 max-w-3xl">
                  <p className="eyebrow text-paper/80 mb-4">
                    Djurgårdens IF Kampsport · Stockholm Stadion sedan 1912
                  </p>
                  <h1
                    className="font-display font-semibold text-paper text-[2.5rem] w-625:text-[3.25rem] w-900:text-[5rem] leading-[0.95] tracking-[-0.03em]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0' }}
                  >
                    Kampsport <br />för alla.
                  </h1>
                  <p className="mt-6 max-w-xl text-[16px] w-900:text-[19px] text-paper/85 leading-relaxed">
                    En ideell idrottsförening som brinner för kampsport, för
                    både stora och små, erfarna som nybörjare. På Stockholm
                    Stadion, mitt i staden.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="/schema" variant="primary" size="lg">
                      Se schema
                    </Button>
                    <Button
                      href="mailto:info@kampsportstadion.se"
                      variant="ghost"
                      size="lg"
                      className="bg-paper/0 text-paper border-paper/40 hover:bg-paper hover:text-ink hover:border-paper"
                    >
                      Boka prova på
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────  Intro / about */}
        <Section pad="marquee">
          <Container variant="wide">
            <div className="grid w-900:grid-cols-12 gap-10 w-900:gap-16">
              <div className="w-900:col-span-7">
                <Eyebrow>Om Kampsportstadion</Eyebrow>
                <Heading size="lg" level={2} className="mt-4 max-w-2xl">
                  Kampsport på Stockholm Stadion.
                </Heading>
                <p className="mt-6 text-[17px] w-900:text-[20px] leading-relaxed text-ink-soft max-w-prose">
                  I fina lokaler inne på Stockholm Stadion hittar du
                  Kampsportstadion. Med en 400 kvm stor sal och fantastiska
                  tränare kan vi erbjuda kampsport för alla. Som medlem hos oss
                  kan du köra alla pass på schemat och du har fri tillgång
                  till gymmet 06.30–20.00 vardagar och 09.00–13.00 på helgen.
                </p>
                <p className="mt-4 text-[17px] w-900:text-[20px] leading-relaxed text-ink-soft max-w-prose">
                  Vi har klasser i{' '}
                  <span className="text-ink font-medium">
                    Kampsportfys, Cirkelträning, Muay Thai, MMA, Barnträning,
                    Yoga och BJJ.
                  </span>
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="/klasser" variant="primary" size="md">Se alla klasser</Button>
                  <Button href="/medlemskap" variant="ghost" size="md">Medlemskap</Button>
                  <Button href="https://kampsportstadion-online.se/" external variant="link">Online coachning →</Button>
                </div>
              </div>

              <aside className="w-900:col-span-5 w-900:pl-10 w-900:border-l w-900:border-graphite-300 flex flex-col gap-8">
                <Stat label="Grundat" value="1912" sub="Stockholm Stadion" />
                <Divider />
                <Stat label="Salyta" value="400 m²" sub="dedikerad mattyta" />
                <Divider />
                <Stat label="Åldersspann" value="4 → 60+" sub="från Kampsportlek till tävlingselit" />
                <Divider />
                <Stat label="Pass / vecka" value="40+" sub="Thai · BJJ · MMA · SW · Fys · NPF" />
              </aside>
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────  Class families */}
        <Section pad="marquee" className="bg-paper-dim border-y border-graphite-300">
          <Container variant="wide">
            <div className="flex flex-col w-900:flex-row w-900:items-end w-900:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <Eyebrow>Träningsutbud</Eyebrow>
                <Heading size="lg" level={2} className="mt-4">
                  Sex spår,<br />en mattyta.
                </Heading>
              </div>
              <Button href="/klasser" variant="link">
                Alla klasser med detaljer →
              </Button>
            </div>

            <ul className="border-t border-graphite-300">
              {CLASS_FAMILIES.map((c, i) => (
                <li
                  key={c.family}
                  className="group border-b border-graphite-300 grid w-900:grid-cols-12 gap-3 w-900:gap-6 items-baseline py-6 w-900:py-8 transition-colors hover:bg-paper"
                >
                  <span className="w-900:col-span-1 tabular text-[12px] text-graphite-500 flex items-center gap-2">
                    <span className={`block w-2.5 h-2.5 ${c.color}`} aria-hidden="true" />
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="w-900:col-span-3 font-display text-[1.6rem] w-900:text-[2.1rem] tracking-[-0.025em] leading-[1.05]">
                    {c.family}
                  </h3>
                  <p className="w-900:col-span-5 text-[15px] w-900:text-[16px] text-ink-soft leading-relaxed">
                    {c.short}
                  </p>
                  <p className="w-900:col-span-3 text-[12.5px] text-graphite-500 tabular leading-snug">
                    {c.levels}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        {/* ─────────────────────────────────  Schedule preview */}
        <Section pad="marquee" id="schema">
          <Container variant="wide">
            <div className="flex flex-col w-900:flex-row w-900:items-end w-900:justify-between gap-6 mb-10">
              <div>
                <Eyebrow>Veckoschema</Eyebrow>
                <Heading size="lg" level={2} className="mt-4">
                  Varje pass, varje dag.
                </Heading>
              </div>
              <Button href="/schema" variant="link">
                Öppna fullt schema →
              </Button>
            </div>
            <Schedule />
          </Container>
        </Section>

        {/* ─────────────────────────────────  Image grid */}
        <Section pad="default" className="bg-paper-dim border-t border-graphite-300">
          <Container variant="wide">
            <div className="grid grid-cols-2 w-900:grid-cols-4 gap-3 w-900:gap-4">
              {[1, 2, 3, 4].map((n) => (
                <figure key={n} className="aspect-[4/5] overflow-hidden bg-paper">
                  <img
                    src={`/grid_image${n}.jpg`}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-quint hover:scale-[1.04]"
                  />
                </figure>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────  Closing CTA */}
        <Section pad="marquee">
          <Container variant="wide">
            <div className="border border-ink p-10 w-900:p-16 grid w-900:grid-cols-12 gap-8 items-center">
              <div className="w-900:col-span-8">
                <Eyebrow>Prova på, gratis</Eyebrow>
                <Heading size="lg" level={2} className="mt-3">
                  Kom in och kör ett pass.<br />Vi bjuder.
                </Heading>
                <p className="mt-5 max-w-prose text-[16px] text-ink-soft leading-relaxed">
                  Skriv en rad så bokar vi in dig på ett pass som passar din
                  nivå. Ingen utrustning behövs första gången.
                </p>
              </div>
              <div className="w-900:col-span-4 flex flex-col gap-3 w-900:items-end">
                <Button href="mailto:info@kampsportstadion.se" variant="primary" size="lg">
                  info@kampsportstadion.se
                </Button>
                <Button href="tel:0766082803" variant="link">
                  076-608 28 03
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p
        className="font-display text-[2.5rem] w-900:text-[3.5rem] tracking-[-0.03em] leading-none mt-2 tabular"
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0' }}
      >
        {value}
      </p>
      <p className="mt-2 text-[14px] text-ink-soft">{sub}</p>
    </div>
  );
}
