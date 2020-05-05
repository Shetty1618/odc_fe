import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../styles/header.css";

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#home">MyODC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="New Request" id="basic-nav-dropdown">
                <NavDropdown.Item href="/odc">Remove later</NavDropdown.Item>
                <NavDropdown.Item href="/odc/fdo">
                  First day in office
                </NavDropdown.Item>
                <NavDropdown.Item href="/odc/ldo">
                  Last day in office
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
