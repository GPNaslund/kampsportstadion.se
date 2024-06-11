import MobileNavbar from "@/components/navbar/mobile_navbar";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col mt-40 items-center text-center px-10 w-900:px-40">
          <h2 className="text-center text-4xl font-bold mb-5">KONTAKT</h2>
          <p className="w-900:text-2xl">
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
            Öppettider:
            <br></br>
            Måndag-torsdag 16.30 - 19.30
            <br></br>
            Lördag 09.30 - 13.30
            <br></br>
            Söndag 10.30 - 13.30
            <br></br>
            (Stängt alla röda dagar samt under sommar + jul)
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
    </main>
  )
}
