import { useMemo } from "react";
import "./Property1Default1.css";

const Property1Default1 = ({
  button,
  property1DefaultBackgroundColor,
  property1DefaultFlexShrink,
  property1DefaultCursor,
  property1DefaultBorderRadius,
  property1DefaultWidth,
  property1DefaultOverflow,
  property1DefaultDisplay,
  property1DefaultFlexDirection,
  property1DefaultAlignItems,
  property1DefaultJustifyContent,
  property1DefaultPadding,
  property1DefaultBoxSizing,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  buttonLineHeight,
  onButtonRoundedSmallClick,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
      flexShrink: property1DefaultFlexShrink,
      cursor: property1DefaultCursor,
      borderRadius: property1DefaultBorderRadius,
      width: property1DefaultWidth,
      overflow: property1DefaultOverflow,
      display: property1DefaultDisplay,
      flexDirection: property1DefaultFlexDirection,
      alignItems: property1DefaultAlignItems,
      justifyContent: property1DefaultJustifyContent,
      padding: property1DefaultPadding,
      boxSizing: property1DefaultBoxSizing,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultBackgroundColor,
    property1DefaultFlexShrink,
    property1DefaultCursor,
    property1DefaultBorderRadius,
    property1DefaultWidth,
    property1DefaultOverflow,
    property1DefaultDisplay,
    property1DefaultFlexDirection,
    property1DefaultAlignItems,
    property1DefaultJustifyContent,
    property1DefaultPadding,
    property1DefaultBoxSizing,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const button1Style = useMemo(() => {
    return {
      lineHeight: buttonLineHeight,
    };
  }, [buttonLineHeight]);

  return (
    <div
      className="property-1default1"
      style={property1Default1Style}
      onClick={onButtonRoundedSmallClick}
    >
      <div className="button1" style={button1Style}>
        {button}
      </div>
    </div>
  );
};

export default Property1Default1;
