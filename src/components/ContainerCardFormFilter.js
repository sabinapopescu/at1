import { useMemo } from "react";
import "./ContainerCardFormFilter.css";

const ContainerCardFormFilter = ({
  dimensions,
  carDimensions,
  feature2Top,
  feature2Left,
}) => {
  const sectionDescriere1Style = useMemo(() => {
    return {
      top: feature2Top,
      left: feature2Left,
    };
  }, [feature2Top, feature2Left]);

  return (
    <div className="section-descriere3" style={sectionDescriere1Style}>
      <div className="section-bg3" />
      <div className="text-left4">
        <div className="feature48">
          <div className="feature49">
            <span className="long-burning4">Long burning:</span>
            <span> No more waste. Created for last long.</span>
          </div>
          <img
            className="checkmark-circle-outline-2-icon4"
            alt=""
            src="/checkmarkcircleoutline-2@2x.png"
          />
        </div>
        <div className="feature38">
          <div className="feature49">
            <span className="long-burning4">{`Handmade: `}</span>
            <span>All candles are craftly made with love.</span>
          </div>
          <img
            className="checkmark-circle-outline-1-icon12"
            alt=""
            src="/checkmarkcircleoutline-1@2x.png"
          />
        </div>
        <div className="feature28">
          <div className="feature49">
            <span className="long-burning4">{`Hyphoallergenic: `}</span>
            <span>{`100% natural, human friendly ingredients `}</span>
          </div>
          <img
            className="checkmark-circle-outline-1-icon12"
            alt=""
            src={dimensions}
          />
        </div>
        <div className="feature18">
          <div className="feature49">
            <span className="long-burning4">Eco-sustainable:</span>
            <span>All recyclable materials, 0% CO2 emissions</span>
          </div>
          <img
            className="checkmark-circle-outline-2-icon4"
            alt=""
            src="/checkmarkcircleoutline-1@2x.png"
          />
        </div>
        <div className="subline2">Made for your home and for your wellness</div>
        <div className="h2-title4">Activitate...</div>
      </div>
      <div className="text-left5">
        <div className="feature410">
          <div className="feature49">
            <span className="long-burning4">Long burning:</span>
            <span> No more waste. Created for last long.</span>
          </div>
          <img
            className="checkmark-circle-outline-2-icon4"
            alt=""
            src="/checkmarkcircleoutline-2@2x.png"
          />
        </div>
        <div className="feature310">
          <div className="feature49">
            <span className="long-burning4">{`Handmade: `}</span>
            <span>All candles are craftly made with love.</span>
          </div>
          <img
            className="checkmark-circle-outline-1-icon12"
            alt=""
            src="/checkmarkcircleoutline-1@2x.png"
          />
        </div>
        <div className="feature210">
          <div className="feature49">
            <span className="long-burning4">{`Hyphoallergenic: `}</span>
            <span>{`100% natural, human friendly ingredients `}</span>
          </div>
          <img
            className="checkmark-circle-outline-1-icon12"
            alt=""
            src={carDimensions}
          />
        </div>
        <div className="feature110">
          <div className="feature49">
            <span className="long-burning4">Eco-sustainable:</span>
            <span>All recyclable materials, 0% CO2 emissions</span>
          </div>
          <img
            className="checkmark-circle-outline-2-icon4"
            alt=""
            src="/checkmarkcircleoutline-1@2x.png"
          />
        </div>
        <div className="subline3">Made for your home and for your wellness</div>
      </div>
      <img className="image-6-icon" alt="" src="/image-6@2x.png" />
    </div>
  );
};

export default ContainerCardFormFilter;
