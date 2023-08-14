import { useContext, useEffect } from 'react';
import MenuContext from '../menu_context/menu_context';
import MenuLinks from '../menu_links/menu_links';
import ContactInfo from '../contact_info/contact_info';

export default function MobileMenu() {
  const { isOpen } = useContext(MenuContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  })
  return (
    <div className={`${isOpen ? 'translate-y-0' : '-translate-y-150'} fixed top-0 left-0 w-screen h-screen bg-white transition-all duration-500 ease-in-out transform flex flex-col items-center justify-center`}>
      <div className="absolute -top-5 left-2 w-900:block hidden">
        <a href="/">
          <img
            src="/ks-logo-black.svg"
            alt="Kampsportstadion logo"
            style={{
              width: "200px",
              height: "200px",
            }}
          />
        </a>
      </div>
      <div className="absolute -top-5 left-2 w-900:hidden block">
        <a href="/">
          <img
            src="/ks-logo-black.svg"
            alt="Kampsportstadion logo"
            style={{
              width: "125px",
              height: "125px",
            }}
          />
        </a>
      </div>
      <div className="flex flex-col items-center gap-10">
      <MenuLinks />
      <ContactInfo />
      </div>
    </div>
  )
}