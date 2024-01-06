import { Button } from "@mui/material";
import Property1Default1 from "./Property1Default1";
import "./CardContainer1.css";

const CardContainer1 = () => {
  return (
    <div className="despre3">
      <div className="section-bg" />
      <img className="image-icon1" alt="" src="/image@2x.png" />
      <Property1Default1
        property1DefaultBackgroundColor="unset"
        property1DefaultFlexShrink="unset"
        property1DefaultCursor="unset"
        property1DefaultBorderRadius="unset"
        property1DefaultWidth="unset"
        property1DefaultOverflow="unset"
        property1DefaultDisplay="unset"
        property1DefaultFlexDirection="unset"
        property1DefaultAlignItems="unset"
        property1DefaultJustifyContent="unset"
        property1DefaultPadding="unset"
        property1DefaultBoxSizing="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="33.81rem"
        property1DefaultLeft="10.25rem"
      />
      <div className="text-left3">
        <div className="feature46">
          <div className="feature47">
            <span className="long-burning3">Long burning:</span>
            <span> No more waste. Created for last long.</span>
          </div>
          <img
            className="checkmark-circle-outline-2-icon3"
            alt=""
            src="/checkmarkcircleoutline-2@2x.png"
          />
        </div>
        <div className="feature36">
          <div className="feature47">
            <span className="long-burning3">{`Handmade: `}</span>
            <span>All candles are craftly made with love.</span>
          </div>
          <img
            className="checkmark-circle-outline-1-icon9"
            alt=""
            src="/checkmarkcircleoutline-2@2x.png"
          />
        </div>
        <div className="feature26">
          <div className="feature47">
            <span className="long-burning3">{`Hyphoallergenic: `}</span>
            <span>{`100% natural, human friendly ingredients `}</span>
          </div>
          <img
            className="checkmark-circle-outline-1-icon9"
            alt=""
            src="/checkmarkcircleoutline-2@2x.png"
          />
        </div>
        <div className="feature16">
          <div className="feature47">
            <span className="long-burning3">Eco-sustainable:</span>
            <span>All recyclable materials, 0% CO2 emissions</span>
          </div>
          <img
            className="checkmark-circle-outline-2-icon3"
            alt=""
            src="/checkmarkcircleoutline-2@2x.png"
          />
        </div>
        <div className="subline1">Made for your home and for your wellness</div>
        <h1 className="h2-title3">Descrierea site-ului, Obiective</h1>
      </div>
    </div>
  );
};

export default CardContainer1;
