import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../LandingPage/NavBar";
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
  const [registro, setRegistro] = useState(false); //Manejadores de estado para registrar o logear

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
        console.log("Usuario creado: ", user);
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
    <div>
      <NavBar></NavBar>
      <h1>Esta es la página de login</h1> <br />
      {!registro ? (
        <>
          <h2>Log In</h2>
          <input type="email" placeholder="correo" id="email" required /> <br />
          <input
            type="passwprd"
            placeholder="contraseña"
            id="password"
            required
          />{" "}
          <br /> <br />
          <button className="btn btn-primary" onClick={Ingresar}>Iniciar sesión</button>
          <p>------------ o entra usando ------------</p>
          <a href="#" onClick={logIn}>
            {" "}
            <img src={googleicon} alt="google-icon" />{" "}
          </a>
          <p>
            No tienes cuenta?{" "}
            <a href="#" onClick={() => setRegistro(!registro)}>
              Registrate
            </a>
          </p>
        </>
      ) : (
        <>
          <h2>Sign In</h2>
          <input type="email" placeholder="correo" required id="email" /> <br />
          <input
            type="password"
            placeholder="contraseña"
            id="password"
            required
          />{" "}
          <br /> <br />
          <button className="btn btn-primary" onClick={Registrar}>
            Registrarse
          </button>
          <p>------------ o entra usando ------------</p>
          <a href="#" onClick={logIn}>
            {" "}
            <img src={googleicon} alt="google-icon" />{" "}
          </a>
          <p>
            Ya tienes cuenta?{" "}
            <a href="#" onClick={() => setRegistro(!registro)}>
              Ingresa
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
