import React from "react";
import "./Styles/Portfolioection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import uber2 from "./Portfoliochilds/portfolioImages/uber2.png";
import uber3 from "./Portfoliochilds/portfolioImages/uber3.png";
import uberCover1 from "./Portfoliochilds/portfolioImages/uberCover1.png";
import { Col, Container, Row } from "react-bootstrap";
const PorfolioSection = () => {
  return (
    <div className="portfolioSeectionHome">
    <section className="portfolioSeectionHome">
      <Container>
        <Row>

        <Col>
          <h2 className="head2PortHome text-center">Our Portfolio</h2>
          <p>
            Explore our portfolio section for detailed views of our perfectly
            crafted products.
          </p>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <button className="btn btn-dark p-3">Explore</button>
        </Col>
        </Row>
      </Container>

      <Carousel
        className="p-5"
        centerMode={true}
        centerSlidePercentage={80}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
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
    <section className="mt-5 mb-5">
        <div className="text-center">
        <i className="bi bi-star-fill filledStars"></i>
        <i className="bi bi-star-fill filledStars-center"></i>
        <i className="bi bi-star-fill filledStars"></i>
        </div>
        <div className="text-center">
      <h2 className="head2PortHome">Satisfied Customers
        {/* <div className="head2Line text-center"></div> */}
      </h2>
        </div>
      <Carousel
        className="p-5"
        centerMode={true}
        centerSlidePercentage={60}
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
    </div>
  );
};

export default PorfolioSection;
