import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './Styles/Satisfiedcustomer.css'

import uber2 from "./Portfoliochilds/portfolioImages/uber2.png";
import uber3 from "./Portfoliochilds/portfolioImages/uber3.png";
import uberCover1 from "./Portfoliochilds/portfolioImages/uberCover1.png";


const Satisfiedcustomer = () => {
  return <div>
    <section className="SatisfiedSection pt-5 pb-5">
        <div className="text-center">
        <i className="bi bi-star-fill filledStars"></i>
        <i className="bi bi-star-fill filledStars-center"></i>
        <i className="bi bi-star-fill filledStars"></i>
        </div>
        <div className="text-center">
      <h2 className="head2CustHome">Satisfied Customers
        {/* <div className="head2Line text-center"></div> */}
      </h2>
        </div>
      <Carousel
        className="p-5"
        centerMode={false}
        centerSlidePercentage={80}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow custom-arrow-prev"
                style={{backgroundColor: "blue"}}
              >
                <i class="bi bi-arrow-left"></i>
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
                style={{backgroundColor: "blue"}}
              >
                <i class="bi bi-arrow-right"></i>
              </button>
            )
          }
      >
        <div>
          <img src={uber2} alt="uber" />
        </div>
        <div>
          <img src={uber3} alt="uber" />
        </div>
        <div>
          <img src={uberCover1} alt="uber" />
        </div>
      </Carousel>
    </section>
  </div>;
};

export default Satisfiedcustomer;
