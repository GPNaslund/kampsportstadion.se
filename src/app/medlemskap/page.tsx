import BlackButton from "@/components/black_button/black_button";
import MobileNavbar from "@/components/navbar/mobile_navbar";

export default function MembershipPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col mt-40 items-center">
          <h2 className="text-center text-4xl font-bold">MEDLEMSKAP</h2>
          <BlackButton text={"KÖP HÄR"} href={""} />
          <div className="grid grid-flow-row w-900:grid-cols-2 p-5">

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Årskort</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">599:-/månad autogiro
                <br></br>
                8900:-/år kontant
                <br></br>
                Träna så mycket du vill,
                välj bland alla pass, tillgång till gymmet.
                12 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Årskort student</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">499:-/månad autogiro
                <br></br>
                Träna så mycket du vill,
                välj bland alla pass, tillgång till gymmet.
                Giltigt CSN-kort krävs. 12 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Guld Medlemskap</h2>
              <p className="border-2 p-2 border-t-0 flex-grow w-900:px-20">1299:-/månad autogiro
                <br></br>
                Träna så mycket du vill. Välj bland alla pass. Tillgång till gymmet. <span className="font-bold">Medlemskapet inkluderar även en 50 min behandling hos Proaktiv Idrottscenter varje månad.</span>
                Behandlingen måste nyttjas månaden dragningen gäller och kan inte sparas. 6 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Halvår</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">4800:-/halvår
              <br></br>
              6 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Halvår student</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">3800:-/halvår
              <br></br>
              6 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Kvartal</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">3000:-/kvartal
              <br></br>
              3 månaders bindningstid.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Thaiboxning ungdom 12-16 år</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">399:-/månad autogiro
              <br></br>
              2800:-/halvår kontant
              <br></br>
              Gäller tisdag & torsdags  17.30-18.30
              <br></br>
              6 månaders bindningstid
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Kampsport Barngrupp 7-11 år</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">399:-/månad autogiro
              <br></br>
              3 pass/v, uppehåll juni-augusti & december.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Kampsport Barngrupp 4-6 år</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">299:-/månad autogiro
              <br></br>
              1 pass/v, uppehåll juni-augusti & december.
              <br></br>
              Man har automatisk plats i gruppen kommande termin om man inte säger upp sitt medlemskap. Vill du säga upp ditt barns medlemskap gör man det innan nästa terminstart.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Prova på engångspass</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">200:-
              <br></br>
              Ingen drop in
              <br></br>
              Vill du prova så maila ditt namn till info@kampsportstadion.se, så skriver vi upp ditt
              namn i receptionen.
              </p>
            </div>

            <div className="flex flex-col text-center h-full w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Prova på en vecka</h2>
              <p className="border-2 border-t-0 p-2 flex-grow w-900:px-20">500:-
              <br></br>
              Ingen drop in
              <br></br>
              Medlemsavgift på 500:- tillkommer, alla som tränar hos oss måste vara medlemmar.
              </p>
            </div>

            <div className="grid grid-flow-row text-center w-900:text-2xl">
              <h2 className="border-2 border-b-0 font-bold p-2 w-900:text-2xl">Villkor</h2>
              <p className="border-2 border-t-0 p-2 w-900:px-20">Medlemsavgift om 500:-/år är obligatorisk, inkluderar
              idrottsförsäkring hos Folksam. Betalas på plats alt läggs till på första autogirodragningen.
              <br></br>
              <br></br>
              Vid uppsägning gäller 3 månaders uppsägningstid. Kontant betalning återbetalas ej vid avslut
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
              Kampsport barngrupper binder sig för en termin. Vill man avsluta sitt barns medlemskap meddelar man detta innan 
              nästa termins uppstart (gäller barngrupp 6-11 år)
              <br></br>
              <br></br>
              Vid uppsägning av medlemskap, maila ditt namn, personnummer och kortnummer till info@kampsportstadion.se
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