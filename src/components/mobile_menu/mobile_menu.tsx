import Image from 'next/image'
import { useContext, useEffect } from 'react';
import MenuContext from '../menu_context/menu_context';
import MenuLinks from '../menu_links/menu_links';

export default function MobileMenu() {
  const { isOpen } = useContext(MenuContext);

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  })
  return (
    <div className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 w-screen h-screen bg-white transition-all duration-500 ease-in-out transform flex items-center justify-center`}>
      <div className="absolute top-0 left-0 p-2">
        <Image 
          src="/ks-logo-black.svg"
          alt="Kampsportstadion logo"
          width={125}
          height={125}
          quality={100}
        />
      </div>
      <MenuLinks />
    </div>
  )
}