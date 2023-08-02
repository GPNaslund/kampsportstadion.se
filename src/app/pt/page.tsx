import MobileNavbar from "@/components/navbar/mobile_navbar";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col mt-40 items-center text-center px-10">
          <h2 className="text-center text-5xl font-bold mb-5">PERSONLIG TRÄNING</h2>
          <p className="w-900:text-2xl w-900:px-20">
            Är du intresserad av PT har vi ett gäng duktiga, erfarna tränar som kan hjälpa dig. Både inom styrka, kondition, boxning, thaiboxning, MMA och BJJ.
            <br></br>
            <br></br>
            <span className="font-bold">Rickard Nordstrand:</span>
            <br></br>
            Världsmästare i thaiboxning. Vill du slipa dina tekniker eller jobba styrka i gymmet? Rickard är en all around tränare som kan hjälpa dig med det mesta. Thaiboxning är dock hans specialitet.
            <br></br>
            <br></br>
            <span className="font-bold">Synøve Asplund:</span>
            <br></br>
            Personlig träning med mål att motivera och inspirera till fysisk aktivitet och rörelse. Att starka individen och möta personen just där den är för att maximera den personliga utvecklingen. Älskar funktionell styrka, thaiboxning och gym. Vi sätter i hop en plan utifrån dina mål och förutsättningar.
            <br></br>
            <br></br>
            <span className="font-bold">Jimmie Jensen:</span>
            <br></br>
            Som huvudcoach för vår elitgrupp med bland annat UFC fighters och landslags-fighters kan Jimmie ta din fighting till en ny nivå. Nybörjare som proffs spelar ingen roll-tillsammans lägger vi upp en plan för att ge dig den personliga utvecklingen och resultat du vill åt. Teknik, styrka  kondition för att bygga en stark, hållbar kropp och ett bra fighting game.
            <br></br>
            <br></br>
            <span className="font-bold">Markku Hakala:</span>
            <br></br>
            Har du ett viktmål eller vill du förbättra din kondition, bygga en starkare kropp eller ta din thaiboxning till högre höjder? Med 15 års erfarenhet av kampsport och som licensierad PT och löpcoach skräddarsyr jag ett program till dig.
            <br></br>
            <br></br>
            <span className="font-bold">Ash Byrne:</span>
            <br></br>
            Vill du förbättra dina tekniker är eller lära dig grunder i fighting? Med över 50 fighter inom boxning, thaiboxning, MMA, Allstyle och Bareknuckle har Ash samlat på sig en hel del kunskap inom fighting.
            <br></br>
            <br></br>
            <span className="font-bold">Niklas Karlsson:</span>
            <br></br>
            Vill du komma i form eller behöver jobba på dina tekniker i thaiboxning kan Niklas hjälpa dig.
            <br></br>
            <br></br>
            <span className="font-bold">Antoine Constantinedes:</span>
            <br></br>
            Strength & condition huvud coach för våra fighters. Jobbar mycket med individuella programmeringar för att hjälpa dig att nå ditt bästa potential inom din fighting och en stark och hållbar kropp.!
            <br></br>
            <br></br>
            Pris: 900kr per PT-timme. Rabatterat pris om du är medlem på Kampsportstadion.
            <br></br>
            (Kontakta Rickard Nordstrand för hans egna prislista).
            <br></br>
            Maila info@kampsportstadion.se för mera information.
          </p>
        </div>
      </div>
    </main>
  )
}