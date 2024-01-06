import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footerdesktop from "../components/Footerdesktop";
import Navbar7 from "../components/Navbar7";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import Property1Default from "../components/Property1Default";
import "./Blog.css";

const Blog = () => {
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
    <div className="blog1">
      <Footerdesktop
        footerdesktopWidth="90rem"
        footerdesktopHeight="23.69rem"
        footerdesktopPosition="absolute"
        footerdesktopTop="189.19rem"
        footerdesktopLeft="0.25rem"
        footerWidgetsTop="0rem"
        footerWidgetsLeft="0rem"
        footerWidgetsWidth="90rem"
        footerWidgetsHeight="23.94rem"
        footerBgTop="0rem"
        footerBgLeft="0rem"
        footerBgWidth="90rem"
        footerBgHeight="23.94rem"
        col3Top="6.5rem"
        col3Left="67.19rem"
        col3Width="16.25rem"
        col3Height="10.25rem"
        item3Top="8.69rem"
        item3Left="0rem"
        item3LineHeight="1.8rem"
        item3Width="12.31rem"
        item3Height="1.56rem"
        item2Top="5.88rem"
        item2Left="0rem"
        item2LineHeight="1.8rem"
        item2Width="16.25rem"
        item2Height="1.56rem"
        item1Top="3.11rem"
        item1Left="0.13rem"
        item1LineHeight="1.8rem"
        item1Width="10.5rem"
        item1Height="1.55rem"
        titleCol3Top="0rem"
        titleCol3Left="0.06rem"
        titleCol3LineHeight="1.8rem"
        titleCol3Width="10.5rem"
        titleCol3Height="1.55rem"
        col1Top="6.5rem"
        col1Left="53.56rem"
        col1Width="10.63rem"
        col1Height="12.93rem"
        item3Top1="8.7rem"
        item3Left1="0rem"
        item3Width1="10.55rem"
        item3Height1="1.55rem"
        item3Top2="11.38rem"
        item3Left2="0rem"
        item3Width2="10.55rem"
        item3Height2="1.55rem"
        item2Top1="5.9rem"
        item2Left1="0rem"
        item2Width1="8.29rem"
        item2Height1="1.55rem"
        item1Top1="3.11rem"
        item1Left1="0.08rem"
        item1Width1="10.55rem"
        item1Height1="1.55rem"
        titleCol1Top="0rem"
        titleCol1Left="0rem"
        titleCol1LineHeight="1.8rem"
        titleCol1Width="10.55rem"
        titleCol1Height="1.55rem"
        descriptionTop="9.31rem"
        descriptionLeft="10.31rem"
        descriptionLineHeight="1.43rem"
        descriptionWidth="15.63rem"
        separatorTop="3.71rem"
        separatorLeft="10.27rem"
        separatorWidth="73.72rem"
        separatorHeight="0.09rem"
        logoWebfooterTop="3.75rem"
        logoWebfooterLeft="10.31rem"
        logoWebfooterWidth="15.63rem"
        logoWebfooterHeight="6.25rem"
        contacteTop="1.38rem"
        contacteLeft="0.56rem"
        contacteWidth="8.44rem"
        contacteHeight="2.44rem"
        groupIconTop="14.75rem"
        groupIconLeft="56.94rem"
        groupIconWidth="4.5rem"
        groupIconHeight="1.31rem"
        frameDivTop="14.38rem"
        frameDivLeft="10.31rem"
        frameDivWidth="20.5rem"
        frameDivHeight="3.06rem"
        frameButtonTop="0rem"
        frameButtonLeft="12.19rem"
        frameButtonTop1="0rem"
        frameButtonLeft1="0rem"
      />
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
        onAcasTextClick={onAcasTextClick}
        onFrameNavigationClick={onFrameNavigationClick}
        onBlogTextClick={onBlogTextClick}
        onDespreTextClick={onDespreTextClick}
        onActivitiTextClick={onActivitiTextClick}
        onButtonRoundedSmallClick={onButtonRoundedSmallClick}
      />
      <ContainerCardFormFilter
        dimensions="/checkmarkcircleoutline-1@2x.png"
        carDimensions="/checkmarkcircleoutline-1@2x.png"
        feature2Top="58.5rem"
        feature2Left="-0.06rem"
      />
      <ContainerCardFormFilter
        dimensions="/checkmarkcircleoutline-1@2x.png"
        carDimensions="/checkmarkcircleoutline-1@2x.png"
        feature2Top="89.13rem"
        feature2Left="-0.06rem"
      />
      <ContainerCardFormFilter
        dimensions="/checkmarkcircleoutline-1@2x.png"
        carDimensions="/checkmarkcircleoutline-1@2x.png"
        feature2Top="150.38rem"
        feature2Left="0.25rem"
      />
      <ContainerCardFormFilter
        dimensions="/checkmarkcircleoutline-1@2x.png"
        carDimensions="/checkmarkcircleoutline-1@2x.png"
        feature2Top="119.75rem"
        feature2Left="-0.06rem"
      />
      <div className="heading">
        <img className="image-2-icon" alt="" src="/image 2@2x.png" />
        <div className="card-bg" />
        <Property1Default
          button="Hai să descoperim împreună"
          property1DefaultPosition="absolute"
          property1DefaultTop="28.63rem"
          property1DefaultLeft="34.69rem"
          property1DefaultWidth="20.5rem"
          property1DefaultHeight="2.31rem"
          buttonTextAlign="left"
          buttonFlex="unset"
        />
        <div className="description-parent">
          <div className="description2">
            {" "}
            O colecție de resurse și activități pentru educatori și copii
          </div>
          <div className="hero-title">
            <span className="hero-title-txt">
              <p className="p">{`🌱 `}</p>
              <p className="produse-educaionale-inovatoar">
                Produse educaționale inovatoare
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
