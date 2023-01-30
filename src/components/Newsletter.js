import { Col, Row } from "react-bootstrap";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Newsletter = () => {
  const [enviado, setEnviado] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ylj5voo",
        "template_ea5x4pg",
        form.current,
        "N6ogHD1FfFklH8iBz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEnviado(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
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
        <h3>¿En qué te puedo ayudar?</h3>
        <h1>Contáctame</h1>
        <p>
          <i class="fa-solid fa-envelope"></i> rrquintana7@gmail.com
        </p>
        <p>
          <i class="fa-solid fa-location-dot"></i> Oaxaca, México.
        </p>
        <p className="mb-4">
          <i class="fa-solid fa-phone"></i> (+52) 951 101 6375
        </p>

        <div className="d-flex col-6 justify-content-center mb-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/roberto-quintana-a83644243/"
            className="m-2 contact-icons linkedin"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/rrQuintana"
            className="m-2 contact-icons github"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
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
          <form ref={form} onSubmit={sendEmail} className="d-felx row">
            <Col xs={12} md={6} xl={6}>
              <p>Nombre</p>
              <input
                type="text"
                name="user_name"
                id="fr-nombre"
                placeholder="Nombre"
                className="m-2"
              />
            </Col>
            <Col xs={12} md={6} xl={6}>
              <p>Correo</p>
              <input
                type="text"
                name="user_email"
                id="fr-correo"
                placeholder="correo@dominio.com"
                className="m-2"
              />
            </Col>
            <Col>
              <p>Asunto</p>
              <input
                type="text"
                rows="2"
                name="asunto"
                id="fr-mensaje"
                placeholder="Asunto"
                className="m-2"
              />
              <p>Mensaje</p>
              <textarea
                type="text"
                rows="2"
                name="message"
                id="fr-mensaje"
                placeholder="Mensaje"
                className="m-2 mensaje"
              />

              {enviado ? (
                <>
                  <br></br>
                  <button className="m-4 bg-success" type="reset">
                  {" "}
                  Mensaje enviado
                </button>
                </>
              ) : (
                <button className="m-4" type="submit">
                  {" "}
                  Enviar
                </button>
              )}
            </Col>
          </form>
        </Row>
      </Col>
    </div>
  );
};
