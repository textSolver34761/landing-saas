//import { render } from '@testing-library/react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

//class NavBarr extends React.Fragment {
function NavBarr() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Saas software</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/price">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#features">Features</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Why us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#trust">They trust us</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Documentation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#doc">Documentation</NavDropdown.Item>
              <NavDropdown.Item href="#webinar">Webinar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarr;