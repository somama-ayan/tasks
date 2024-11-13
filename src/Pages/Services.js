import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import digital from './Images/RestSectionImages/digital.png';
import website from  './Images/RestSectionImages/website.png';
import mobile from  './Images/RestSectionImages/mobile.png';
import graphic from  './Images/RestSectionImages/graphic.png';
import './Styles/Services.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Services = () => {
  return (
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
          <div>
            <Row className="d-flex align-items-center">
              <Col xs={12} md={6}>
                <img src={website} alt="Web Development" className="service-image" />
              </Col>
              <Col xs={12} md={6} className="">
                <h2 className='d-flex justify-content-start'>Web Development</h2>
                <p>
                  Enhance your online presence with our comprehensive web development services. 
                  We combine cutting-edge technology with creative design to build engaging websites that drive results.
                </p>
                <div className='d-flex justify-content-start'>
                <Button className="get-in-touch-btn">Get in Touch</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="d-flex align-items-center">
              <Col xs={12} md={6}>
                <img src={mobile} alt="Mobile Development" className="service-image" />
              </Col>
              <Col xs={12} md={6} className="">
                <h2 className='d-flex justify-content-start'>Mobile Development</h2>
                <p>
                  Reach your audience on the go with our mobile development services. 
                  Our team builds engaging, user-friendly mobile apps tailored to your business needs.
                </p>
                <div className='d-flex justify-content-start'>
                <Button className="get-in-touch-btn">Get in Touch</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="d-flex align-items-center">
              <Col sm={12} md={6} lg={6}>
                <img src={digital} alt="Digital Marketing" className="service-image" />
              </Col>
              <Col sm={12} md={6} lg={6} className="">
                <h2 className='d-flex justify-content-start'>Digital Marketing</h2>
                <p>
                  Increase your online visibility with our digital marketing services. 
                  We create customized strategies to grow your brand and engage your audience effectively.
                </p>
                <div className='d-flex justify-content-start'>
                <Button className="get-in-touch-btn">Get in Touch</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="d-flex align-items-center">
              <Col sm={12} md={6} lg={6}>
                <img src={graphic} alt="Graphic Design" className="service-image" />
              </Col>
              <Col sm={12} md={6} lg={6} className="">
                <h2 className='d-flex justify-content-start'>Graphics Design</h2>
                <p>
                  Stand out with our creative graphic design services. We craft visually appealing 
                  designs that convey your brand message and engage your audience.
                </p>
                <div className='d-flex justify-content-start'>
                <Button className="get-in-touch-btn">Get in Touch</Button>
                </div>
              
              </Col>
            </Row>
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default Services;

