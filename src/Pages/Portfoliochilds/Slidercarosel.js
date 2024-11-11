import React from "react";
import digital from "../Images/RestSectionImages/digital.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Slidecarosel.css";

const Slidercarosel = ({ images }) => {
  return (
    <div className="carousel-container">
      <Carousel
        centerMode={true}
        centerSlidePercentage={70}
        showStatus={true}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="custom-arrow custom-arrow-prev"
            >
              <i class="bi bi-arrow-left-circle"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="custom-arrow custom-arrow-next"
            >
              <i class="bi bi-arrow-right-circle"></i>
            </button>
          )
        }
      >
        <div>
          <img src={images.website} alt="digital" />
        </div>
        <div>
          <img src={images.website} alt="digital" />
        </div>
        <div>
          <img src={images.website} alt="digital" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slidercarosel;
