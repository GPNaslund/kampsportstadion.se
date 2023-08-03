import MobileNavbar from "@/components/navbar/mobile_navbar";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col mt-40 items-center text-center px-10 w-900:px-40">
          <h2 className="text-center text-5xl font-bold mb-5">KONTAKT</h2>
          <p className="w-900:text-3xl">
            <span className="font-bold">info@kampsportstadion.se</span>
            <br></br>
            <br></br>
            Djurgårdens IF Kampsport
            <br></br>
            Styrelse:
            <br></br>
            Ordförande Patrik Asplund
            <br></br>
            Ledamöter: Tommy Jacobson, Rickard Nordstrand & Synøve Asplund
            <br></br>
            <br></br>
            Tel: 076-625-91 83 
            <br></br>
            Måndag-torsdag 17.00-20.00 (vi har ofta svårt att svara i telefonen då man håller pass så lättas är att maila (info@kampsportstadion.se) eller skicka sms så ringer vi upp er i mån av tid!).
            <br></br>
            <br></br>
            Receptionen är bemannad måndag till torsdag 16.30-20.00 och lördag 10.00-12.00.
            <br></br>
            Under sommaren och julen har vi stängt. Kolla schemat för info om sommarträning och julträning.
          </p>
        </div>
      </div>
    </main>
  )
}