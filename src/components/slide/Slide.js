import bg from "../../image/slide-1.jpg";
import "./Slide.css";

function Slide(props) {
  return (
    <section className="slider">
      <div className="slide container">
        <div className="slide__info">
          <h2 className="slide__title">Долго, дорого, скрупулезно.</h2>
          <p className="slide__subtitle">
            Математически выверенный дизайн для вашего сайта или мобильного
            приложения.
          </p>
          <button type="button" className="slide__button">
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>
        <img
          className="slide__bg-img"
          src={bg}
          alt="slide-1"
          width="760"
          height="431"
        />
      </div>
    </section>
  );
}

export default Slide;
