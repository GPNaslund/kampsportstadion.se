import MobileNavbar from '@/components/navbar/mobile_navbar'
import BlackButton from '@/components/black_button/black_button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={false}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col place-content-center border-none">
          <img
            alt="Thaiboxing background"
            src='/fighter-faded-sm.jpg'
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
            className="w-625:hidden"
          />
          <img
            alt="Thaiboxing background"
            src='/fighter-faded-md.jpg'
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
            className="hidden w-625:block w-900:hidden"
          />
          <img
            alt="Thaiboxing background"
            src='/fighter-faded-lg.jpg'
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
            className="hidden w-900:block"
          />
          <div className="w-full z-10 absolute">
            <h2 className="text-white text-center text-4xl w-900:text-7xl font-bold ">KAMPSPORT <br></br>FÖR ALLA</h2>
            <p className="text-white text-center text-2xl w-900:text-2xl px-12 mt-2">Hos oss är alla välkomna, motionär som proffs.</p>
          </div>
        </div>
        <div className="w-full flex flex-col px-10 items-center w-900:mt-[80vh] w-900:px-40">
          <h2 className="text-center text-2xl w-900:text-4xl font-bold">Kampsport på Stockholm Stadion</h2>
          <p className="text-center text-lg w-900:text-2xl mt-4">I fina lokaler inne på Stockholm Stadion hittar du Kampsportstadion. Med 400 kvm sal med och fantastiska tränare har vi kampsport för alla. Som medlem hos oss kan du köra alla pass på schemat och du har fri tillgång till gymmet.</p>
          <p className="text-center text-lg w-900:text-2xl mt-2">Vi har klasser i Kampsportfys, Cirkelträning, Muay Thai, MMA, SW , Barnträning, Yoga och BJJ.</p>
          <BlackButton
            text='Se alla klasser'
            href="/klasser"
          />
          <BlackButton
            text='Medlemskap'
            href="/medlemskap"
          />
        </div>
        <div className="w-full flex flex-col px-10 items-center mt-20 w-900:mt-52">
          <h2 className="text-center text-2xl w-900:text-4xl font-bold">Schema</h2>
          <div className="flex flex-col w-screen items-center">
            <img
              src="/schedule-fall-lg.jpg"
              className="w-900:hidden"
              alt="schema"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <img
              src="/schedule-fall-xl.jpg"
              className="hidden w-900:block"
              alt="schema"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <a href="/schedule-lg.jpg" download="kampsportstadion-schema.jpg" className="text-lg w-900:text-2xl">Ladda ner schema</a>
          </div>
        </div>
      </div>
    </main>
  )
}
