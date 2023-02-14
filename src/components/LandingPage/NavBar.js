import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/SVG/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import {
  getAuth,
  signOut,
} from "firebase/auth";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const { isUser } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const auth = getAuth();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //Proceso de cierre de seción con Google
  const logOut = () => {
    setIsAuthenticated(false);
    signOut(auth);
    setUser(null);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className="container">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="LogoIcon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="active navbar-link">
              Inicio
            </Link>
            <Link to="/productos" className="active navbar-link">
              Productos
            </Link>            
            {!isAuthenticated ? (
              <Link to="/login" className="active navbar-link">
              Log in
            </Link>
            ) : (
              <>
                <Link to="/profile" className="active navbar-link">
                  Perfil
                </Link>
                <Link onClick={logOut} to="/" className="active navbar-link">
                  Sign Out
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
