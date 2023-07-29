import Image from 'next/image';
import InstagramLink from '../util/instagram_link';
import FacebookLink from '../util/facebook_link';
import Link from 'next/link'

export default function MenuLinks() {
  return (
    <ul className="text-center text-3xl">
      <li><Link href="/">Hem</Link></li>
      <li className="mt-5"><Link href="/klasser">Klasser</Link></li>
      <li className="mt-5">Schema</li>
      <li className="mt-5">Om oss</li>
      <li className="mt-5">Kontakt</li>
      <li className="mt-32">
          <div className="grid grid-cols-3 justify-items-center">
            <a href={InstagramLink('proaktividrottscenter')} target="_blank">
              <Image 
                src="/instagram.svg"
                alt="instagram icon"
                width={50}
                height={50}
              />
            </a>
            <a href={FacebookLink('proaktividrottscenter')} target="_blank">
            <Image 
              src="/facebook.svg"
              alt="facebook icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://goo.gl/maps/BVbHc4pMbpoWM4eq6" target="_blank">
            <Image 
              src="/googlemaps.svg"
              alt="google maps icon"
              width={50}
              height={50}
            />
          </a>
          </div>
        </li>
        <li className=" text-sm flex flex-col items-center">
          <a href="mailto:info@proaktividrottscenter.se">info@kampsportstadion.se</a>
          <a href="tel:0812137337">08-12137337</a>
          <p>Lidingövägen 1, 11433 Stockholm</p>
        </li>
    </ul>
  )
}