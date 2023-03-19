import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const WeSpaceNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" style={{ paddingLeft: 30 }}>
        <b>We</b>
        <span style={{ color: "#94B045" }}>
          <b>Space</b>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ml-auto d-flex justify-content-end"
          style={{ width: "100%", paddingRight: 10 }}
        >
          <Nav.Link href="#about" style={{ paddingLeft: 30 }}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/spring-23/32/branch-leaf-spring-easter-nature-ecology-green-256.png"
              width="20"
              height="20"
            />
            <b> เกี่ยวกับเรา</b>
          </Nav.Link>
          <Nav.Link href="#contribute" style={{ paddingLeft: 30 }}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/activity-6/512/activity_sport-77-256.png"
              width="20"
              height="20"
            />
            <b> Contribute us</b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default WeSpaceNavbar;
