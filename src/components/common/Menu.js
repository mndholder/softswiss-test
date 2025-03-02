import './Menu.scss';

function Menu() {
  return (
    <aside className="application-menu">
      <ul className="application-menu__links">
        <li>
          <a href="/" className="application-menu__link">Home</a>
        </li>
        <li>
          <a href="/" className="application-menu__link">Products</a>
        </li>
        <li>
          <a href="/" className="application-menu__link">Cart</a>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
