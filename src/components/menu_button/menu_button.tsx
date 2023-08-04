'use client'

import HamburgerMenu from "../hamburger_menu/hamburger_menu";
import { useContext } from 'react';
import MenuContext from "../menu_context/menu_context";

interface MenuButtonProps {
  forWhiteBg: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ forWhiteBg }) => {
  const {isOpen, setIsOpen} = useContext(MenuContext);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div 
      className={`w-40 w-900:w-60 h-12 w-900:h-16 z-10 rounded-full ${forWhiteBg ? 'bg-black' : 'bg-white'} flex flex-row items-center justify-center gap-4 justify-self-end cursor-pointer`}
      onClick={handleClick}
      >
      <HamburgerMenu
        isOpen={isOpen}
        forWhiteBg={forWhiteBg}
      />
      <div className={`text-xl w-900:text-2xl ${forWhiteBg ? 'text-white' : 'text-black'}`}>{isOpen ? 'Stäng' : 'Meny'}</div>
    </div>
  )
}

export default MenuButton;