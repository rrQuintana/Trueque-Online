import { Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const AboutMe = () => {
  // Define the text to be typed and the initial state of the text
  const text = "Hola, ¿Cómo estás?";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Use an interval to update the typed text every 200 milliseconds
    const typingInterval = setInterval(() => {
      // If all the text has been typed, clear the interval
      if (typedText === text) {
        clearInterval(typingInterval);
      } else {
        // Add the next character to the typed text
        setTypedText(typedText + text[typedText.length]);
      }
    }, 300);

    // Clear the interval when the component is unmounted
    return () => clearInterval(typingInterval);
  }, [typedText]);

  return (
    <Container className="d-flex justify-content-center espacios">
      <Col xs={11} md={10} xl={8} className="">
        <div
          className=" dos text-center p-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Col xs={9} md={10} xl={10} className="mt-5 text-justify">
            <h3>{typedText}</h3>
            <br />
            <p className="Jsutificado">
              Hola, soy Roberto Quintana, estudiante de Ingeniería en Software
              en la Universidad La Salle Oaxaca, tengo experiencia en el
              desarrollo web y no solo tengo gusto en áreas de TI sino también
              en el Marketing digital y Diseño gráfico, me gusta poner en
              práctica mis habilidades y aumentar mi conocimiento haciendo lo
              que me gusta.
            </p>
          </Col>
        </div>
      </Col>
    </Container>
  );
};
