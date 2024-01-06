import { useMemo } from "react";
import "./Container.css";

const Container = ({
  imageResolution,
  propTop,
  propLeft,
  propLeft1,
  propTop1,
}) => {
  const sectionDescriereStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const sectionResurseIconStyle = useMemo(() => {
    return {
      left: propLeft1,
      top: propTop1,
    };
  }, [propLeft1, propTop1]);

  return (
    <div className="section-descriere2" style={sectionDescriereStyle}>
      <div className="section-bg2" />
      <div className="section-text3">
        <div className="description7">
          O colecție de activități educaționale, inclusiv jocuri, experimente și
          proiecte
        </div>
        <div className="title-h23">Activități</div>
      </div>
      <img
        className="section-resurse-icon"
        alt=""
        src={imageResolution}
        style={sectionResurseIconStyle}
      />
    </div>
  );
};

export default Container;
