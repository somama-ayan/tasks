import React from "react";
import "./Styles/Portfolio.css";
import Portfolioblognavbar from "../Components/Portfolioblognavbar";
import { Col, Container } from "react-bootstrap";
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
          <Col lg={6}>
            <h1 className="head1Port">
              Touching the heights of{" "}
              <span className="head1SpanPort">Creativity</span> and{" "}
              <span className="head1SpanPort">Success</span>.
            </h1>
          </Col>
        </Container>
      </section>
    </div>
  );
};

export default Portfolio;
