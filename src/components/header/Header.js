import { Link } from "react-router-dom";
import logo from "../../image/logo.svg";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header__block container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="nerds" />
        </Link>
        <ul className="header__list">
          <li className="header__item">
            <Link className="header__link" to="">
              Студия
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="">
              Клиенты
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/store">
              Магазин
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="">
              Контакты
            </Link>
          </li>
        </ul>
        <Link to="/basket" className="header__basket">
          Корзина
        </Link>
      </div>
    </header>
  );
}

export default Header;
