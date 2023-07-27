import IntroImage from "../intro_image/intro_image";
import MobileNavbar from "../navbar/mobile_navbar";

export default function HomePage() {
  return (
    <div className="w-full">
      <MobileNavbar />
      <IntroImage />
    </div>
  )
}