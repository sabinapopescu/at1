import { Button } from "@mui/material";
import Property1Default1 from "./Property1Default1";
import "./BlogContainer.css";

const BlogContainer = () => {
  return (
    <div className="blog2">
      <img className="product-card-icon" alt="" src="/productcard@2x.png" />
      <img className="product-card-icon1" alt="" src="/productcard@2x.png" />
      <img className="product-card-icon2" alt="" src="/productcard@2x.png" />
      <img className="product-card-icon3" alt="" src="/productcard@2x.png" />
      <div className="section-text">
        <h3 className="description3">
          Articole despre educație, tehnologie și inovație
        </h3>
        <h1 className="title-h2">Blog</h1>
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
        property1DefaultTop="26.69rem"
        property1DefaultLeft="61.44rem"
      />
    </div>
  );
};

export default BlogContainer;
