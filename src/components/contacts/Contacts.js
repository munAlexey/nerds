import "./Contacts.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import dot from "../../image/map-marker.png";

function Contacts(props) {
  return (
    <section className="contacts">
      <div className="contacts__info">
        <h2 className="contacts__title">NЁRDS DESIGN STUDIO</h2>
        <p className="contacts__adress">191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8тел.</p>
        <p className="contacts__tel">+7 (812) 275-75-75</p>
        <button onClick={props.onClick} type="button" className="contacts__button">Напишите нам</button>
      </div>
      <YMaps>
        <div className="contacts__block">
          <Map
            className="contacts__map"
            defaultState={{ center: [59.938631, 30.323037], zoom: 16 }}
          >
            <Placemark geometry={[59.938631, 30.323037]} options={{
                   iconLayout: 'default#image',
                   iconImageHref: `${dot}`,
                   iconImageSize: [231, 190],
                 }} />
          </Map>
        </div>
      </YMaps>
    </section>
  );
}

export default Contacts;
