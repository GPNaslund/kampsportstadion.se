import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuLinks() {
  const pathname = usePathname()

  const links = [
    { href: "/", text: "Hem" },
    { href: "/klasser", text: "Klasser" },
    { href: "/schema", text: "Schema" },
    { href: "/medlemskap", text: "Medlemskap" },
    { href: "/pt", text: "Personlig träning" },
    { href: "/foretag", text: "Företag" },
    { href: "/sociala-projekt", text: "Sociala Projekt" },
    { href: "/kontakt", text: "Kontakt" },
  ]



  return (
    <div className="overflow-y-auto h-full w-full mt-52 h-500:mt-10">
      <ul className="text-center text-2xl">
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
              )
            }
          })}
        </>
      </ul>
    </div>
  )
}