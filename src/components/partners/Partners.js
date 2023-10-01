import html from "../../image/html-academy.svg";
import borodinski from "../../image/borodinski.svg";
import pink from "../../image/pink.svg";
import mishka from "../../image/mishka.svg";
import "./Partners.css";

function Partners(props) {
  return (
    <section className="partners container">
      <ul className="partners__list">
        <li className="partners__item">
          <a className="partners__link" href="https://htmlacademy.ru/" target="_blank" rel="noreferrer">
            <img src={html} alt="HTML_Academy" />
          </a>
        </li>
        <li className="partners__item partners__borodinski">
          <a className="partners__link" href="http://barbershop-borodinski.webflow.io/" target="_blank" rel="noreferrer">
            <img src={borodinski} alt="BORODINSKI" />
          </a>
        </li>
        <li className="partners__item partners__pink">
          <a className="partners__link" href="https://www.pinkspage.com/" target="_blank" rel="noreferrer">
            <img src={pink} alt="PINK" />
          </a>
        </li>
        <li className="partners__item">
          <a className="partners__link" href="https://mishkanyc.com/" target="_blank" rel="noreferrer">
            <img src={mishka} alt="MISHKA" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Partners;
