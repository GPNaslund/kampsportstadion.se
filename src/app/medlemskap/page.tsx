import BlackButton from "@/components/black_button/black_button";
import MobileNavbar from "@/components/navbar/mobile_navbar";

export default function MembershipPage() {
  return (
    <main className="flex min-h-full min-w-full flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-full flex flex-col mt-40 items-center">
          <h2 className="text-center text-4xl font-bold">MEDLEMSKAP</h2>
          <BlackButton text={"KÖP HÄR"} href={"https://www.gymcontrol.se/global/webshop/index.php?uid=8975&action=home"} />
          <div className="grid grid-flow-row w-900:grid-cols-2 w-450:p-5">

            <div className="flex flex-col text-center h-full w-900:text-2xl col-start-1">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Årskort</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">799:-/månad autogiro
                <br></br>
                9800:-/år swish eller kort
                <br></br>
                Träna så mycket du vill,
                välj bland alla pass, tillgång till gymmet.
                12 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-2">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Årskort student</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">649:-/månad autogiro
                <br></br>
                8000:-/år swish eller kort
                <br></br>
                Träna så mycket du vill,
                välj bland alla pass, tillgång till gymmet.
                Giltigt CSN-kort krävs. 12 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-1 w-900:row-start-4">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Guld Medlemskap</h2>
              <p className="border-2 p-2 border-t-0 flex-grow w-900:px-20">1499:-/månad autogiro
                <br></br>
                Träna så mycket du vill. Välj bland alla pass. Tillgång till gymmet. <span className="font-bold">Medlemskapet inkluderar även en 50 min behandling hos Proaktiv Idrottscenter varje månad.</span>
                Behandlingen måste nyttjas månaden dragningen gäller och kan inte sparas. 6 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-1">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Halvår</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">5400:-/halvår swish eller kort
                <br></br>
                6 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-2">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Halvår student</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">4500:-/halvår swish eller kort
                <br></br>
                6 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-1">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Kvartal</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">3000:-/kvartal swish eller kort
                <br></br>
                3 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-2">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Ungdomsgrupp 13-16 år</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">499:-/månad autogiro
                <br></br>
                3200:-/termin swish eller kort
                <br></br>
                Gäller tisdag & torsdag 17.00-18.00
                <br></br>
                6 månaders bindningstid
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-2">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Kampsport Barngrupp 7-9 år & 9-12 år</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">499:-/månad autogiro
                <br></br>
                3200:- / termin swish eller kort
                <br></br>
                Välj grupp:
                <br></br>
                1. Brasiliansk jiu-jitsu (BJJ) 2 pass i veckan.
                <br></br>
                2. Thaiboxning 2 pass i veckan.
                <br></br>
                Uppehåll juni-augusti & januari.
                <br></br>
                Man har automatisk plats i gruppen kommande termin om man inte säger upp sitt medlemskap.
                Vill du säga upp ditt barns medlemskap gör man det innan nästa terminstart.
                Maila namn och uppsägning till info@kampsportstadion.se
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-2">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Kampsport Barngrupp 4-6 år</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">399:-/månad autogiro
                <br></br>
                2600:- / termin swish eller kort
                <br></br>
                1 pass/v, uppehåll juni-augusti & januari.
                <br></br>
                Man har automatisk plats i gruppen kommande termin om man inte säger upp sitt medlemskap. Vill du säga upp ditt barns medlemskap gör man det innan nästa terminstart.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-1 w-900:row-start-5">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Prova på engångspass</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">200:- swish eller kort
                <br></br>
                Ingen drop in
                <br></br>
                Vill du prova så maila ditt namn till info@kampsportstadion.se, så skriver vi upp ditt
                namn i receptionen.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-1">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Prova på en vecka</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">500:- swish eller kort
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl w-900:col-start-2">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Klippkort 10 gånger</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">2000:- swish eller kort
              </p>
            </div>

            <div className="grid grid-flow-row text-center w-900:text-2xl col-span-2">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Villkor</h2>
              <p className="border-2 border-t-0 p-2 w-900:px-20">Medlemsavgift om 500:-/år är obligatorisk oavsett medlemskap, inkluderar
                idrottsförsäkring hos Folksam. Betalas på plats alt läggs till på första autogirodragningen.
                <br></br>
                <br></br>
                Vid uppsägning gäller 3 månaders uppsägningstid. swish eller kort betalning återbetalas ej vid avslut
                av medlemskapet innan köpt period löper ut.
                <br></br>
                Vid uppstart av ett tidigare avslutat medlemskap tas en administrativ avgift ut på 300:-
                <br></br>
                <br></br>
                Vi har två terminer; Januari - Maj/Juni samt Augusti - December. Autogiro är en delbetalning
                av terminsavgiften, vilket innebär att autogirot forlöper även då det inte är termin. Det går därför
                inte att frysa medlemskapet under sommaren.
                <br></br>
                Bindningstiden för autogiro är 12 månader för vuxna och 6 månader för ungdom/student upp till 18 år.
                <br></br>
                Vi har stängt under sommaren men erbjuder träning på annan plats.
                <br></br>
                <br></br>
                Kampsport barngrupper binder sig för en termin. Ingen betalning dras under sommaren för barngruppen. Vill man avsluta sitt barns medlemskap meddelar man detta innan nästa termins uppstart (gäller barngrupp 4-11 år)
                <br></br>
                <br></br>
                Vid uppsägning av medlemskap, maila ditt namn, personnummer och kortnummer till info@kampsportstadion.se
                <br></br>
                Vi skickar alltid en bekräftelse på din uppsägelse, ifall du har sagt upp ditt medlemskap men inte erhåller en bekräftelse
                på uppsägningen så kontakta oss snarast. Återbetalning av medlemsavgifter som uppstått pga bristande förfarande vid uppsägning
                återbetalas ej.
                <br></br>
                Lämna in ditt medlemskort efter sista passet för avslutande av medlemskap. Gäller alla medlemskap.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
