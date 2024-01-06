import BiographyCard from "./BiographyCard";
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div className="section-descriere">
      <BiographyCard />
      <BiographyCard />
      <img className="image-5-icon" alt="" src="/image-5@2x.png" />
    </div>
  );
};

export default CardContainer;
