import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Styles/About.css";

const About = () => {
  return (
    <section id="AboutSection">
      <Container>
        <Row>
          <Col sm={8}>
            <div className="about-card1">
              <p className="about-head">
                We are <br />
                <span>FLeact Tech.</span>
                <hr className="about-line" />
              </p>
              {/* <p className="about-head1">Fleact Tech</p> */}

              <p className="about-head-para">
                Our vision is to pioneer strategic solutions, revolutionizing
                industries and enriching lives through innovation and
                excellence. We aim to set new benchmarks in technology,
                empowering individuals and organizations worldwide for a
                brighter future.
              </p>
              <button>GET A QUOTE TODAY</button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
