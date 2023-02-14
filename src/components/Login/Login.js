import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../LandingPage/NavBar";
import googleicon from "./google-icon.svg";
import { auth, provider } from "../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { AuthContext } from "../../AuthContext";

function Login() {
  const [registro, setRegistro] = useState(false);
  //Proceso de login con Google
  const auth = getAuth();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

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

  return (
    
    <div>
      <NavBar></NavBar>
      <h1>Esta es la página de login</h1> <br />
      {registro ? (
        <>
          <h2>Log In</h2>
          <input type="email" placeholder="correo" required /> <br />
          <input
            type="passwprd"
            placeholder="contraseña"
            required
          /> <br /> <br />
          <button className="btn btn-primary">Iniciar sesión</button>
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
          <input type="email" placeholder="correo" required /> <br />
          <input
            type="passwprd"
            placeholder="contraseña"
            required
          /> <br /> <br />
          <button className="btn btn-primary">Registrarse</button>
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
