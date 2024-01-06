import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterFormContainer.css";

const FilterFormContainer = () => {
  const navigate = useNavigate();

  const onButtonLoginClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="login-container-child" />
      <div className="afl-cele-mai">Află cele mai recente activități</div>
      <div className="container">
        <h1 className="h12">🌱</h1>
        <div className="nregistreaz-te">Înregistrează-te</div>
      </div>
      <div className="login-form">
        <div className="email">
          <div className="email1">Email</div>
          <div className="robertlangstergmailcom-wrapper">
            <div className="robertlangstergmailcom">
              robert.langster@gmail.com
            </div>
          </div>
        </div>
        <div className="password">
          <div className="email1">Password</div>
          <div className="frame-container">
            <div className="ellipse-parent">
              <div className="ellipse-div" />
              <div className="ellipse-div" />
              <div className="ellipse-div" />
              <div className="ellipse-div" />
              <div className="ellipse-div" />
              <div className="ellipse-div" />
              <div className="ellipse-div" />
              <div className="ellipse-div" />
            </div>
            <img className="eye-off" alt="" src="/eye--off@2x.png" />
          </div>
        </div>
        <div className="extra">
          <div className="remember">
            <img
              className="check-box-default"
              alt=""
              src="/checkbox--default@2x.png"
            />
            <div className="ine-ma-minte">Ține-ma minte</div>
          </div>
          <div className="ai-uitat-parola">Ai uitat parola?</div>
        </div>
        <div className="button-login-parent">
          <div className="button-login" onClick={onButtonLoginClick}>
            <div className="login">Login</div>
          </div>
          <div className="button-login1">
            <div className="login">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="sau-inregistreaz-te-cu-parent">
        <div className="sau-inregistreaz-te-cu">Sau inregistrează-te cu</div>
        <div className="facebook">Facebook</div>
        <div className="facebook">Linked In</div>
        <div className="facebook">Google</div>
      </div>
    </div>
  );
};

export default FilterFormContainer;
