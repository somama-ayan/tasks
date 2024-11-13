import React from "react";
import "./Styles/Portfolio.css";
import Portfolioblognavbar from "../Components/Portfolioblognavbar";

import Slidercarosel from "./Portfoliochilds/Slidercarosel";

import uber2 from "./Portfoliochilds/portfolioImages/uber2.png";
import uber3 from "./Portfoliochilds/portfolioImages/uber3.png";
import uberCover1 from "./Portfoliochilds/portfolioImages/uberCover1.png";
import uberHome2 from "./Portfoliochilds/portfolioImages/uberHome2.png";
import { Container, Row, Col } from "react-bootstrap";
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
      {/* /////// ///////           Third section for slide                          //////////////////// */}
      <section className="portThirdSection">
        <Container>
          <Row>
            <Col>
              <h2 className="head1Port">
                Touch the hieght of <br />
                <span className="head1SpanPort">Creactivity</span>and{" "}
                <span className="head1SpanPort">Success</span>
              </h2>
            </Col>
          </Row>
        </Container>


        <div className="container-fluid flex-container pb-5 pt-5">
          <div className="row" >
            <div className="col-lg-6">
            </div>
            <div className="col-lg-6 d-flex portParaCol">
              <p className="m-1">
                <span className="SpanPort50">50+</span>
              </p>
              
                <p className="m-1 portfolioPara">
                  Projects Successfully crafted and delivered, within a span of{" "}
                  <span className="head1SpanPort">1.5 years.</span>
                </p>
             
            </div>
          </div>
        
        </div>

      </section>
      {/* /////// ///////          Fourth section for slide                          //////////////////// */}
      <section className="fourthSectionPort">
        <Slidercarosel
          heading={"The Centaurus Academy"}
          headColor={"brown"}
          category={"Web Development"}
          text={
            "The Centaurus Academy enhances education by streamlining class management, assignment tracking, assessments, reporting, and timetable management for students, teachers, administrators, and parents."
          }
          imageOne={uber2}
          imageTwo={uber3}
          imageThree={uberCover1}
          imageFour={uberHome2}
        />
        <Slidercarosel
          heading={"Good Earth Builders"}
          headColor={"rgba(51, 126, 61, 0.832)"}
          category={"UI/UX Design | Developmentt"}
          text={
            "GEB (Good Earth Builders) revolutionizes employee management by tracking work hours, projects, budgets, and generating invoices while providing a centralized hub for communication and location-based insights."
          }
          imageOne={uber2}
          imageTwo={uber3}
          imageThree={uberCover1}
          imageFour={uberHome2}
        />
      </section>
    </div>
  );
};

export default Portfolio;
