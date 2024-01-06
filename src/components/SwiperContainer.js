import { useMemo } from "react";
import "./SwiperContainer.css";

const SwiperContainer = ({ propTop }) => {
  const frameStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="frame4" style={frameStyle}>
      <div className="cardswiper-container">
        <div className="cardswiper1">
          <div className="swiper-title-container">
            <b className="swiper-title1">[Swiper Title]</b>
          </div>
          <div className="swipearea1">
            <div className="examplecard7">
              <div className="cardmedia7">
                <div className="aspect-ratio-keeper-rotated7" />
              </div>
              <div className="cardcontent7">
                <b className="card-title7">[Card Title]</b>
                <div className="card-paragraph7">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard7">
              <div className="cardmedia7">
                <div className="aspect-ratio-keeper-rotated7" />
              </div>
              <div className="cardcontent7">
                <b className="card-title7">[Card Title]</b>
                <div className="card-paragraph7">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard7">
              <div className="cardmedia7">
                <div className="aspect-ratio-keeper-rotated7" />
              </div>
              <div className="cardcontent7">
                <b className="card-title7">[Card Title]</b>
                <div className="card-paragraph7">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard7">
              <div className="cardmedia7">
                <div className="aspect-ratio-keeper-rotated7" />
              </div>
              <div className="cardcontent7">
                <b className="card-title7">[Card Title]</b>
                <div className="card-paragraph7">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard7">
              <div className="cardmedia7">
                <div className="aspect-ratio-keeper-rotated7" />
              </div>
              <div className="cardcontent7">
                <b className="card-title7">[Card Title]</b>
                <div className="card-paragraph7">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard7">
              <div className="cardmedia7">
                <div className="aspect-ratio-keeper-rotated7" />
              </div>
              <div className="cardcontent7">
                <b className="card-title7">[Card Title]</b>
                <div className="card-paragraph7">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard7">
              <div className="cardmedia7">
                <div className="aspect-ratio-keeper-rotated7" />
              </div>
              <div className="cardcontent7">
                <b className="card-title7">[Card Title]</b>
                <div className="card-paragraph7">[Card Paragraph]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperContainer;
