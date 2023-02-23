import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import backgroundImage from "./background.jpg";
import { useNavigate } from "react-router-dom";
import googleicon from "./google-icon.svg";
import { auth, provider } from "../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../../AuthContext";

function Login() {
  const [registro, setRegistro] = useState(true); //Manejadores de estado para registrar o logear

  //Data de login con Google
  const auth = getAuth();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //Login con google
  const logIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setIsAuthenticated(true);
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  //Crear un usuario
  function Registrar() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.alert(user.email + " registrado con exito");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        setRegistro(!registro);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  //Ingresar usuario
  function Ingresar() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setIsAuthenticated(true);
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div
              style={{ backgroundColor: "white", padding: "2rem" }}
              className="mt-3"
            >
              <div className="d-flex">
                <h1 className="text-black ms-3">Xchange Life</h1>
                <a href="#" className="m-auto me-5 text-secondary" onClick={()=>{navigate("/");}}>Regresar</a>
              </div>

              <br />
              {registro ? (
                <h2 className="text-black my-3">Login</h2>
              ) : (
                <h2 className="text-black my-3">Sign in</h2>
              )}
              <Form>
                <Form.Group>
                  <h5 className="text-secondary">Correo</h5>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <h5 className="text-secondary mt-4">Contraseña</h5>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="password"
                    required
                  />
                </Form.Group>

                <div className="d-flex d-flex row justify-content-center align-items-center">
                  {registro ? (
                    <>
                      <Button variant="primary" className="mt-3" onClick={Ingresar}>
                        Ingresar
                      </Button>
                      <p className="text-secondary mt-3 d-flex justify-content-center align-items-center">
                        No tienes cuenta?{" "}
                        <a
                          href="#"
                          onClick={() => {
                            setRegistro(!registro);
                          }}
                        >
                          {" "}
                          Registrate
                        </a>
                      </p>
                    </>
                  ) : (
                    <>
                      <Button variant="primary" className="mt-3" onClick={Registrar}>
                        Registrar
                      </Button>
                      <p className="text-secondary mt-3 d-flex justify-content-center align-items-center">
                        Ya tienes cuenta?{" "}
                        <a
                          href="#"
                          onClick={() => {
                            setRegistro(!registro);
                          }}
                        >
                          {" "}
                          Ingresa
                        </a>
                      </p>
                    </>
                  )}

                  <hr className="text-black" />
                  <p className="text-secondary d-flex justify-content-center align-items-center">
                    O inicia sesión usando
                  </p>
                  <a
                    href="#"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      src={googleicon}
                      style={{ width: 60 }}
                      alt="google-icon"
                      onClick={logIn}
                    />
                  </a>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
