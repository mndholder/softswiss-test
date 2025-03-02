import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../assets/svg/menu-close.svg';

import './MenuButton.scss';

function MenuButton({ onClick, isOpen = false }) {
  return (
    <button onClick={e => onClick?.(e)} className="menu-button">
      {isOpen ? <MenuCloseIcon /> : <MenuIcon />}
    </button>
  );
}

export default MenuButton;
