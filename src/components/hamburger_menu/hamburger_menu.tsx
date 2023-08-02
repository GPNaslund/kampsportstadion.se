'use client'
import './hamburger_style.component.css'

interface HamburgerMenuProps {
  isOpen: boolean;
  forWhiteBg: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, forWhiteBg }) => {
  return (
      <div className="col-start-4 col-span-1 flex justify-center items-center">
        {/* Hamburger menu icon for smaller screns */}
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
          <span className={`hamburger-line ${forWhiteBg ? 'bg-white' : 'bg-black'}`}></span>
          <span className={`hamburger-line ${forWhiteBg ? 'bg-white' : 'bg-black'}`}></span>
          <span className={`hamburger-line ${forWhiteBg ? 'bg-white' : 'bg-black'}`}></span>
        </div>
      </div>
  )
};

export default HamburgerMenu;