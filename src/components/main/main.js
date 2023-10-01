import Header from "../header/Header";
import "../container/container.css";
import Slide from "../slide/Slide";
import Services from "../services/Services";
import Info from "../info/Info";
import Partners from "../partners/Partners";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";
import Popup from "../popup/Popup";

function Main(props) {
  return (
    <>
      <Header />
      <main>
        <Slide />
        <Services />
        <Info />
        <Partners />
        <Contacts onClick={props.onOpen} />
      </main>
      <Footer />
      <Popup isOpen={props.isOpen} onClose={props.onClose}/>
    </>
  );
}

export default Main;
