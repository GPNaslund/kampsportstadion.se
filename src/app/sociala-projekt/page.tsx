import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import PageHeader from '@/components/ui/page-header';
import Button from '@/components/ui/button';

export const metadata = {
  title: 'Sociala projekt — Kampsportstadion',
  description:
    'Kampsportstadions sociala projekt: mentorprogram, sponsrade medlemskap och gratis lov-läger för barn och ungdomar i Stockholm.',
};

export default function SocialProjects() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Föreningens hjärta"
          title="Sociala projekt"
          description="Vill du vara med och sponsra våra sociala projekt?"
          actions={
            <Button href="mailto:info@kampsportstadion.se" variant="primary" size="lg">
              info@kampsportstadion.se
            </Button>
          }
        />

        <Section pad="default" className="border-t border-graphite-300">
          <Container variant="wide">
            <div className="grid w-900:grid-cols-12 gap-10">
              <div className="w-900:col-span-8 w-900:col-start-3">
                <p className="text-[17px] w-900:text-[20px] leading-relaxed text-ink-soft">
                  Vi som förening brinner för att barn och ungdomsidrott ska vara
                  tillgängligt för alla oavsett bakgrund. Tyvärr har det för många
                  familjer blivit en kostnadsfråga och med hjälp och stöd från
                  våra sponsorer har vi möjlighet att jobba med olika typer av
                  mentorsprogram, sponsrade medlemskap och kostnadsfria lov-läger
                  för barn och ungdomar från hela Stockholm.
                </p>
                <p className="mt-6 text-[17px] w-900:text-[20px] leading-relaxed text-ink-soft">
                  Är du eller ditt företag intresserade av att vara med och
                  sponsra får ni gärna höra av er till{' '}
                  <a className="text-ink underline underline-offset-4 decoration-graphite-300 hover:text-accent hover:decoration-accent" href="mailto:info@kampsportstadion.se">
                    info@kampsportstadion.se
                  </a>{' '}
                  så återkommer vi med mer information.
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
