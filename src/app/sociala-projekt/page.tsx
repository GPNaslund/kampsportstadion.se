import MobileNavbar from "@/components/navbar/mobile_navbar";

export default function SocialProjects() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col mt-40 items-center">
          <h2 className="text-center text-5xl font-bold mb-5">SOCIALA PROJEKT</h2>
          <p className="text-lg text-center mt-5 px-5">Vill du vara med och sponsra våra sociala projekt?</p>
          <p className="text-lg text-center mt-5 px-5">Vi som förening brinner för att barn och ungdomsidrott ska vara tillgängligt för alla oavsett bakgrund. Tyvärr har det för 
            många familjer blivit en kostnadsfråga och med hjälp och stöd från våra sponsorer har vi möjlighet att jobba med olika typer av mentorsprogram, 
            sponsrade medlemskap och kostnadsfria lov-läger för barn och ungdomar från hela Stockholm.
            <br></br>
            Är du eller ditt företag intresserade av att vara med och sponsra får ni gärna höra av er till info@kampsportstadion.se så återkommer vi med mer information.</p>
        </div>
      </div>
    </main>
  )
}