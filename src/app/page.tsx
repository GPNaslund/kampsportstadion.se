import MobileNavbar from '@/components/navbar/mobile_navbar'
import BlackButton from '@/components/black_button/black_button'
import ImageGrid from '@/components/image_grid/image_grid'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar forWhiteBg={false} />
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="w-full relative flex flex-col items-center justify-center">
            <img alt="Thaiboxing background" src='/bg-sm.jpg' style={{ width: '100%', height: 'auto', objectFit: 'cover' }} className="w-625:hidden" />
            <img alt="Thaiboxing background" src='/bg-md.jpg' style={{ width: '100%', height: 'auto', objectFit: 'cover' }} className="hidden w-625:block w-900:hidden" />
            <img alt="Thaiboxing background" src='/bg-lg.jpg' style={{ width: '100%', height: 'auto', objectFit: 'cover' }} className="hidden w-900:block" />
            <div className="bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-white to-transparent absolute"></div>
            <div className="absolute z-10 top-1/3 transform -translate-y-1/2 w-full">
              <h2 className="text-white text-center text-4xl w-900:text-7xl font-bold">KAMPSPORT <br />FÖR ALLA</h2>
              <p className="text-white text-center text-2xl w-900:text-2xl px-12 mt-2">Välkommen till DIF Kampsportsförening. Vi är en ideell idrottsförening som brinner för kampsport för både stora och små, erfarna som nybörjare.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col px-10 items-center w-900:px-40 mt-40">
          <h2 className="text-center text-2xl w-900:text-4xl font-bold">Kampsport på Stockholm Stadion</h2>
          <p className="text-center text-lg w-900:text-2xl mt-4">I fina lokaler inne på Stockholm Stadion hittar du Kampsportstadion. Med 400 kvm sal med och fantastiska tränare har vi kampsport för alla. Som medlem hos oss kan du köra alla pass på schemat och du har fri tillgång till gymmet.</p>
          <p className="text-center text-lg w-900:text-2xl mt-2">Vi har klasser i <span className="font-bold">Kampsportfys, Cirkelträning, Muay Thai, MMA, Barnträning, Yoga och BJJ.</span></p>
          <BlackButton text='Se alla klasser' href="/klasser" />
          <BlackButton text='Medlemskap' href="/medlemskap" />
        </div>
        <div className="w-full flex flex-col px-10 items-center mt-40">
          <h2 className="text-center text-2xl w-900:text-4xl font-bold">Schema</h2>
          <div className="flex flex-col w-screen items-center w-900:w-4/5">
            <img src="/schedule-fall-lg.jpg" className="w-900:hidden" alt="schema" style={{ width: "100%", height: "auto" }} />
            <img src="/schedule-fall-xl.jpg" className="hidden w-900:block" alt="schema" style={{ width: "100%", height: "auto" }} />
            <a href="/schedule-fall-lg.jpg" download="kampsportstadion-schema.jpg" className="text-lg w-900:text-2xl underline">Ladda ner schema</a>
          </div>
        </div>
        <div className="mt-40">
          <ImageGrid srcs={['./grid_image1.jpg', './grid_image2.jpg', './grid_image3.jpg', './grid_image4.jpg']} />
        </div>
      </div>
    </main>
  )
}