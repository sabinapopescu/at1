import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footerdesktop from "../components/Footerdesktop";
import Header from "../components/Header";
import SwiperContainer from "../components/SwiperContainer";
import SwiperContainer1 from "../components/SwiperContainer1";
import "./Resurse.css";

const Resurse = () => {
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
    <div className="resurse1">
      <Footerdesktop
        footerdesktopWidth="90rem"
        footerdesktopHeight="23.69rem"
        footerdesktopPosition="absolute"
        footerdesktopTop="200.94rem"
        footerdesktopLeft="0rem"
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
      <Header />
      <div className="frame">
        <div className="cardswiper-wrapper">
          <div className="cardswiper">
            <div className="swiper-title-wrapper">
              <b className="swiper-title">[Swiper Title]</b>
            </div>
            <div className="swipearea">
              <div className="examplecard">
                <div className="cardmedia">
                  <div className="aspect-ratio-keeper-rotated" />
                </div>
                <div className="cardcontent">
                  <b className="card-title">[Card Title]</b>
                  <div className="card-paragraph">[Card Paragraph]</div>
                </div>
              </div>
              <div className="examplecard">
                <div className="cardmedia">
                  <div className="aspect-ratio-keeper-rotated" />
                </div>
                <div className="cardcontent">
                  <b className="card-title">[Card Title]</b>
                  <div className="card-paragraph">[Card Paragraph]</div>
                </div>
              </div>
              <div className="examplecard">
                <div className="cardmedia">
                  <div className="aspect-ratio-keeper-rotated" />
                </div>
                <div className="cardcontent">
                  <b className="card-title">[Card Title]</b>
                  <div className="card-paragraph">[Card Paragraph]</div>
                </div>
              </div>
              <div className="examplecard">
                <div className="cardmedia">
                  <div className="aspect-ratio-keeper-rotated" />
                </div>
                <div className="cardcontent">
                  <b className="card-title">[Card Title]</b>
                  <div className="card-paragraph">[Card Paragraph]</div>
                </div>
              </div>
              <div className="examplecard">
                <div className="cardmedia">
                  <div className="aspect-ratio-keeper-rotated" />
                </div>
                <div className="cardcontent">
                  <b className="card-title">[Card Title]</b>
                  <div className="card-paragraph">[Card Paragraph]</div>
                </div>
              </div>
              <div className="examplecard">
                <div className="cardmedia">
                  <div className="aspect-ratio-keeper-rotated" />
                </div>
                <div className="cardcontent">
                  <b className="card-title">[Card Title]</b>
                  <div className="card-paragraph">[Card Paragraph]</div>
                </div>
              </div>
              <div className="examplecard">
                <div className="cardmedia">
                  <div className="aspect-ratio-keeper-rotated" />
                </div>
                <div className="cardcontent">
                  <b className="card-title">[Card Title]</b>
                  <div className="card-paragraph">[Card Paragraph]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwiperContainer propTop="100.06rem" />
      <SwiperContainer1 propTop="129.13rem" />
      <SwiperContainer1 propTop="161.88rem" />
      <SwiperContainer propTop="69.44rem" />
      <div className="frame1">
        <div className="text-left">
          <div className="feature4">
            <div className="feature41">
              <span className="long-burning">Long burning:</span>
              <span> No more waste. Created for last long.</span>
            </div>
            <img
              className="checkmark-circle-outline-2-icon"
              alt=""
              src="/checkmarkcircleoutline-2@2x.png"
            />
          </div>
          <div className="feature3">
            <div className="feature41">
              <span className="long-burning">{`Handmade: `}</span>
              <span>All candles are craftly made with love.</span>
            </div>
            <img
              className="checkmark-circle-outline-1-icon"
              alt=""
              src="/checkmarkcircleoutline-2@2x.png"
            />
          </div>
          <div className="feature2">
            <div className="feature41">
              <span className="long-burning">{`Hyphoallergenic: `}</span>
              <span>{`100% natural, human friendly ingredients `}</span>
            </div>
            <img
              className="checkmark-circle-outline-1-icon"
              alt=""
              src="/checkmarkcircleoutline-2@2x.png"
            />
          </div>
          <div className="feature1">
            <div className="feature41">
              <span className="long-burning">Eco-sustainable:</span>
              <span>All recyclable materials, 0% CO2 emissions</span>
            </div>
            <img
              className="checkmark-circle-outline-2-icon"
              alt=""
              src="/checkmarkcircleoutline-2@2x.png"
            />
          </div>
          <div className="h2-title">Resurse</div>
        </div>
      </div>
    </div>
  );
};

export default Resurse;
