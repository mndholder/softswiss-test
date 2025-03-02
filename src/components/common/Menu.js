import './Menu.scss';

function Menu() {
  return (
    <aside className="main-application-menu">
      <ul className="main-application-menu__links">
        <li>
          <a href="/" className="main-application-menu__link">Home</a>
        </li>
        <li>
          <a href="/" className="main-application-menu__link">Products</a>
        </li>
        <li>
          <a href="/" className="main-application-menu__link">Cart</a>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
