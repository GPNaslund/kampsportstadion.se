import MobileNavbar from "@/components/navbar/mobile_navbar";

export default function SchemaPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center">
      <MobileNavbar forWhiteBg={true} />
      <div className="w-full">
        <div className="w-full h-full flex flex-col mt-32 items-center">
          <h2 className="text-center text-4xl font-bold mb-5">SCHEMA</h2>
          <img
            src="/schema-ht24.jpg"
            className="w-900:hidden"
            alt="schema"
            style={{
              width: "80%",
              height: "auto",
            }}
          />
          <img
            src="/schema-ht24.jpg"
            className="hidden w-900:block"
            alt="schema"
            style={{
              width: "80%",
              height: "auto",
            }}
          />
          <a
            href="/schema-ht24.jpg"
            download="/schema-ht24.jpg"
            className="w-900:text-2xl underline"
          >
            Ladda ner schema
          </a>
          <p className="px-5 mt-10 text-center text-xl w-900:text-2xl">
            Gäller v.3 - v.20
          </p>
          <p className="px-5 text-center text-xl w-900:text-2xl">
            (Barngrupp v.5 - v.20)
          </p>
          <p className="px-5 text-center text-xl w-900:text-2xl">
            Sommarschemat börjar vecka 21
          </p>
          <p className="px-5 mt-10 text-center text-xl w-900:text-2xl">
            Ny termin start vecka 34!
          </p>
          <p className="px-5 text-center text-xl w-900:text-2xl">
            Sommarschema gäller för alla våra medlemmar fram till vecka 33
          </p>
          <p className="px-5 text-center text-xl w-900:text-2xl">
            Thaiboxning måndag och onsdag 17.30 - 18.30 (alla nivåer +
            ungdomsgrupp)
          </p>
          <p className="px-5 text-center text-xl w-900:text-2xl">
            Kampsportsfys tisdag och torsdag 17.30 - 18.30 (alla nivåer +
            ungdomsgrupp)
          </p>
          <p className="px-5 text-center text-xl w-900:text-2xl">
            Vi kör på Östermalms IP / Brinkens träningsanläggning!
          </p>
          <p className="px-5 text-center text-xl w-900:text-2xl">
            BJJ gruppen kör på Kampsportshuset
          </p>
          <p className="px-5 mt-10 text-center text-xl w-900:text-2xl">
            Vid aktuell förändring på enstaka pass informeras medlemmen via
            GymControl och e-mail!
          </p>
        </div>
      </div>
    </main>
  );
}
