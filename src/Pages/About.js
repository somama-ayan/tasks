import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnimatedNumber from 'react-animated-number';
import "./Styles/About.css";
import AnimatedCircle from "../Components/AnimatedCircle";


const About = () => {
  const [clientSatisfaction, setClientStatisfaction] = useState(95)
  const [efficientSolution, setefficientSolution] = useState(80)
  console.log(clientSatisfaction);
  return (
    <section id="AboutSection">
      <div className="TopDiv">
      <div class="position-absolute top-0 w-100 gradient"></div>
      </div>
      <Container className="p-3">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="about-card1">
              <p className="about-head">
                We are <br />
                <span className="aboutSpan">FLeact Tech.</span>
               <div className="about-line"></div>
              </p>
              {/* <p className="about-head1">Fleact Tech</p> */}

              <p className="about-head-para">
                Our vision is to pioneer strategic solutions, <span>revolutionizing
                industries</span> and <span>enriching lives</span> through innovation and
                excellence. We aim to set new benchmarks in technology,
                empowering individuals and organizations worldwide for a
                brighter future.
              </p>
              <button className="mb-3">GET A QUOTE TODAY</button>
            </div>
          </Col>
      <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center">
  <div className="wholeDiv">
    <div className="aboutDivBox">
      <div className="circle">
      <AnimatedCircle targetPercent={clientSatisfaction} data-aos="fade-left" data-aos-delay="100"/>
      </div>
      <p>
        <span className="boxSpan">
          <AnimatedNumber
            key={clientSatisfaction}
            value={95}
            fontStyle={{ fontSize: '3rem', color: '#ffffff' }}
            config={{ tension: 50, friction: 10 }}
            formatValue={(n) => `${Math.round(n)}%`}
            duration={3000}
          />
        </span>
        <br />
        Client Satisfaction
      </p>
    </div>

    <div className="aboutDivBox">
      <div className="circle">
        <AnimatedCircle targetPercent={efficientSolution} />
      </div>
      <p>
        <span className="boxSpan">
          <AnimatedNumber
            key={efficientSolution}
            value={80}
            fontStyle={{ fontSize: '3rem', color: '#ffffff' }}
            config={{ tension: 50, friction: 10 }}
            formatValue={(n) => `${Math.round(n)}%`}
            duration={3000}
          />
        </span>
        <br />
        Strategically Efficient Solutions
      </p>
    </div>
  </div>
</Col>


        </Row>
      </Container>
      <div className="BottomDiv">
      <div class="position-absolute top-0 w-100 gradientBottom"></div>
      </div>
    </section>
  );
};

export default About;
