import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Flectfooter.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
const Flectfooter = () => {
  return (
    <div>
      <div className="containerDiv">
        <div class="position-absolute top-0 w-100 gradient-overlay"></div>
      </div>
      <Container className="mt-5">
        <Row>
          <Col lg={5} md={6} sm={12}>
            <h2>Fleact Teach.</h2>
            <p className="footer-para">
              Fleact Tech. is a technology services company, established in
              2022, driven to find cutting-edge technological solutions for
              businesses looking for strategy with a touch of style. Our team’s
              dedication and collaboration to produce efficient and productive
              solutions helps us stand out in the industry.
            </p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h5>Navigate</h5>
            <p>
              <ScrollLink
                // className="m-2 text-decoration-none "
                to="AboutSection"
                smooth={true}
                duration={500}
              >
                About
              </ScrollLink>
            </p>
            <p>
              <ScrollLink
                // className="m-2 text-decoration-none"
                to="ServicesSection"
                smooth={true}
                duration={500}
              >
                Services
              </ScrollLink>
            </p>
            <p>
              <RouterLink className="router-link-footer" to="/portfolio">
                Portfolio
              </RouterLink>
            </p>
            <p>
              <ScrollLink
                // className="m-2 text-decoration-none"
                to="ContactSection"
                smooth={true}
                duration={500}
              >
                Contact
              </ScrollLink>
            </p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Address</h5>
            <p className="footer-para">
              Fleact Tech., Ground Floor, Capital Technology Park, Office No,
              003 Park Rd, Islamabad, 45550
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Flectfooter;
