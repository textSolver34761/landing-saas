import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterBar from "./Footer";
import Welcome from "./pages/Welcome";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, Link } from "react-router-dom";
import {Pricing} from "./pages/Pricing";
import Admin from "./pages/Admin"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand as={Link} to="/"> Saas software </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/price"> Pricing </Nav.Link>
                    <NavDropdown title="Product" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#features"> Features </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Why us" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#trust"> They trust us </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Documentation" id="basic-nav-dropdown" >
                      <NavDropdown.Item href="#doc"> Documentation </NavDropdown.Item>
                      <NavDropdown.Item href="#webinar"> Webinar </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              <Nav.Link href="admin">Admin</Nav.Link> 
              </Container>
            </Navbar>
            <div>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/price" element={<Pricing />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </div>
          </>
        </header>
        <div>
          
        </div>
        <footer>
          <FooterBar />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
