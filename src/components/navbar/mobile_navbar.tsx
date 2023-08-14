'use client'

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
        <div className="flex">
          <a href="/" className="block w-900:hidden relative bottom-2 right-2">
            <img
              src='/dif.png'
              alt="Kampsportstadion logo"
              style={{
                width: "60px",
                height: "60px",
              }}
            />
          </a>
          <a href="/" className="hidden w-900:block relative bottom-2 right-2">
            <img
              src='/dif.png'
              alt="Kampsportstadion logo"
              style={{
                width: "100px",
                height: "100px",
              }}
            />
          </a>
          <a href="/" className="block w-900:hidden relative bottom-6 ">
            <img
              src={imgSrc}
              alt="Kampsportstadion logo"
              style={{
                width: "100px",
                height: "100px",
              }}
            />
          </a>
          <a href="/" className="hidden w-900:block relative bottom-8 ">
            <img
              src={imgSrc}
              alt="Kampsportstadion logo"
              style={{
                width: "150px",
                height: "150px",
              }}
            />
          </a>
        </div>
        
        
        <MenuContext.Provider value={{ isOpen, setIsOpen }}>
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