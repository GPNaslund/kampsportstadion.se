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
          <Image
            alt="Thaiboxing background"
            src='/fighter-faded-sm.jpg'
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="w-full z-10 -mt-52">
            <h2 className="text-white text-center text-5xl font-bold ">KAMPSPORT <br></br>FÖR ALLA</h2>
            <p className="text-white text-center text-2xl px-12 mt-2">Hos oss är alla välkomna, motionär som proffs.</p>
          </div>
        </div>
        <div className="w-full flex flex-col px-10 items-center">
          <h2 className="text-center text-3xl font-bold">Kampsport på Stockholm Stadion</h2>
          <p className="text-center text-lg mt-4">I fina lokaler inne på Stockholm Stadion hittar du Kampsportstadion. Med 400 kvm sal med och fantastiska tränare har vi kampsport för alla. Som medlem hos oss kan du köra alla pass på schemat och du har fri tillgång till gymmet.</p>
          <p className="text-center text-lg mt-2">Vi har klasser i Kampsportfys, Cirkelträning, Muay Thai, MMA, SW , Barnträning, Yoga och BJJ.</p>
          <BlackButton
            text='Se alla klasser'
          />
          <BlackButton
            text='Medlemskap'
          />
        </div>
        <div className="w-full flex flex-col px-10 items-center mt-10">
          <h2 className="text-center text-3xl font-bold">Schema</h2>
          <div className="flex flex-col w-screen">
            <Image 
              src='/schedule-lg.jpg'
              alt='schema'
              quality={100}
              sizes='100vw'
              width={800}
              height={414}   
            />
          </div>
        </div>
      </div>
    </main>
  )
}
