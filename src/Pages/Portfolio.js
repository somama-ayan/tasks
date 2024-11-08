import React from "react";
import "./Styles/Portfolio.css";
import Portfolioblognavbar from "../Components/Portfolioblognavbar";
import { Col, Container, Row } from "react-bootstrap";
import Slidercarosel from "./Portfoliochilds/Slidercarosel";

// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './Images/RestSectionImages/digital.jpg';

const Portfolio = () => {
  return (
    <div>
      <section className="headerSection">
        <Portfolioblognavbar />
      </section>
      <section className="portfolioSection d-flex justify-content-center align-items-center">
        <div className="">
          <h2>
            Portfolio <div className="head2hr"></div>
          </h2>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={7} md={6} sm={12}>
              <p className="head1Port">
                Touching the heights of{" "}
                <span className="head1SpanPort">Creativity</span> and{" "}
                <span className="head1SpanPort">Success</span>.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="flex-container">
          <div className="col-lg-8"></div>
          <Col className="PortParaCol">
          

          <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <p className="portfolioPara">
                <span className="SpanPort50">50+ </span>
              </p>
          </div>
          <div className="col"></div>
              <p className="portfolioPara">
                Projects Successfully crafted and delivered, within a span of{" "}
                <span className="head1SpanPort">1.5 Years</span>.
              </p>
            
         
          </Col>
        </div>
      </section>
      {/* /////// ///////           Third section for slide                          //////////////////// */}
      <section className="bg-dark">

     <Slidercarosel />

      </section> 
    </div>
  );
};

export default Portfolio;
