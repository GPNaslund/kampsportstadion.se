import MobileNavbar from "@/components/navbar/mobile_navbar";
import BlackButton from "@/components/black_button/black_button";
import ImageGrid from "@/components/image_grid/image_grid";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-white text-gray-800">
      <MobileNavbar forWhiteBg={false} />
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center relative">
          {/* This container now lets the image define its height, fixing the crop issue */}
          <div className="w-full relative flex flex-col items-center justify-center">
            {/* Responsive background images using original paths and styling */}
            <img
              alt="Thaiboxing background"
              src="/bg-sm.jpg"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="w-625:hidden"
            />
            <img
              alt="Thaiboxing background"
              src="/bg-md.jpg"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="hidden w-625:block w-900:hidden"
            />
            <img
              alt="Thaiboxing background"
              src="/bg-lg.jpg"
               style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="hidden w-900:block"
            />
            {/* Overlays for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-white to-transparent"></div>

            {/* Centered hero content container - Adjusted to be higher */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-32 md:pt-40 px-4 text-center">


              <div>
                <h2 className="text-white text-4xl md:text-7xl font-bold">
                  KAMPSPORT <br />
                  FÖR ALLA
                </h2>
                <p className="text-white text-lg md:text-2xl px-4 md:px-12 mt-4 max-w-3xl mx-auto">
                  Välkommen till DIF Kampsportsförening. Vi är en ideell
                  idrottsförening som brinner för kampsport för både stora och
                  små, erfarna som nybörjare.
                </p>
              </div>


              {/* --- START: Restyled Free Trial Announcement Box --- */}
              <div className="bg-black bg-opacity-50 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl mt-8 w-11/12 max-w-md border border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold">
                  Prova på Gratis!
                </h3>
                <p className="text-base md:text-lg mt-1 text-gray-200">
                  Just nu bjuder vi på en gratis provträning. Maila oss för att boka din plats!
                </p>
                <div>
                  <a
                    href="mailto:info@kampsportstadion.se"
                    className="font-semibold underline hover:text-white mt-2 inline-block"
                  >
                    info@kampsportstadion.se
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.kampsportstadion.se/schema"
                    className="font-semibold underline hover:text-white mt-2 inline-block"
                  >
                    Se schema här
                  </a>
                </div>
              </div>
              {/* --- END: Restyled Free Trial Announcement Box --- */}
            </div>
          </div>
        </div>

        {/* Main content section */}
        <div className="w-full flex flex-col px-6 md:px-10 items-center md:px-40 mt-20">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            Kampsport på Stockholm Stadion
          </h2>
          <p className="text-center text-lg md:text-2xl mt-4 max-w-4xl">
            I fina lokaler inne på Stockholm Stadion hittar du Kampsportstadion.
            Med en 400 kvm stor sal och fantastiska tränare kan vi erbjuda
            kampsport för alla. Som medlem hos oss kan du köra alla pass på
            schemat och du har fri tillgång till gymmet 06.30-20.00 vardagar och
            09.00-13.00 på helgen.
          </p>
          <p className="text-center text-lg md:text-2xl mt-2 max-w-4xl">
            Vi har klasser i{" "}
            <span className="font-bold">
              Kampsportfys, Cirkelträning, Muay Thai, MMA, Barnträning, Yoga och
              BJJ.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <BlackButton text="Se alla klasser" href="/klasser" />
            <BlackButton text="Medlemskap" href="/medlemskap" />
            <BlackButton text="Online coachning" href="https://kampsportstadion-online.se/"/>
          </div>
        </div>

        {/* Schedule Section */}
        <div id="schema" className="w-full flex flex-col items-center mt-20 md:mt-40 px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            Schema
          </h2>
          <p className="px-5 text-center text-lg md:text-xl">
            Gäller från v38
          </p>
          <div className="flex flex-col w-full items-center mt-6">
            {/* Adjusted schema image width to be larger */}
            <img
              src="/schema-ht25-2.jpeg"
              className="w-full md:w-11/12 lg:w-4/5 h-auto"
              alt="schema"
            />
            <a
              href="/schema-ht25-2.jpeg"
              download
              className="text-lg md:text-xl underline mt-4"
            >
              Ladda ner schema
            </a>
            <p className="px-5 text-center text-lg md:text-xl mt-4">
              Inga pass under skollov!
            </p>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="w-full mt-20 md:mt-40">
          <ImageGrid
            srcs={[
              "./grid_image1.jpg",
              "./grid_image2.jpg",
              "./grid_image3.jpg",
              "./grid_image4.jpg",
            ]}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
