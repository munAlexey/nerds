import "./Footer.css";
import vk from "../../image/vk.svg";
import fb from "../../image/fb.svg";
import insta from "../../image/insta.svg";

function Main(props) {
  return (
    <footer className="footer container">
      <ul className="footer__list">
        <li className="foooter__item">
          <a href="https://vk.com/" className="footer__link" target="_blank" rel="noreferrer">
            <img src={vk} alt="vk" width="26" height="15" />
          </a>
        </li>
        <li className="foooter__item">
          <a href="https://ru-ru.facebook.com/" className="footer__link" target="_blank" rel="noreferrer">
            <img src={fb} alt="facebook" width="12" height="22" />
          </a>
        </li>
        <li className="foooter__item">
          <a href="https://www.instagram.com/" className="footer__link" target="_blank" rel="noreferrer">
            <img src={insta} alt="instagram" width="21" height="21" />
          </a>
        </li>
      </ul>
      <div>
        <h2 className="footer__title">Давайте дружить, это выгодно!</h2>
        <p className="footer__subtitle">Скидка 10% для друзей из социальных сетей.</p>
      </div>
    </footer>
  );
}

export default Main;
