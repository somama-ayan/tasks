import React from "react";
import "./Styles/Portfolioection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useInView } from "react-intersection-observer";

import uber2 from "./Portfoliochilds/portfolioImages/uber2.png";
import uber3 from "./Portfoliochilds/portfolioImages/uber3.png";
import uberCover1 from "./Portfoliochilds/portfolioImages/uberCover1.png";
import { Col, Container, Row } from "react-bootstrap";
const PorfolioSection = () => {
  const { ref: aboutSectionRef, inView } = useInView({
    triggerOnce: false, // Allows animation to reset every time section comes into view
    threshold: 0.2, // Triggers when 20% of the section is in view
  });

  return (
    <div className="portfolioSeectionHome" ref={aboutSectionRef}>
      <section className="portfolioSeectionHome">
        <Container>
          <Row>
            <Col>
              <h2 className="head2PortHome text-center">Our Portfolio</h2>
              <p>
                Explore our portfolio section for detailed views of our
                perfectly crafted products.
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
    </div>
  );
};

export default PorfolioSection;
