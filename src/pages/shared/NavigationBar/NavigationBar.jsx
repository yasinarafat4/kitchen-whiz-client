import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="text-decoration-none" to="/">
            {" "}
            <Navbar.Brand className="fs-3"> Kitchen Whiz </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto gap-lg-3">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/about"
              >
                About
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Login
              </Nav.Link>
            </Nav>
            {/* <Nav>
              {user && (
                <FaUserCircle
                  style={{
                    fontSize: "2rem",
                    color: "black",
                    margin: "10px",
                  }}
                ></FaUserCircle>
              )}

              {user ? (
                <Button onClick={handleLogOut} className="px-5" variant="dark">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="px-5" variant="dark">
                    Login
                  </Button>
                </Link>
              )}
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
