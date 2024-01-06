import { Button } from "@mui/material";
import Property1Default1 from "./Property1Default1";
import "./ActivityContainer.css";

const ActivityContainer = () => {
  return (
    <div className="activitati1">
      <div className="bg" />
      <div className="cards-testimonial">
        <div className="card-testimonial">
          <div className="bg1" />
          <h3 className="title">“I love it! No more air fresheners”</h3>
          <img className="img-icon" alt="" src="/img@2x.png" />
        </div>
      </div>
      <div className="cards-testimonial1">
        <div className="card-testimonial">
          <div className="bg1" />
          <h3 className="title1">“Raccomended for everyone”</h3>
          <img className="img-icon1" alt="" src="/img@2x.png" />
        </div>
      </div>
      <div className="cards-testimonial2">
        <div className="card-testimonial">
          <div className="bg1" />
          <h3 className="title2">“Looks very natural, the smell is awesome”</h3>
          <img className="img-icon2" alt="" src="/img@2x.png" />
        </div>
      </div>
      <div className="section-text1">
        <h3 className="description5">
          O colecție de activități educaționale, inclusiv jocuri, experimente și
          proiecte
        </h3>
        <h1 className="title-h21">Activități</h1>
      </div>
      <Property1Default1
        property1DefaultBackgroundColor="unset"
        property1DefaultFlexShrink="unset"
        property1DefaultCursor="unset"
        property1DefaultBorderRadius="unset"
        property1DefaultWidth="unset"
        property1DefaultOverflow="unset"
        property1DefaultDisplay="unset"
        property1DefaultFlexDirection="unset"
        property1DefaultAlignItems="unset"
        property1DefaultJustifyContent="unset"
        property1DefaultPadding="unset"
        property1DefaultBoxSizing="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="33.69rem"
        property1DefaultLeft="10.25rem"
      />
    </div>
  );
};

export default ActivityContainer;
