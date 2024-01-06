import "./BiographyCard.css";

const BiographyCard = () => {
  return (
    <div className="text-left1">
      <div className="feature42">
        <img
          className="checkmark-circle-outline-2-icon1"
          alt=""
          src="/checkmarkcircleoutline-2@2x.png"
        />
        <div className="feature43">
          <span className="long-burning1">Long burning:</span>
          <span> No more waste. Created for last long.</span>
        </div>
      </div>
      <div className="feature32">
        <img
          className="checkmark-circle-outline-2-icon1"
          alt=""
          src="/checkmarkcircleoutline-2@2x.png"
        />
        <div className="feature43">
          <span className="long-burning1">{`Handmade: `}</span>
          <span>All candles are craftly made with love.</span>
        </div>
      </div>
      <div className="feature22">
        <img
          className="checkmark-circle-outline-2-icon1"
          alt=""
          src="/checkmarkcircleoutline-2@2x.png"
        />
        <div className="feature43">
          <span className="long-burning1">{`Hyphoallergenic: `}</span>
          <span>{`100% natural, human friendly ingredients `}</span>
        </div>
      </div>
      <div className="feature12">
        <img
          className="checkmark-circle-outline-2-icon1"
          alt=""
          src="/checkmarkcircleoutline-2@2x.png"
        />
        <div className="feature43">
          <span className="long-burning1">Eco-sustainable:</span>
          <span>All recyclable materials, 0% CO2 emissions</span>
        </div>
      </div>
      <div className="subline">Made for your home and for your wellness</div>
      <div className="h2-title1">Biografie</div>
    </div>
  );
};

export default BiographyCard;
