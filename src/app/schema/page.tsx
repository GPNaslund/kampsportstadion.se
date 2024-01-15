import Footer from "@/components/footer/footer";
import MobileNavbar from "@/components/navbar/mobile_navbar";
import Image from 'next/image'

export default function SchemaPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-full flex flex-col mt-32 items-center">
          <h2 className="text-center text-4xl font-bold mb-5">SCHEMA</h2>
          <img
              src="/schedule_spring_v3.jpeg"
              className="w-900:hidden"
              alt="schema"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
            <img
              src="/schedule_spring_v3.jpeg"
              className="hidden w-900:block"
              alt="schema"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          <a href="/schedule_spring_v3.jpeg" download="/schedule_spring_v3.jpeg" className="w-900:text-2xl underline">Ladda ner schema</a>
          <p className="px-5 mt-10 text-center text-xl w-900:text-2xl">Gäller v.3 - v.22</p>
          <p className="px-5 text-center text-xl w-900:text-2xl">(Barngrupp v.5 - v.22)</p>
          <p className="px-5 mt-10 text-center text-xl w-900:text-2xl">Vid aktuell förändring på enstaka pass informeras medlemmen via GymControl och e-mail!</p>
        </div>
      </div>
    </main>
  )
}
