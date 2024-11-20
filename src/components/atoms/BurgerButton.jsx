import { useState } from 'react';
import menuBurger from '../../assets/burger-menu-white.svg'

const BurgerButton = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
      };


    return (
        <button className="flex lg:hidden" onClick={toggleMenu}>
                        <img src={menuBurger} className="h-12" alt="menu"/>
        </button>
    )
}

export default BurgerButton