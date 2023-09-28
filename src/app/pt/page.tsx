import MobileNavbar from "@/components/navbar/mobile_navbar";
import StaffCard from "@/components/staff_card/staff_card";

export default function ContactPage() {
  return (
    <main className="flex min-h-full min-w-full flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-full flex flex-col mt-40 items-center text-center px-10 w-900:px-40">
          <h2 className="text-center text-4xl font-bold mb-5">PERSONLIG TRÄNING</h2>
          <p className="w-900:text-2xl w-900:px-20 mb-10">Är du intresserad av PT har vi ett gäng duktiga, erfarna tränar som kan hjälpa dig.<br></br> Både inom styrka, kondition, boxning, thaiboxning, MMA och BJJ.</p>
          <StaffCard 
            name="Rickard Nordstrand"
            description="Världsmästare i thaiboxning. Vill du slipa dina tekniker eller jobba styrka i gymmet? Rickard är en all around tränare som kan hjälpa dig med det mesta. Thaiboxning är dock hans specialitet."
            email="rickard@goodsport.se"
            phoneNumber='0707122201'
          />
          <StaffCard 
            name="Synøve Asplund"
            description="Personlig träning med mål att motivera och inspirera till fysisk aktivitet och rörelse. Att starka individen och möta personen just där den är för att maximera den personliga utvecklingen. Älskar funktionell styrka, thaiboxning och gym. Vi sätter i hop en plan utifrån dina mål och förutsättningar."
            email="info@kampsportstadion.se"
            phoneNumber='0707943873'
          />
          <StaffCard 
            name="Tessan"
            description="Vill du få bättre kondition eller bygga en stark och stabil fysik hjälper jag dig gärna. Tillsammans utgår vi från vart du är idag och vart du vill komma. Med min bakgrund inom fitness och styrketräning har jag verktygen för att du ska kunna nå dina mål."
            email="theresebackgren@gmail.com"
            phoneNumber='0737070809'
          />
          <StaffCard 
            name="Jimmie Jensen"
            description="Som huvudcoach för vår elitgrupp med bland annat UFC fighters och landslags-fighters kan Jimmie ta din fighting till en ny nivå. Nybörjare som proffs spelar ingen roll-tillsammans lägger vi upp en plan för att ge dig den personliga utvecklingen och resultat du vill åt. Teknik, styrka  kondition för att bygga en stark, hållbar kropp och ett bra fighting game."
            email="jimmie@murarfirma.se"
            phoneNumber='0732034060'
          />
          <StaffCard 
            name="Markku Eide"
            description="Har du ett viktmål eller vill du förbättra din kondition, bygga en starkare kropp eller ta din thaiboxning till högre höjder? Med 15 års erfarenhet av kampsport och som licensierad PT och löpcoach skräddarsyr jag ett program till dig. "
            email="mh.ptcoachning@gmail.com"
            phoneNumber='0707158607'
          />
          <StaffCard 
            name="Niklas Messing"
            description="Vill du komma i form eller behöver jobba på dina tekniker i thaiboxning kan Niklas hjälpa dig."
            email="niklas.messing@outlook.com"
            phoneNumber='0707866055'
          />
          <StaffCard 
            name="Antoine Constantinedes"
            description="Strength & condition huvud coach för våra fighters. Jobbar mycket med individuella programmeringar för att hjälpa dig att nå ditt bästa potential inom din fighting och en stark och hållbar kropp!"
            email="antonyc19@hotmail.com"
            phoneNumber='0765633111'
          />
          <p className="w-900:text-2xl w-900:px-20 mt-20">Pris: 900kr per PT-timme. Rabatterat pris om du är medlem på Kampsportstadion.</p>
          <p className="w-900:text-2xl w-900:px-20 ">(Rickard Nodstrand har egen prislista)</p>
          <p className="w-900:text-2xl w-900:px-20 pb-20">Kontakta oss på <a href="mailto:info@kampsportstadion.se">info@kampsportstadion.se</a> för mer information</p>
        </div>
      </div>
    </main>
  )
}