import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import PageHeader from '@/components/ui/page-header';
import Eyebrow from '@/components/ui/eyebrow';
import Divider from '@/components/ui/divider';

export const metadata = {
  title: 'Kontakt — Kampsportstadion',
  description: 'Kontaktuppgifter, öppettider och styrelse för Kampsportstadion.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Säg hej"
          title="Kontakt"
          description="Hör av dig om du har en fråga om träning, medlemskap, företag eller bara vill säga hej."
        />

        <Section pad="default" className="border-t border-graphite-300">
          <Container variant="wide">
            <div className="grid w-900:grid-cols-12 gap-10 w-900:gap-16">
              <div className="w-900:col-span-6">
                <Eyebrow>Direkt</Eyebrow>
                <ul className="mt-5 space-y-4 text-[18px] w-900:text-[22px]">
                  <li>
                    <a
                      className="font-medium text-ink hover:text-accent underline underline-offset-4 decoration-graphite-300 hover:decoration-accent transition-colors"
                      href="mailto:info@kampsportstadion.se"
                    >
                      info@kampsportstadion.se
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-medium text-ink hover:text-accent underline underline-offset-4 decoration-graphite-300 hover:decoration-accent transition-colors tabular"
                      href="tel:0766082803"
                    >
                      076-608 28 03
                    </a>
                  </li>
                </ul>

                <Divider className="my-10" />

                <Eyebrow>Plats</Eyebrow>
                <p className="mt-4 text-[16px] text-ink-soft leading-relaxed max-w-prose">
                  Kampsportstadion<br />
                  Lidingövägen 1<br />
                  114 33 Stockholm<br />
                  Inne på Stockholm Stadion.
                </p>
                <a
                  href="https://goo.gl/maps/5ipnHxJKXbrAHLBw6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[14px] text-ink hover:text-accent underline underline-offset-4 decoration-graphite-300 hover:decoration-accent"
                >
                  Visa på karta →
                </a>
              </div>

              <div className="w-900:col-span-6">
                <Eyebrow>Öppettider</Eyebrow>
                <dl className="mt-5 border-t border-graphite-300">
                  {[
                    ['Måndag – Torsdag', '16.30 – 19.30'],
                    ['Lördag', '09.30 – 13.30'],
                    ['Söndag', '10.30 – 13.30'],
                  ].map(([d, h]) => (
                    <div
                      key={d}
                      className="flex justify-between py-4 border-b border-graphite-300"
                    >
                      <dt className="text-[15px] text-ink">{d}</dt>
                      <dd className="text-[15px] text-ink tabular">{h}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[13.5px] text-graphite-500">
                  Stängt alla röda dagar samt under sommar och jul.
                </p>

                <Divider className="my-10" />

                <Eyebrow>Förening</Eyebrow>
                <p className="mt-4 text-[16px] text-ink-soft leading-relaxed">
                  Djurgårdens IF Kampsport — Idrottsförening.
                </p>
                <dl className="mt-5 space-y-3 text-[15px]">
                  <div className="flex gap-3">
                    <dt className="w-32 text-graphite-500">Ordförande</dt>
                    <dd className="text-ink">Patrik Asplund</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-32 text-graphite-500">Ledamöter</dt>
                    <dd className="text-ink">Tommy Jacobson, Rickard Nordstrand & Synøve Asplund</dd>
                  </div>
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
