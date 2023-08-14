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
    <div className={`${isOpen ? 'translate-y-0' : '-translate-y-150'} fixed top-0 left-0 w-screen h-screen bg-white transition-all duration-500 ease-in-out transform flex flex-col items-center justify-center overflow-y-auto`}>
      <div className="absolute -top-5 left-2 w-900:flex hidden">
      <a href="/" className='mt-3 -ml-3'>
          <img
            src="/dif.png"
            alt="Kampsportstadion logo"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </a>
        <a href="/" className="-mt-2">
          <img
            src="/ks-logo-black.svg"
            alt="Kampsportstadion logo"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
        </a>
      </div>
      <div className="absolute top-0 left-0 w-900:hidden flex">
      <a href="/" className="">
          <img
            src='/dif.png'
            alt="Kampsportstadion logo"
            style={{
              width: "60px",
              height: "60px",
            }}
          />
        </a>
        <a href="/" className="relative -top-4 left-2">
          <img
            src="/ks-logo-black.svg"
            alt="Kampsportstadion logo"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </a>
      </div>
      <div className="flex flex-col items-center gap-8 py-40">
      <MenuLinks />
      <ContactInfo />
      </div>
    </div>
  )
}