import { Button } from "@mui/material";
import BlogContainer from "../components/BlogContainer";
import ContainerFrame from "../components/ContainerFrame";
import ActivityContainer from "../components/ActivityContainer";
import ChildContainer from "../components/ChildContainer";
import CardContainer1 from "../components/CardContainer1";
import "./Acasa.css";

const Acasa = () => {
  return (
    <div className="acasa">
      <footer className="footerdesktop">
        <div className="footer-widgets">
          <div className="footer-bg" />
          <div className="col3">
            <div className="item-3">{`Termeni & Condiții`}</div>
            <div className="item-2">Politicile de Confidențialitate</div>
            <div className="item-1">Contactează-ne</div>
            <div className="title-col3">Informații</div>
          </div>
          <div className="col1">
            <div className="item-31">Activități</div>
            <div className="item-32">Blog</div>
            <div className="item-21">Resurse</div>
            <div className="item-11">Despre</div>
            <div className="title-col1">Pagini</div>
          </div>
          <div className="description">
            Your natural candle made for your home and for your wellness.
          </div>
          <div className="separator" />
        </div>
        <div className="logo-webfooter">
          <div className="logo-webfooter1">
            <h1 className="contacte">Contacte</h1>
          </div>
          <img
            className="logo-webfooter-child"
            alt=""
            src="/group-481771@2x.png"
          />
        </div>
        <div className="frame-parent">
          <Button className="frame-child" color="success" variant="contained">
            Subscribe Now
          </Button>
          <Button className="frame-item" color="success" variant="outlined">
            Enter your email
          </Button>
        </div>
      </footer>
      <BlogContainer />
      <ContainerFrame />
      <ActivityContainer />
      <ChildContainer />
      <CardContainer1 />
    </div>
  );
};

export default Acasa;
