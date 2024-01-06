import { useMemo } from "react";
import "./SwiperContainer1.css";

const SwiperContainer1 = ({ propTop }) => {
  const frame1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="frame5" style={frame1Style}>
      <div className="cardswiper-frame">
        <div className="cardswiper2">
          <div className="swiper-title-frame">
            <b className="swiper-title2">[Swiper Title]</b>
          </div>
          <div className="swipearea2">
            <div className="examplecard14">
              <div className="cardmedia14">
                <div className="aspect-ratio-keeper-rotated14" />
              </div>
              <div className="cardcontent14">
                <b className="card-title14">[Card Title]</b>
                <div className="card-paragraph14">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard14">
              <div className="cardmedia14">
                <div className="aspect-ratio-keeper-rotated14" />
              </div>
              <div className="cardcontent14">
                <b className="card-title14">[Card Title]</b>
                <div className="card-paragraph14">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard14">
              <div className="cardmedia14">
                <div className="aspect-ratio-keeper-rotated14" />
              </div>
              <div className="cardcontent14">
                <b className="card-title14">[Card Title]</b>
                <div className="card-paragraph14">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard14">
              <div className="cardmedia14">
                <div className="aspect-ratio-keeper-rotated14" />
              </div>
              <div className="cardcontent14">
                <b className="card-title14">[Card Title]</b>
                <div className="card-paragraph14">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard14">
              <div className="cardmedia14">
                <div className="aspect-ratio-keeper-rotated14" />
              </div>
              <div className="cardcontent14">
                <b className="card-title14">[Card Title]</b>
                <div className="card-paragraph14">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard14">
              <div className="cardmedia14">
                <div className="aspect-ratio-keeper-rotated14" />
              </div>
              <div className="cardcontent14">
                <b className="card-title14">[Card Title]</b>
                <div className="card-paragraph14">[Card Paragraph]</div>
              </div>
            </div>
            <div className="examplecard14">
              <div className="cardmedia14">
                <div className="aspect-ratio-keeper-rotated14" />
              </div>
              <div className="cardcontent14">
                <b className="card-title14">[Card Title]</b>
                <div className="card-paragraph14">[Card Paragraph]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperContainer1;
