import MobileNavbar from "@/components/navbar/mobile_navbar";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col mt-40 items-center text-center px-10 w-900:px-40">
          <h2 className="text-center text-2xl font-bold mb-5 w-900:text-4xl">FÖRETAGSTRÄNING</h2>
          <p className="w-900:text-2xl">
            Vi håller även i företagsträning. Investera i din personal och få tillbaka friskare, gladare personal. En fantastik möjlighet att skapa en bra sammanhållning på arbetsplatsen samt sänka sjukfrånvaron.
            <br></br>
            <br></br>
            Vi kör även fotboll, handboll, hockey och andra idrottslag.
            <br></br>
            Maila info@kampsportstadion.se för mera information.
            <br></br>
            <br></br>
            Företag och föreningar som kör hos oss är bl.a:
            <br></br>
            Schibsted, Aftonbladet, Addnature, Supper, Indiska, Nocco, Refune, Academic Work, Djurgårdens IF Fotboll ungdom, Hammarby Fotboll 06
          </p>

          <h2 className="text-center text-2xl font-bold mb-5 mt-10 w-900:text-4xl">AW/AFTER WORK</h2>
          <p className="w-900:text-2xl">
            Byt ut ölen med en Nocco och dra med kollegor på ett After Workout    pass! 60 min grym träning med dryck och snacks till. Bästa sättet att bygga teamkänsla och skapa sammanhållning i gruppen. Omklädningsrum med bastu finns.
            <br></br>
            <br></br>
            Vill ditt företag köra en After Workout:
            <br></br>
            Maila info@kampsportstadion.se
          </p>
        </div>
      </div>
    </main>
  )
}