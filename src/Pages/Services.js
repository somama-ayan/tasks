import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import digital from './Images/RestSectionImages/digital.png';
import website from './Images/RestSectionImages/website.png';
import mobile from './Images/RestSectionImages/mobile.png';
import graphic from './Images/RestSectionImages/graphic.png';
import './Styles/Services.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Services = () => {
  return (
    <>
      <section className="services py-5" id="ServicesSection">
        <h1 className="display-4 mb-4 text-left">Our Services</h1>
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
            {/* Web Development */}
            <div>
              <Row className="d-flex align-items-center">
                <Col xs={12} md={6}>
                  <img src={website} alt="Web Development" className="service-image" />
                </Col>
                <Col xs={12} md={6}>
                  <h2 className="d-flex justify-content-start">Web Development</h2>
                  <p>
                    Enhance your online presence with our comprehensive web development services.
                    We combine cutting-edge technology with creative design to craft websites
                    that not only captivate audiences but also drive results.
                  </p>
                  <div className="d-flex justify-content-start">
                    <Button className="get-in-touch-btn">Get in Touch</Button>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Mobile Development */}
            <div>
              <Row className="d-flex align-items-center">
                <Col xs={12} md={6}>
                  <img src={mobile} alt="Mobile Development" className="service-image" />
                </Col>
                <Col xs={12} md={6}>
                  <h2 className="d-flex justify-content-start">Mobile Development</h2>
                  <p>
                    Maximize your digital impact with our mobile app development services.
                    Our skilled team merges innovation with sleek design to create engaging apps
                    that deliver tangible results. Let us transform your ideas into seamless
                    mobile experiences that captivate users and drive success.
                  </p>
                  <div className="d-flex justify-content-start">
                    <Button className="get-in-touch-btn">Get in Touch</Button>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Digital Marketing */}
            <div>
              <Row className="d-flex align-items-center">
                <Col xs={12} md={6}>
                  <img src={digital} alt="Digital Marketing" className="service-image" />
                </Col>
                <Col xs={12} md={6}>
                  <h2 className="d-flex justify-content-start">Digital Marketing</h2>
                  <p>
                    Boost your online presence with our comprehensive digital marketing services,
                    including social media management and more. Our expert team crafts tailored
                    strategies to elevate your brand's engagement across digital platforms. Let us
                    drive your success with targeted campaigns, compelling content, and data-driven insights.
                  </p>
                  <div className="d-flex justify-content-start">
                    <Button className="get-in-touch-btn">Get in Touch</Button>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Graphic Design */}
            <div>
              <Row className="d-flex align-items-center">
                <Col xs={12} md={6}>
                  <img src={graphic} alt="Graphic Design" className="service-image" />
                </Col>
                <Col xs={12} md={6}>
                  <h2 className="d-flex justify-content-start">Graphic Design</h2>
                  <p>
                    Elevate your brand's visual identity with our full-suite graphic design
                    services, encompassing UI/UX design and branding. Our talented team combines
                    creativity with strategic thinking to deliver captivating designs that resonate
                    with your audience. From logos to user interfaces, we craft visually stunning
                    assets that embody your brand's essence and leave a lasting impression.
                  </p>
                  <div className="d-flex justify-content-start">
                    <Button className="get-in-touch-btn">Get in Touch</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel>
        </Container>
      </section>

      {/* Our Process Section */}
      <section className="our-process">
        <h1 className="d-flex justify-content-center text-black">Our Process</h1>
        <Container>
          <Row className="text-center">
            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center mb-4">
              <i className="bi bi-lightbulb icon-style"></i>
            </Col>
            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center mb-4">
              <i className="bi bi-gear icon-style"></i>
            </Col>
            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center mb-4">
              <i className="bi bi-vector-pen icon-style"></i>
            </Col>
            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center mb-4">
              <i className="bi bi-send icon-style"></i>
            </Col>
          </Row>
          <h2 className="d-flex justify-content-center heading">Deliver</h2>
          <p className="text-center px-3">
            After completing the development phase, we ensure the final product meets your needs,
            is tested thoroughly, and is ready for deployment. We provide ongoing support to
            ensure everything runs smoothly post-launch.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Services;

