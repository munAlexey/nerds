import "./Info.css";
import nerds from "../../image/nerds.svg";

function Info(props) {
  return (
    <section className="info container">
      <div className="info__text-block">
        <h2 className="info__text-title">Мы — маленькая, но гордая дизайн-студия из Краснодара.</h2>
        <p className="info__text-subtitle">
          Исповедуем принципы минимализма и чистоты. Ставим математический
          расчетпревыше креатива. Работаем не покладая рук, как роботы.
        </p>
        <h3 className="info__title-list">Выполняем заказы на разработку:</h3>
        <ul className="info__list">
          <li className="info__item">Веб-сайтов любой сложности</li>
          <li className="info__item">Мобильных приложений для iOS и Android</li>
          <li className="info__item">Слайдшоу и видео для корпоративных презентаций</li>
        </ul>
      </div>
      <div className="info__statistic-block">
        <img src={nerds} alt="Nerds" width="360" height="208" />
        <p className="info__statistic-title">с 2004 года Любим точность во всем:</p>
        <ul className="info__statistic-list">
          <li className="info__statistic-item">
            <p className="info__statistic-titles">146</p>
            <p className="info__statistic-subtitle">Уровень самоотдачи</p>
          </li>
          <li className="info__statistic-item">
            <p className="info__statistic-titles">100</p>
            <p className="info__statistic-subtitle">Соблюдение сроков</p>
          </li>
          <li className="info__statistic-item">
            <p className="info__statistic-titles">50</p>
            <p className="info__statistic-subtitle">Минимальная предоплата</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Info;
