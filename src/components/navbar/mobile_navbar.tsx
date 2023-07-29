'use client'

import Image from 'next/image'
import MenuButton from '../menu_button/menu_button'
import { useState } from 'react'
import MenuContext from '../menu_context/menu_context';
import MobileMenu from '../mobile_menu/mobile_menu';

interface MobileNavbarProps {
  forWhiteBg: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ forWhiteBg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imgSrc = forWhiteBg ? '/ks-logo-black.svg' : '/ks-logo.svg';
  return (
    <nav>
      <div className="z-20 w-full absolute top-0 left-0 p-2 flex flex-row place-content-between">
        <Image
          src={imgSrc}
          alt="Kampsportstadion logo"
          width={125}
          height={125}
          quality={100}
        />
        <MenuContext.Provider value={{isOpen, setIsOpen }}>
          <MenuButton
            forWhiteBg={forWhiteBg}
          />
          <MobileMenu />
        </MenuContext.Provider>
        
      </div>
    </nav>
  )
}

export default MobileNavbar;