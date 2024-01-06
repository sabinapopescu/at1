import { useMemo } from "react";
import { Button } from "@mui/material";
import "./Footerdesktop.css";

const Footerdesktop = ({
  footerdesktopWidth,
  footerdesktopHeight,
  footerdesktopPosition,
  footerdesktopTop,
  footerdesktopLeft,
  footerWidgetsTop,
  footerWidgetsLeft,
  footerWidgetsWidth,
  footerWidgetsHeight,
  footerBgTop,
  footerBgLeft,
  footerBgWidth,
  footerBgHeight,
  col3Top,
  col3Left,
  col3Width,
  col3Height,
  item3Top,
  item3Left,
  item3LineHeight,
  item3Width,
  item3Height,
  item2Top,
  item2Left,
  item2LineHeight,
  item2Width,
  item2Height,
  item1Top,
  item1Left,
  item1LineHeight,
  item1Width,
  item1Height,
  titleCol3Top,
  titleCol3Left,
  titleCol3LineHeight,
  titleCol3Width,
  titleCol3Height,
  col1Top,
  col1Left,
  col1Width,
  col1Height,
  item3Top1,
  item3Left1,
  item3Width1,
  item3Height1,
  item3Top2,
  item3Left2,
  item3Width2,
  item3Height2,
  item2Top1,
  item2Left1,
  item2Width1,
  item2Height1,
  item1Top1,
  item1Left1,
  item1Width1,
  item1Height1,
  titleCol1Top,
  titleCol1Left,
  titleCol1LineHeight,
  titleCol1Width,
  titleCol1Height,
  descriptionTop,
  descriptionLeft,
  descriptionLineHeight,
  descriptionWidth,
  separatorTop,
  separatorLeft,
  separatorWidth,
  separatorHeight,
  logoWebfooterTop,
  logoWebfooterLeft,
  logoWebfooterWidth,
  logoWebfooterHeight,
  contacteTop,
  contacteLeft,
  contacteWidth,
  contacteHeight,
  groupIconTop,
  groupIconLeft,
  groupIconWidth,
  groupIconHeight,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivHeight,
  frameButtonTop,
  frameButtonLeft,
  frameButtonTop1,
  frameButtonLeft1,
}) => {
  const footerdesktopStyle = useMemo(() => {
    return {
      width: footerdesktopWidth,
      height: footerdesktopHeight,
      position: footerdesktopPosition,
      top: footerdesktopTop,
      left: footerdesktopLeft,
    };
  }, [
    footerdesktopWidth,
    footerdesktopHeight,
    footerdesktopPosition,
    footerdesktopTop,
    footerdesktopLeft,
  ]);

  const footerWidgetsStyle = useMemo(() => {
    return {
      top: footerWidgetsTop,
      left: footerWidgetsLeft,
      width: footerWidgetsWidth,
      height: footerWidgetsHeight,
    };
  }, [
    footerWidgetsTop,
    footerWidgetsLeft,
    footerWidgetsWidth,
    footerWidgetsHeight,
  ]);

  const footerBgStyle = useMemo(() => {
    return {
      top: footerBgTop,
      left: footerBgLeft,
      width: footerBgWidth,
      height: footerBgHeight,
    };
  }, [footerBgTop, footerBgLeft, footerBgWidth, footerBgHeight]);

  const col3Style = useMemo(() => {
    return {
      top: col3Top,
      left: col3Left,
      width: col3Width,
      height: col3Height,
    };
  }, [col3Top, col3Left, col3Width, col3Height]);

  const item3Style = useMemo(() => {
    return {
      top: item3Top,
      left: item3Left,
      lineHeight: item3LineHeight,
      width: item3Width,
      height: item3Height,
    };
  }, [item3Top, item3Left, item3LineHeight, item3Width, item3Height]);

  const item2Style = useMemo(() => {
    return {
      top: item2Top,
      left: item2Left,
      lineHeight: item2LineHeight,
      width: item2Width,
      height: item2Height,
    };
  }, [item2Top, item2Left, item2LineHeight, item2Width, item2Height]);

  const item1Style = useMemo(() => {
    return {
      top: item1Top,
      left: item1Left,
      lineHeight: item1LineHeight,
      width: item1Width,
      height: item1Height,
    };
  }, [item1Top, item1Left, item1LineHeight, item1Width, item1Height]);

  const titleCol3Style = useMemo(() => {
    return {
      top: titleCol3Top,
      left: titleCol3Left,
      lineHeight: titleCol3LineHeight,
      width: titleCol3Width,
      height: titleCol3Height,
    };
  }, [
    titleCol3Top,
    titleCol3Left,
    titleCol3LineHeight,
    titleCol3Width,
    titleCol3Height,
  ]);

  const col1Style = useMemo(() => {
    return {
      top: col1Top,
      left: col1Left,
      width: col1Width,
      height: col1Height,
    };
  }, [col1Top, col1Left, col1Width, col1Height]);

  const item31Style = useMemo(() => {
    return {
      top: item3Top1,
      left: item3Left1,
      width: item3Width1,
      height: item3Height1,
    };
  }, [item3Top1, item3Left1, item3Width1, item3Height1]);

  const item32Style = useMemo(() => {
    return {
      top: item3Top2,
      left: item3Left2,
      width: item3Width2,
      height: item3Height2,
    };
  }, [item3Top2, item3Left2, item3Width2, item3Height2]);

  const item21Style = useMemo(() => {
    return {
      top: item2Top1,
      left: item2Left1,
      width: item2Width1,
      height: item2Height1,
    };
  }, [item2Top1, item2Left1, item2Width1, item2Height1]);

  const item11Style = useMemo(() => {
    return {
      top: item1Top1,
      left: item1Left1,
      width: item1Width1,
      height: item1Height1,
    };
  }, [item1Top1, item1Left1, item1Width1, item1Height1]);

  const titleCol1Style = useMemo(() => {
    return {
      top: titleCol1Top,
      left: titleCol1Left,
      lineHeight: titleCol1LineHeight,
      width: titleCol1Width,
      height: titleCol1Height,
    };
  }, [
    titleCol1Top,
    titleCol1Left,
    titleCol1LineHeight,
    titleCol1Width,
    titleCol1Height,
  ]);

  const descriptionStyle = useMemo(() => {
    return {
      top: descriptionTop,
      left: descriptionLeft,
      lineHeight: descriptionLineHeight,
      width: descriptionWidth,
    };
  }, [
    descriptionTop,
    descriptionLeft,
    descriptionLineHeight,
    descriptionWidth,
  ]);

  const separatorStyle = useMemo(() => {
    return {
      top: separatorTop,
      left: separatorLeft,
      width: separatorWidth,
      height: separatorHeight,
    };
  }, [separatorTop, separatorLeft, separatorWidth, separatorHeight]);

  const logoWebfooterStyle = useMemo(() => {
    return {
      top: logoWebfooterTop,
      left: logoWebfooterLeft,
      width: logoWebfooterWidth,
      height: logoWebfooterHeight,
    };
  }, [
    logoWebfooterTop,
    logoWebfooterLeft,
    logoWebfooterWidth,
    logoWebfooterHeight,
  ]);

  const contacteStyle = useMemo(() => {
    return {
      top: contacteTop,
      left: contacteLeft,
      width: contacteWidth,
      height: contacteHeight,
    };
  }, [contacteTop, contacteLeft, contacteWidth, contacteHeight]);

  const groupIconStyle = useMemo(() => {
    return {
      top: groupIconTop,
      left: groupIconLeft,
      width: groupIconWidth,
      height: groupIconHeight,
    };
  }, [groupIconTop, groupIconLeft, groupIconWidth, groupIconHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivTop, frameDivLeft, frameDivWidth, frameDivHeight]);

  const frameButtonStyle = useMemo(() => {
    return {
      top: frameButtonTop,
      left: frameButtonLeft,
    };
  }, [frameButtonTop, frameButtonLeft]);

  const frameButton1Style = useMemo(() => {
    return {
      top: frameButtonTop1,
      left: frameButtonLeft1,
    };
  }, [frameButtonTop1, frameButtonLeft1]);

  return (
    <footer className="footerdesktop1" style={footerdesktopStyle}>
      <div className="footer-widgets1" style={footerWidgetsStyle}>
        <div className="footer-bg1" style={footerBgStyle} />
        <div className="col31" style={col3Style}>
          <div
            className="item-33"
            style={item3Style}
          >{`Termeni & Condiții`}</div>
          <div className="item-22" style={item2Style}>
            Politicile de Confidențialitate
          </div>
          <div className="item-12" style={item1Style}>
            Contactează-ne
          </div>
          <div className="title-col31" style={titleCol3Style}>
            Informații
          </div>
        </div>
        <div className="col11" style={col1Style}>
          <div className="item-34" style={item31Style}>
            Activități
          </div>
          <div className="item-35" style={item32Style}>
            Blog
          </div>
          <div className="item-23" style={item21Style}>
            Resurse
          </div>
          <div className="item-13" style={item11Style}>
            Despre
          </div>
          <div className="title-col11" style={titleCol1Style}>
            Pagini
          </div>
        </div>
        <div className="description1" style={descriptionStyle}>
          Your natural candle made for your home and for your wellness.
        </div>
        <div className="separator1" style={separatorStyle} />
      </div>
      <div className="logo-webfooter2" style={logoWebfooterStyle}>
        <div className="logo-webfooter3">
          <h1 className="contacte1" style={contacteStyle}>
            Contacte
          </h1>
        </div>
        <img
          className="logo-webfooter-item"
          alt=""
          src="/group-481771@2x.png"
          style={groupIconStyle}
        />
      </div>
      <div className="frame-group" style={frameDivStyle}>
        <Button
          className="frame-inner"
          color="success"
          variant="contained"
          style={frameButtonStyle}
        >
          Subscribe Now
        </Button>
        <Button
          className="frame-button"
          color="success"
          variant="outlined"
          style={frameButton1Style}
        >
          Enter your email
        </Button>
      </div>
    </footer>
  );
};

export default Footerdesktop;
