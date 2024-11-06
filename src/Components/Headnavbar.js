import React from "react";
// import headlogo from "./logo.png";
import { Link } from "react-router-dom";
import './Headnavbar.css'

import { Container, Nav, Navbar, Button } from "react-bootstrap";
const Headnavbar = () => {
  return (
    <Navbar className='header-transparent bg-dark' collapseOnSelect expand='lg'>
    <Container>
      <Navbar.Brand>
        {/* <Image className='logoImage img-responsive' src={headlogo} /> */}
      </Navbar.Brand>
      <Navbar.Toggle
        className='navbar-dark'
        variant='outline-light'
        aria-controls='responsive-navbar-nav'
      />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='justify-content-end flex-grow-1 gap-4 navbarLinks'>
          <Link className='m-2 text-decoration-none text-light navLinks' to='/home'
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
          >Home</Link>
          <Link className='m-2 text-decoration-none text-light navLinks' to='/services'
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
          >Services</Link>
          <Link className='m-2 text-decoration-none text-light navLinks' to='/portfolio'
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
          >Portfolio</Link>
          <Link className='m-2 text-decoration-none text-light navLinks' to='/about'
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
          >About</Link>
           <Link
              className='m-2 text-decoration-none text-light navLinks'
              to='/contact'
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            ><Button style={{ background: 'purple', border: 'none' }}>
              Contact
          </Button>
            </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Headnavbar;
