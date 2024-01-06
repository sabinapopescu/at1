import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="section-descriere1">
      <div className="section-bg1" />
      <div className="section-2">
        <div className="grupa-pregatitoare-parent">
          <div className="grupa-pregatitoare">grupa pregatitoare</div>
          <div className="group-child" />
        </div>
        <div className="grupa-pregatitoare-parent">
          <div className="grupa-mica">grupa mica</div>
          <div className="group-child" />
        </div>
        <div className="grupa-pregatitoare-parent">
          <div className="grupa-mijlocie">grupa mijlocie</div>
          <div className="group-child" />
        </div>
        <div className="grupa-mare-parent">
          <div className="grupa-mare">grupa mare</div>
          <div className="rectangle-div" />
        </div>
        <div className="grupa-pregatitoare-group">
          <div className="grupa-pregatitoare1">grupa pregatitoare</div>
          <div className="group-child1" />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
