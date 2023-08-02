'use client'

import Image from 'next/image';
import InstagramLink from '../util/instagram_link';
import FacebookLink from '../util/facebook_link';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuLinks() {
  const pathname = usePathname()
  
  const links = [
    { href: "/", text: "Hem" },
    { href: "/klasser", text: "Klasser" },
    { href: "/schema", text: "Schema" },
    { href: "/medlemskap", text: "Medlemskap" },
    { href: "/pt", text: "Personlig träning"},
    { href: "/foretag", text: "Företag"},
    { href: "/sociala-projekt", text: "Sociala Projekt" },
    { href: "/kontakt", text: "Kontakt" },
  ]


  
  return (
    <ul className="text-center text-3xl">
      <>
        {links.map((link, index) => {
          const isActive = pathname === link.href
          if (isActive) {
            return (
              <li className={index !== 0 ? "mt-5" : ""} key={link.href}>
              <p 
                className='text-gray-500 user-select-none'
              >
                {link.text}
              </p>
            </li>
            )
          } else {
            return (
              <li className={index !== 0 ? "mt-5" : ""} key={link.href}>
                <Link 
                  className={isActive ? 'text-blue-500' : 'text-black'}
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
        )}
        })}
      </>
      <li className="mt-32">
        <div className="grid grid-cols-3 justify-items-center">
          <a href={InstagramLink('kampsportstadion')} target="_blank">
            <Image 
              src="/instagram.svg"
              alt="instagram icon"
              width={50}
              height={50}
            />
          </a>
          <a href={FacebookLink('kampsportstadion')} target="_blank">
            <Image 
              src="/facebook.svg"
              alt="facebook icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://goo.gl/maps/5ipnHxJKXbrAHLBw6" target="_blank">
            <Image 
              src="/googlemaps.svg"
              alt="google maps icon"
              width={50}
              height={50}
            />
          </a>
        </div>
      </li>
      <li className="text-sm flex flex-col items-center mt-5">
        <a href="mailto:info@proaktividrottscenter.se">info@kampsportstadion.se</a>
        <a href="tel:0812137337">08-12137337</a>
        <p>Lidingövägen 1, 11433 Stockholm</p>
      </li>
    </ul>
  )  
}