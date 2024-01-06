import { useCallback } from "react";
import Property1Default from "./Property1Default";
import { useNavigate } from "react-router-dom";
import "./ContainerFrame.css";

const ContainerFrame = () => {
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

  const onButtonRoundedSmall1Click = useCallback(() => {
    window.open("/travalizer-desktop");
  }, []);

  return (
    <div className="frame2">
      <div className="heading1">
        <img className="image-2-icon1" alt="" src="/image 2@2x.png" />
        <div className="card-bg1" />
        <Property1Default
          button="Hai să descoperim împreună"
          property1DefaultPosition="absolute"
          property1DefaultTop="28.63rem"
          property1DefaultLeft="34.69rem"
          property1DefaultWidth="20.5rem"
          property1DefaultHeight="unset"
          buttonTextAlign="left"
          buttonFlex="1"
        />
        <div className="description-group">
          <div className="description4">
            {" "}
            O colecție de resurse și activități pentru educatori și copii
          </div>
          <div className="hero-title1">
            <span className="hero-title-txt1">
              <p className="p1">{`🌱 `}</p>
              <p className="produse-educaionale-inovatoar1">
                Produse educaționale inovatoare
              </p>
            </span>
          </div>
        </div>
      </div>
      <nav className="navbar-71" id="Navbar 7">
        <header className="group">
          <h1 className="h11">🌱</h1>
          <div className="acas-group">
            <div className="acas1">Acasă</div>
            <nav className="blog-group" onClick={onFrameNavigationClick}>
              <div className="blog3" onClick={onBlogTextClick}>
                Blog
              </div>
              <div className="despre2" onClick={onDespreTextClick}>
                Despre
              </div>
              <div className="resurse2">Resurse</div>
              <div className="activiti1" onClick={onActivitiTextClick}>
                Activități
              </div>
            </nav>
            <div
              className="button-rounded-small"
              onClick={onButtonRoundedSmall1Click}
            >
              <div className="button2">Login</div>
            </div>
          </div>
        </header>
      </nav>
    </div>
  );
};

export default ContainerFrame;
