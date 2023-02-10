import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/SVG/Logo.svg";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { AuthContext } from "../../AuthContext";


export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  //Proceso de login con Google
  const auth = getAuth();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);

  const logIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setIsAuthenticated(true);
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  //Proceso de cierre de seción con Google
  const logOut = () => {
    setIsAuthenticated(false);
    signOut(auth)
    setUser(null);
  }

  //Revisar si el usuario está autenticado
  const { isAuthenticated } = useContext(AuthContext);
  const { isUser } = useContext(AuthContext);
  

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
              <Link onClick={logIn} className="active navbar-link">
                Iniciar con Google
              </Link>
            ) : (
              <>
                <Link to="/profile" className="active navbar-link">
                  Perfil
                </Link>
                <Link onClick={logOut} className="active navbar-link">
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
