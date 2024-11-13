import React from "react";
import { Link as RouterLink } from "react-router-dom";  // Renaming Link to avoid confusion
import { Link as ScrollLink } from "react-scroll";      // Importing Link from react-scroll
import './Headnavbar.css';
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Headnavbar = () => {
  return (
    <Navbar className='header-transparent' collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand>
          <h2 className="text-light">FLEACT TECH.</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          className='navbar-dark'
          variant='outline-light'
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='justify-content-end flex-grow-1 gap-4 navbarLinks'>
            <RouterLink className='m-2 text-decoration-none text-light navLinks' to='/'>
              Home
            </RouterLink>
            
            <ScrollLink 
              className='m-2 text-decoration-none text-light navLinks' 
              to='AboutSection'
              smooth={true} duration={500}
            >
              About
            </ScrollLink>
            
            <ScrollLink 
              className='m-2 text-decoration-none text-light navLinks' 
              to='ServicesSection'
              smooth={true} duration={500}
            >
              Services
            </ScrollLink>
            
            <RouterLink className='m-2 text-decoration-none text-light navLinks' to='/portfolio'>
              Portfolio
            </RouterLink>
            
            {/* <RouterLink className='m-2 text-decoration-none text-light navLinks' to='/blogs'>
              Blogs
            </RouterLink> */}
            
            <ScrollLink className='m-2 text-decoration-none text-light navLinks' to='ContactSection'
            smooth={true} duration={500}
            >
              <Button variant="outline-light" style={{ fontSize: '18px', borderRadius: '20px' }}>
                Contact Us
              </Button>
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headnavbar;
