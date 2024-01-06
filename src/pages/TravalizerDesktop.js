import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FilterFormContainer from "../components/FilterFormContainer";
import Navbar7 from "../components/Navbar7";
import "./TravalizerDesktop.css";

const TravalizerDesktop = () => {
  const navigate = useNavigate();

  const onFrameNavigationClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onDespreTextClick = useCallback(() => {
    navigate("/despre");
  }, [navigate]);

  const onActivitiTextClick = useCallback(() => {
    navigate("/activitati");
  }, [navigate]);

  const onButtonRoundedSmallClick = useCallback(() => {
    window.open("/travalizer-desktop");
  }, []);

  return (
    <div className="travalizer-desktop">
      <div className="main">
        <div className="illustration">
          <div className="illustration-child" />
          <img className="image-icon" alt="" src="/image@2x.png" />
        </div>
        <FilterFormContainer />
      </div>
      <Navbar7
        navbar7Width="89.94rem"
        navbar7Position="absolute"
        navbar7Top="0rem"
        navbar7Left="0rem"
        h1LineHeight="3.6rem"
        frameDivWidth="56.44rem"
        frameDivHeight="3.5rem"
        acasWidth="7.69rem"
        acasCursor="unset"
        blogWidth="8.63rem"
        despreWidth="9.13rem"
        resurseWidth="8.31rem"
        resurseCursor="unset"
        activitiWidth="8.38rem"
        buttonRoundedSmallWidth="8.56rem"
        buttonLineHeight="1.5rem"
        onFrameNavigationClick={onFrameNavigationClick}
        onBlogTextClick={onBlogTextClick}
        onDespreTextClick={onDespreTextClick}
        onActivitiTextClick={onActivitiTextClick}
        onButtonRoundedSmallClick={onButtonRoundedSmallClick}
      />
    </div>
  );
};

export default TravalizerDesktop;
