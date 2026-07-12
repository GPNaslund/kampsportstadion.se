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
      <Navbar />
      <main>
        {/* ─────────────────────────────────  Hero — split panel */}
        <section className="pt-16 w-900:pt-20 border-b border-graphite-300">
          <div className="grid w-900:grid-cols-12 min-h-[calc(100vh-5rem)]">
            {/* Text panel */}
            <div className="w-900:col-span-5 w-1280:col-span-5 bg-paper flex flex-col">
              <Container variant="standard" as="div" className="flex-1 flex flex-col justify-between py-12 w-900:py-16">
                <div className="flex items-center gap-2 text-[11px] tabular text-graphite-500">
                  <span className="block w-2 h-2 bg-ink" aria-hidden="true" />
                  <span className="uppercase tracking-[0.18em]">Est. 1912 · Stockholm Stadion</span>
                </div>

                <div className="my-12 w-900:my-0">
                  <p className="eyebrow mb-6">Djurgårdens IF Kampsport</p>
                  <h1 className="font-display font-black text-ink text-[3.25rem] w-625:text-[4rem] w-900:text-[5.25rem] leading-[1.02] tracking-[-0.05em] uppercase">
                    Kampsport<br />
                    <span className="text-graphite-500">för</span> alla.
                  </h1>
                  <p className="mt-7 max-w-md text-[16px] w-900:text-[18px] text-ink-soft leading-relaxed">
                    En ideell idrottsförening som brinner för kampsport, för
                    både stora och små, erfarna som nybörjare. Inne på Stockholm
                    Stadion, mitt i staden.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button href="/schema" variant="primary" size="lg">
                      Se schema
                    </Button>
                    <Button href="mailto:info@kampsportstadion.se" variant="ghost" size="lg">
                      Boka prova på
                    </Button>
                  </div>
                </div>

                {/* Bottom stats strip */}
                <dl className="hidden w-900:grid grid-cols-3 gap-6 pt-8 border-t border-graphite-300">
                  <HeroStat k="40+"     v="pass i veckan" />
                  <HeroStat k="400 m²"  v="dedikerad sal" />
                  <HeroStat k="4 → 60+" v="åldersspann" />
                </dl>
              </Container>
            </div>

            {/* Logo panel */}
            <div className="w-900:col-span-7 relative bg-paper min-h-[60vh] w-900:min-h-0 overflow-hidden border-t border-graphite-300 w-900:border-t-0 w-900:border-l">
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <img
                  src="/ks-logo-vector.svg"
                  alt="Kampsportstadion"
                  className="w-full max-w-[420px] w-900:max-w-[560px] h-auto object-contain"
                />
              </div>

              {/* Location caption */}
              <div className="absolute left-6 bottom-6 w-900:left-10 w-900:bottom-10">
                <span className="flex items-center gap-2 text-[11px] tabular uppercase tracking-[0.18em] text-graphite-500">
                  <span className="block w-2 h-2 bg-accent" aria-hidden="true" />
                  Stockholms Stadion · Est. 1912
                </span>
              </div>
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
                  Kampsport på<br />Stockholm Stadion.
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
        <Section pad="marquee" className="border-y border-graphite-300">
          <Container variant="wide">
            <div className="flex flex-col w-900:flex-row w-900:items-end w-900:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <Eyebrow>Träningsutbud</Eyebrow>
                <Heading size="lg" level={2} className="mt-4">
                  Från Kampsportlek<br />till tävlingselit.
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
                  className="group border-b border-graphite-300 grid w-900:grid-cols-12 gap-3 w-900:gap-6 items-baseline py-6 w-900:py-8"
                >
                  <span className="w-900:col-span-1 tabular text-[12px] text-graphite-500 flex items-center gap-2">
                    <span className={`block w-2.5 h-2.5 ${c.color}`} aria-hidden="true" />
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="w-900:col-span-3 font-display font-extrabold text-[1.5rem] w-900:text-[1.85rem] tracking-[-0.035em] leading-[1.05]">
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
                  Varje pass,<br />varje dag.
                </Heading>
              </div>
              <Button href="/schema" variant="link">
                Öppna fullt schema →
              </Button>
            </div>
            <Schedule />
          </Container>
        </Section>

        {/* ─────────────────────────────────  Image grid (gym black band) */}
        <Section pad="default" className="bg-ink-deep text-paper border-t border-ink-deep">
          <Container variant="wide">
            <div className="grid grid-cols-2 w-900:grid-cols-4 gap-px bg-graphite-500">
              {[1, 2, 3, 4].map((n) => (
                <figure key={n} className="relative aspect-[4/5] overflow-hidden bg-ink-deep">
                  <img
                    src={`/grid_image${n}.jpg`}
                    alt=""
                    className="w-full h-full object-cover grayscale contrast-[1.1] transition-transform duration-700 ease-out-quint hover:scale-[1.04]"
                  />
                </figure>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─────────────────────────────────  Closing CTA (inverted band) */}
        <section className="bg-ink-deep text-paper">
          <Container variant="wide">
            <div className="py-20 w-900:py-32 grid w-900:grid-cols-12 gap-8 items-center">
              <div className="w-900:col-span-8">
                <p className="eyebrow text-paper/85">Prova på, gratis</p>
                <h2 className="mt-4 font-display font-extrabold text-paper text-[2.25rem] w-625:text-[2.75rem] w-900:text-[3.75rem] leading-[1.0] tracking-[-0.04em]">
                  Kom in och kör ett pass.<br />Vi bjuder.
                </h2>
                <p className="mt-6 max-w-prose text-[16px] w-900:text-[17px] text-paper/85 leading-relaxed">
                  Skriv en rad så bokar vi in dig på ett pass som passar din
                  nivå. Ingen utrustning behövs första gången.
                </p>
              </div>
              <div className="w-900:col-span-4 flex flex-col gap-4 w-900:items-end">
                <a
                  href="mailto:info@kampsportstadion.se"
                  className="inline-flex items-center justify-center h-14 w-900:h-16 px-7 w-900:px-9 text-base w-900:text-lg font-medium rounded-full bg-paper text-ink hover:bg-accent hover:text-paper transition-colors duration-200 ease-out-quint"
                >
                  info@kampsportstadion.se
                </a>
                <a
                  href="tel:0766082803"
                  className="text-paper underline underline-offset-4 decoration-paper/50 hover:decoration-accent hover:text-accent tabular transition-colors"
                >
                  076-608 28 03
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function HeroStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display font-extrabold text-[1.25rem] tracking-[-0.04em] tabular text-ink leading-none">
        {k}
      </dt>
      <dd className="mt-1.5 text-[11.5px] text-ink-soft uppercase tracking-[0.12em]">
        {v}
      </dd>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="font-display font-extrabold text-[2.5rem] w-900:text-[3.25rem] tracking-[-0.05em] leading-none mt-2 tabular">
        {value}
      </p>
      <p className="mt-2 text-[14px] text-ink-soft">{sub}</p>
    </div>
  );
}
