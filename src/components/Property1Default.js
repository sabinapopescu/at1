import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  button,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  buttonTextAlign,
  buttonFlex,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      width: property1DefaultWidth,
      height: property1DefaultHeight,
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      textAlign: buttonTextAlign,
      flex: buttonFlex,
    };
  }, [buttonTextAlign, buttonFlex]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="button" style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default Property1Default;
