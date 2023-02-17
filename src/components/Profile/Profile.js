import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { NavBar } from "../LandingPage/NavBar";
import { AuthContext } from "../../AuthContext";
import { Link } from "react-router-dom";
import './Profile.css'

function Profile() {

  const { isAuthenticated } = useContext(AuthContext); //Saber si el usuario está autenticado
  const { isUser } = useContext(AuthContext); //Obtener los datos del usuario

  return (
    <div>
      <NavBar></NavBar>

      {isAuthenticated ? 
        (      
        <div className="bg-info vh-100 h-custom d-flex row justify-content-center align-items-center">
          <div className="bg-success container d-flex row m-3 flex-wrap justify-content-center align-items-center">
            <div
              className="d-flex row justify-content-center align-content-center"
            >
              <Col
                xs={11}
                md={10}
                xl={6}
                className="d-flex row justify-content-center align-content-center"
              >
                  <div className="profile-image-container">
                      <img src={isUser.photoURL} alt="profile pic" className="profile-image" />
                  </div>                
              </Col>

              <Col
                xs={11}
                md={10}
                xl={6}
                className="d-flex row justify-content-center"
              >
                <Row className="Inputs">
                  <h2>Nombre: </h2>
                  <p>{isUser.displayName}</p> <br />
                  <h2>Email: </h2>
                  <p>{isUser.email}</p> <br />
                </Row>
              </Col>
            </div>
          </div>
          <h1>Subir productos</h1>
          <Link to="/newProduct">Click</Link>
        </div>
        )
      :
        ( <h1>Sin inicio de sesión</h1> )
      }
    </div>
  );
}

export default Profile;
