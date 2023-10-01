import "./Popup.css";
import closeBtn from "../../image/popup-close-btn.svg";

function Popup(props) {
  const {isOpen, onClose} = props;

  return (
    isOpen ? (<div className="popup">
    <div className="popup__block">
      <h2 className="popup__title">Напишите нам</h2>
      <button onClick={onClose} type="button" className="popup__close-btn">
        <img src={closeBtn} alt="close-button" width={21} height={21} />
      </button>
      <form className="popup__form">
        <div className="popup__info">
          <label className="popup__label">
            Ваше имя:<br></br>
            <input
              className="popup__input"
              type="text"
              placeholder="Имя Фамилия"
            />
          </label>
          <label className="popup__label">
            Ваш email:<br></br>
            <input
              className="popup__input"
              type="email"
              placeholder="email@example.com "
            />
          </label>
        </div>
        <label className="popup__label popup__label-area">
          Текст письма:
        </label>
        <textarea
          className="popup__input popup__input-area"
          rows="5"
          cols={90}
          type="text"
          placeholder="В свободной форме"
        />
        <button type="button" className="popup__form-btn">
          Отправить
        </button>
      </form>
    </div>
  </div> ): ""
    
  );
}

export default Popup;
