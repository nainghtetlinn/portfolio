import { useEffect, useRef } from 'react';

import ToggleSidemenu from '../toggle/ToggleSidemenu';
import Sidemenu from '../sidemenu/Sidemenu';
import Navlinks from './Navlinks';

let oldValue = 0;

const Header = () => {
  const header = useRef();

  useEffect(() => {
    const checkScroll = e => {
      let newValue = window.pageYOffset;
      if (oldValue < newValue) {
        header.current.classList.add('down');
      } else if (oldValue > newValue) {
        header.current.classList.remove('down');
      }
      oldValue = newValue;
    };
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <header
      ref={header}
      className="fixed inset-x-0 top-0 z-10 bg-skin-secondary shadow transition-transform duration-300 dark:bg-dark-secondary"
    >
      <nav className="container mx-auto px-4 py-3 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a href="#">
            <h2 className="text-skin-primary dark:text-dark-primary">Naing</h2>
          </a>
          <div className="relative z-30">
            <ToggleSidemenu />
          </div>
        </div>

        <div className="hidden md:block">
          <Navlinks />
        </div>
      </nav>
      <Sidemenu />
    </header>
  );
};

export default Header;
