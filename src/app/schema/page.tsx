import Container from '@/components/ui/container';
import Footer from '@/components/ui/footer';
import Heading from '@/components/ui/heading';
import Eyebrow from '@/components/ui/eyebrow';
import Navbar from '@/components/ui/navbar';
import Section from '@/components/ui/section';
import Schedule from '@/components/schedule/schedule';

export const metadata = {
  title: 'Schema — Kampsportstadion',
  description:
    'Veckoschema för Kampsportstadion på Stockholm Stadion. Thaiboxning, BJJ, MMA, kampsportsfys och barngrupper.',
};

export default function SchemaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 w-900:pt-32">
        <Section pad="tight">
          <Container variant="wide">
            <div className="max-w-prose">
              <Eyebrow>Veckoschema</Eyebrow>
              <Heading level={1} size="xl" className="mt-3">
                Schema
              </Heading>
              <p className="mt-5 text-[17px] w-900:text-[19px] leading-relaxed text-ink-soft">
                Hela veckans pass i en vy. Filtrera efter klass, hoppa till en
                viss dag, eller ladda ner schemat som bild att dela vidare.
              </p>
            </div>
          </Container>
        </Section>

        <Section pad="default" className="border-t border-graphite-300">
          <Container variant="wide">
            <Schedule />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
