import React from "react";
import "./Styles/Portfolio.css";
import Portfolioblognavbar from "../Components/Portfolioblognavbar";
import { Col, Container, Row } from "react-bootstrap";
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
        <Container fluid>
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
          <Col className="PortParaCol">
            <div>
              <p className="portfolioPara">
                <span className="head1SpanPort">50 + </span>
              </p>
            </div>
            
            <div className="col-lg-6 justify-content-end">
              <p className="portfolioPara">
                Projects Successfully crafted and delivered, within a span of{" "}
                <span className="head1SpanPort">1.5 Years</span>.
              </p>
            </div>
         
          </Col>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
