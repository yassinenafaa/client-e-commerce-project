import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/Actions/user";
import { Link } from "react-router-dom";
import "../Components/NavBar.css";
const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  return (
    <header>
      <Navbar class="navbar" style={{ backgroundColor: "#0B162C" }}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              className="img-logo"
              src="/imgLogo/logo-ecommerce.png"
              roundedCircle
            />
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/" style={{ color: "#FFFFFF" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/products" style={{ color: "#FFFFFF" }}>
              Products
            </Nav.Link>
            <Nav.Link href="/add" style={{ color: "#FFFFFF" }}>
              Add Product
            </Nav.Link>
            {isAuth ? (
              <Nav.Link href="/profile" style={{ color: "#FFFFFF" }}>
                Profile
              </Nav.Link>
            ) : null}
          </Nav>
          {isAuth ? (
            <Link to="/">
              <button className="logout" onClick={() => dispatch(logout())}>
                Logout
              </button>
            </Link>
          ) : (
            <div className="login">
              <Link to="/login">
                <button className="login button">Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
