import { useState } from 'react';

import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg';
import MenuButton from '../common/MenuButton';
import Menu from '../common/Menu';

import './Header.scss';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = (value) => {
    document.documentElement.classList.toggle('no-scroll', value);
    setIsMenuOpen(value);
  };

  return (
    <header className="application-header">
      <a href="/" className="application-header__logo">
        <LogoIcon />
      </a>
      <div className="application-header__links">
        <a href="/" className="application-header__link">Home</a>
        <a href="/" className="application-header__link">Products</a>
        <a href="/" className="application-header__link">
          <CartIcon />
        </a>
      </div>
      <div className="application-header__menu">
        <MenuButton onClick={() => handleOpenMenu(!isMenuOpen)} isOpen={isMenuOpen} />
        {isMenuOpen && <Menu />}
      </div>
    </header>
  );
}

export default App;
