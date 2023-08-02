import MobileNavbar from "@/components/navbar/mobile_navbar";
import Image from 'next/image'

export default function SchemaPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col mt-40 items-center">
          <h2 className="text-center text-5xl font-bold mb-5">SCHEMA</h2>
          <Image
            src='/schedule-lg.jpg'
            alt='schema'
            quality={100}
            width={1200}
            height={622}
          />
          <a href="/schedule-lg.jpg" download="kampsportstadion-schema.jpg" className="w-900:text-2xl">Ladda ner schema</a>
          <p className="px-5 mt-10 text-center text-xl">Vid aktuell förändring på enstaka pass informeras medlemmen via GymControl och e-mail!</p>
        </div>
      </div>
    </main>
  )
}