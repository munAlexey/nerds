import "./Services.css";
import item1 from "../../image/illustration-1 1.png";
import item2 from "../../image/illustration-2 1.jpg";
import item3 from "../../image/illustration-3 1.jpg";

function Services(props) {
  return (
    <section className="services container">
      <ul className="services__list">
        <li className="services__item">
          <img src={item1} alt="Веб-сайты" width="300" height="146" />
          <h2 className="services__title">Веб-сайты</h2>
          <p className="services__subtitle">
            Мир никогда не будет прежним после того как увидит ваш сайт!
          </p>
          <button type="button" className="services__button">
            Заказать
          </button>
        </li>
        <li className="services__item">
          <img src={item2} alt="Приложения" width="300" height="146" />
          <h2 className="services__title">Приложения</h2>
          <p className="services__subtitle">
            Покорите топ-10 приложений в AppStore и Google Play
          </p>
          <button type="button" className="services__button services__button-app">
            Заказать
          </button>
        </li>
        <li className="services__item">
          <img src={item3} alt="Презентации" width="300" height="146" />
          <h2 className="services__title">Презентации</h2>
          <p className="services__subtitle">
            Вы даже не подозреваете, насколько вы изумительны!
          </p>
          <button type="button" className="services__button services__button-presentation">
            Заказать
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Services;
