import { ReactComponent as RocketIcon } from '../../assets/svg/rocket.svg';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <RocketIcon className="footer__icon" />
      <span>Exciting space adventure!</span>
    </footer>
  );
}

export default Footer;
