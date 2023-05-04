import React, { useContext } from "react";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Logout button
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar
        className="p-4"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#bb4042" }}
        variant="dark"
      >
        <Container>
          <Link className="text-decoration-none" to="/">
            {" "}
            <Navbar.Brand className="fs-1 me-md-5"> Kitchen Whiz </Navbar.Brand>
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

            <Nav className="d-flex align-items-center">
              {user && (
                <Image
                  title={user.displayName || "User"}
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "10px",
                    border: "2px solid white",
                  }}
                  src={user.photoURL || "https://picsum.photos/200/300"}
                  roundedCircle
                />
              )}

              {user ? (
                <button onClick={handleLogOut} className="log-btn">
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="log-btn">Login</button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
