import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./Portfolioblognavbar.css";

const Portfolioblognavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle scrolling from other pages
  const handleScrollToSection = (section) => {
    if (location.pathname !== "/") {
      // If not on the homepage, navigate to it first
      navigate("/", { replace: true });
      setTimeout(() => {
        // Scroll to section after navigation
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
      }, 100); // Adjust delay if needed
    } else {
      // If already on homepage, just scroll
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar className="portblogHeader" collapseOnSelect expand="lg">
        {/* <Container className="mx-auto px-5 pt-4 pb-6"> */}
        <div className="col-lg-4">
          <Navbar.Brand>
            <h2 className="text-dark">FLEACT TECH.</h2>
          </Navbar.Brand>
        </div>
        <div className="col-lg-8">
          <Navbar.Toggle
            className="navbar-dark"
            variant="outline-light"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbarBackground align-items-center justify-content-center flex-grow-1 navbarLinks">
              <RouterLink className="m-2 text-decoration-none text-dark navLinks" to="/">
                Home
              </RouterLink>
              
              {/* About and Services Links */}
              <span
                className="m-2 text-decoration-none text-dark navLinks"
                onClick={() => handleScrollToSection("AboutSection")}
              >
                About
              </span>
              <span
                className="m-2 text-decoration-none text-dark navLinks"
                onClick={() => handleScrollToSection("ServicesSection")}
              >
                Services
              </span>

              <RouterLink className="m-2 text-decoration-none text-dark navLinks" to="/portfolio">
                Portfolio
              </RouterLink>
              <RouterLink className="m-2 text-decoration-none text-dark navLinks" to="/blogs">
                Blogs
              </RouterLink>
              <span className="m-2 text-decoration-none text-dark navLinks"
               onClick={() => handleScrollToSection("ContactSection")}
              >
                <Button className="portblognavbarButton"variant="outline-light">
                  Contact Us
                </Button>
              </span>
            </Nav>
          </Navbar.Collapse>
        </div>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default Portfolioblognavbar;
