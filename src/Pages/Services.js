import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import digital from "./Images/RestSectionImages/digital.png";
import website from "./Images/RestSectionImages/website.png";
import mobile from "./Images/RestSectionImages/mobile.png";
import graphic from "./Images/RestSectionImages/graphic.png";
import "./Styles/Services.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref: aboutSectionRef, inView } = useInView({
    triggerOnce: false, // Allows animation to reset every time section comes into view
    threshold: 0.2, // Triggers when 20% of the section is in view
  });

  return (
    <section
      className="services py-5"
      id="ServicesSection"
      ref={aboutSectionRef}
    >
      <h1 className="display-4 mb-4 text-left">Our Services</h1>
      <div
        className={`services-line ${inView ? "animate-services-line" : ""}`}
      ></div>
      <Container fluid>
        <Carousel
          showStatus={false}
          showThumbs={false}
          autoPlay={false}
          infiniteLoop
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="left-arrow-fixed"
              >
                <i className="bi bi-arrow-left"></i>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="right-arrow-fixed"
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            )
          }
        >
          <div>
            <Row className="d-flex align-items-center">
              <Col xs={12} md={6}>
                <img
                  src={website}
                  alt="Web Development"
                  className="service-image"
                />
              </Col>
              <Col xs={12} md={6} className="">
                <h2 className="d-flex justify-content-start">
                  Web Development
                </h2>
                <p>
                  Enhance your online presence with our comprehensive web
                  development services. We combine cutting-edge technology with
                  creative design to craft websites that not only capitavte
                  audience but drive results.
                </p>
                <div className="d-flex justify-content-start">
                  <Button className="get-in-touch-btn">Get in Touch</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="d-flex align-items-center">
              <Col xs={12} md={6}>
                <img
                  src={mobile}
                  alt="Mobile Development"
                  className="service-image"
                />
              </Col>
              <Col xs={12} md={6} className="">
                <h2 className="d-flex justify-content-start">
                  Mobile Development
                </h2>
                <p>
                  Maximize your digital impact with our mobile app development
                  Services. Our skilled team merges innovation with sleek design
                  to create engaging apps that deliver tangible results.Let us
                  transform your ideas into seamless mobile experiences that
                  capitavte the users and drive Success.
                </p>
                <div className="d-flex justify-content-start">
                  <Button className="get-in-touch-btn">Get in Touch</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="d-flex align-items-center">
              <Col sm={12} md={6} lg={6}>
                <img
                  src={digital}
                  alt="Digital Marketing"
                  className="service-image"
                />
              </Col>
              <Col sm={12} md={6} lg={6} className="">
                <h2 className="d-flex justify-content-start">
                  Digital Marketing
                </h2>
                <p>
                  Boost your online presence with our comprehensive digital
                  marketing services, including socail media management, and
                  more . Our expert team craft tailored strategies to evaluate
                  your brand's and engagement across digital platform . Let us
                  drive your Success with targeted compaigns,compelling content
                  and data-driven insights.
                </p>
                <div className="d-flex justify-content-start">
                  <Button className="get-in-touch-btn">Get in Touch</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="d-flex align-items-center">
              <Col sm={12} md={6} lg={6}>
                <img
                  src={graphic}
                  alt="Graphic Design"
                  className="service-image"
                />
              </Col>
              <Col sm={12} md={6} lg={6} className="">
                <h2 className="d-flex justify-content-start">
                  Graphics Design
                </h2>
                <p>
                  Evalute your brand's visual identity with our full-suite
                  graphic design services,encompassing UI/UX design and
                  branding.Our talented team combines creativity with the
                  strategic thinking to deliver capitaviting design that
                  resonate with our audience.From logos to user interface we
                  craft visually stunning assets that embody your brand's
                  essence and leave a lasting impression.
                </p>
                <div className="d-flex justify-content-start">
                  <Button className="get-in-touch-btn">Get in Touch</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel>
      </Container>

      <section className="our-process">
        <h1 className="d-flex justify-content-center text-black">
          Our Process
        </h1>

        <Container>
          <Row className="text-center">
            <Col sm={3}>
              <i className="bi bi-lightbulb icon-style path"></i>
            </Col>

            <Col sm={3}>
              <i className="bi bi-gear icon-style path"></i>
            </Col>
            <Col sm={3}>
              <i className="bi bi-vector-pen icon-style path"></i>
            </Col>
            <Col sm={3}>
              <i className="bi bi-send icon-style path"></i>
            </Col>
          </Row>
          <h2 className="d-flex justify-content-center heading">Deliver</h2>
          <p>
            After completing the development phase, we ensure the final product
            meets your needs, is tested thoroughly, and is ready for deployment.
            We provide ongoing support to ensure everything runs smoothly
            post-launch.
          </p>
        </Container>
      </section>
    </section>
  );
};

export default Services;
