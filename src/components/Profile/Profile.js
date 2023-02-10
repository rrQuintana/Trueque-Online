import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { NavBar } from "../LandingPage/NavBar";
import { AuthContext } from "../../AuthContext";
import './Profile.css'

function Profile() {
  const { isUser } = useContext(AuthContext); //Obtener los datos del usuario
  console.log(isUser);

  return (
    <div>
      <NavBar></NavBar>

      <div className="bg-info vh-100 h-custom d-flex row justify-content-center align-items-center">
        <div className="bg-success container-fluid d-flex row m-3 flex-wrap justify-content-center align-items-center">
          <div
            data-aos="fade-in"
            className="container d-flex row justify-content-center align-content-center contacto"
          >
            <Col
              xs={11}
              md={10}
              xl={6}
              data-aos="fade-left"
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
              data-aos="fade-right"
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
      </div>
    </div>
  );
}

export default Profile;
