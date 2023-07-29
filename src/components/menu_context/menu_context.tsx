import { createContext, Dispatch, SetStateAction } from 'react'

interface MenuContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextProps>({
  isOpen: false,
  setIsOpen: () => {

  }
});

export default MenuContext;