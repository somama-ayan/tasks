import React from "react";
// import headlogo from "./logo.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

import "./Portfolioblognavbar.css";

const Portfolioblognavbar = () => {
  return (
    <div>
      <Navbar className="portblogHeader" collapseOnSelect expand="lg">
        {/* <Container> */}
          <div className="col-lg-6">
            <Navbar.Brand>
              {/* <Image className='logoImage img-responsive' src={headlogo} /> */}
              <h2 className="text-dark">FLEACT TECH.</h2>
            </Navbar.Brand>
          </div>
          <div className="col-lg-6">
            <Navbar.Toggle
              className="navbar-dark"
              variant="outline-light"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbarBackground justify-content-end flex-grow-1 gap-4 navbarLinks">
                <Link
                  className="m-2 text-decoration-none text-dark navLinks"
                  to="/home"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Home
                </Link>
                <Link
                  className="m-2 text-decoration-none text-dark navLinks"
                  to="/about"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  About
                </Link>
                <Link
                  className="m-2 text-decoration-none text-dark navLinks"
                  to="/services"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Services
                </Link>
                <Link
                  className="m-2 text-decoration-none text-dark navLinks"
                  to="/portfolio"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Portfolio
                </Link>
                <Link
                  className="m-2 text-decoration-none text-dark navLinks"
                  to="/blogs"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Blogs
                  
                </Link>
                <Link
                  className="m-2 text-decoration-none text-dark navLinks"
                  to="/contact"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <Button variant="outline-light" style={{color: 'rgb(41, 21, 96)', fontSize:'18px', border: '2px solid rgb(41, 21, 96)', borderRadius: '20px' }}>
                    Contact
                  </Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default Portfolioblognavbar;
