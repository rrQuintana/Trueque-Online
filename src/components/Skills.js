import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { AboutMe } from "./AboutMe";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Col } from "react-bootstrap";

export const Skills = () => {


  return (
    <section className="skill"  >
      <AboutMe></AboutMe>
      <div className="container" id="skills">
        <div className="row">
          <div className="col-12" >
            <div data-aos="fade-right" className="skill-bx d-flex wow zoomIn row justify-content-center" >
              <h2 >Habilidades</h2>
              <p>
                {" "}
                El desarrollo de software es un largo camino que sigo recorriendo. <br/> Aquí, algunas de mis habilidades.
              </p>
              <Col xs={12} md={12} xl={10} className="row align-items-start">
                <Col xs={12} md={5} xl={5}>
                  <h4 className=" text-start">Desarrollo Front End</h4>
                  <p className=" text-start">
                    - Html5 <br />
                    - Ccs3, Flexbox, Css Grid <br />
                    - Javascript <br />
                    - Responsive Web Design (Diseño adaptable)<br /> 
                    - UX/UI <br />
                    - Photoshop CS6, Illustrator CS6 <br />
                    - React, Bootstrap, SASS, Tailwind <br />
                    - Control de versiones: Git/GitHub
                  </p>
                </Col>
                <Col xs={0} md={2} xl={2}></Col>
                <Col xs={12} md={5} xl={5}>
                <h4 className=" text-start">Desarrollo Back End</h4>
                  <p className=" text-start">
                    - NodeJS <br />
                    - Firebase <br />
                    - Bases de datos SQL <br />
                    - Php 
                  </p>
                <h4 className=" text-start">Redes Sociales</h4>
                  <p className=" text-start">
                    - Facebook <br />
                    - Instagram <br />
                    - Whatsapp Business <br />
                    - Google Adds<br />
                  </p>
                </Col>
              </Col>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
