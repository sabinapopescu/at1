import { useMemo } from "react";
import Property1Default1 from "./Property1Default1";
import "./Navbar7.css";

const Navbar7 = ({
  navbar7Width,
  navbar7Position,
  navbar7Top,
  navbar7Left,
  h1LineHeight,
  frameDivWidth,
  frameDivHeight,
  acasWidth,
  acasCursor,
  blogWidth,
  despreWidth,
  resurseWidth,
  resurseCursor,
  activitiWidth,
  buttonRoundedSmallWidth,
  buttonLineHeight,
  onAcasTextClick,
  onFrameNavigationClick,
  onBlogTextClick,
  onDespreTextClick,
  onResurseTextClick,
  onActivitiTextClick,
  onButtonRoundedSmallClick,
}) => {
  const navbar7Style = useMemo(() => {
    return {
      width: navbar7Width,
      position: navbar7Position,
      top: navbar7Top,
      left: navbar7Left,
    };
  }, [navbar7Width, navbar7Position, navbar7Top, navbar7Left]);

  const h1Style = useMemo(() => {
    return {
      lineHeight: h1LineHeight,
    };
  }, [h1LineHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  const acasStyle = useMemo(() => {
    return {
      width: acasWidth,
      cursor: acasCursor,
    };
  }, [acasWidth, acasCursor]);

  const blogStyle = useMemo(() => {
    return {
      width: blogWidth,
    };
  }, [blogWidth]);

  const despreStyle = useMemo(() => {
    return {
      width: despreWidth,
    };
  }, [despreWidth]);

  const resurseStyle = useMemo(() => {
    return {
      width: resurseWidth,
      cursor: resurseCursor,
    };
  }, [resurseWidth, resurseCursor]);

  const activitiStyle = useMemo(() => {
    return {
      width: activitiWidth,
    };
  }, [activitiWidth]);

  const property1Default1Style = useMemo(() => {
    return {
      width: buttonRoundedSmallWidth,
    };
  }, [buttonRoundedSmallWidth]);

  const button1Style = useMemo(() => {
    return {
      lineHeight: buttonLineHeight,
    };
  }, [buttonLineHeight]);

  return (
    <nav className="navbar-7" id="Navbar 7" style={navbar7Style}>
      <header className="parent">
        <h1 className="h1" style={h1Style}>
          🌱
        </h1>
        <div className="acas-parent" style={frameDiv1Style}>
          <div className="acas" style={acasStyle} onClick={onAcasTextClick}>
            Acasă
          </div>
          <nav className="blog-parent" onClick={onFrameNavigationClick}>
            <div className="blog" onClick={onBlogTextClick} style={blogStyle}>
              Blog
            </div>
            <div
              className="despre1"
              onClick={onDespreTextClick}
              style={despreStyle}
            >
              Despre
            </div>
            <div
              className="resurse"
              style={resurseStyle}
              onClick={onResurseTextClick}
            >
              Resurse
            </div>
            <div
              className="activiti"
              onClick={onActivitiTextClick}
              style={activitiStyle}
            >
              Activități
            </div>
          </nav>
          <Property1Default1
            button="Login"
            property1DefaultBackgroundColor="#56b280"
            property1DefaultFlexShrink="0"
            property1DefaultCursor="pointer"
            property1DefaultBorderRadius="10px"
            property1DefaultWidth="137px"
            property1DefaultOverflow="hidden"
            property1DefaultDisplay="flex"
            property1DefaultFlexDirection="row"
            property1DefaultAlignItems="center"
            property1DefaultJustifyContent="center"
            property1DefaultPadding="var(--padding-smi) var(--padding-5xl)"
            property1DefaultBoxSizing="border-box"
            property1DefaultPosition="unset"
            property1DefaultTop="unset"
            property1DefaultLeft="unset"
            buttonLineHeight="24px"
            onButtonRoundedSmallClick={onButtonRoundedSmallClick}
          />
        </div>
      </header>
    </nav>
  );
};

export default Navbar7;
