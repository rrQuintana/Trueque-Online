import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import Reacticon from "../assets/img/SVG/react-icon.svg";
import Bsicon from "../assets/img/SVG/bs-icon.svg";
import Firebaseicon from "../assets/img/SVG/firebase-icon.svg";
import IllustratorIcon from "../assets/img/SVG/illustrator-icon.svg";
import PhotoshopIcon from "../assets/img/SVG/photoshop-icon.svg";
import html5Icon from "../assets/img/SVG/html5-icon.svg";
import css3Icon from "../assets/img/SVG/css3-icon.svg";
export const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const projects = [
    {
      title: "Login y registro",
      description:
        "En este proyecto se demuestra el registro y acceso de usuarios con distintos roles para ingresar a un sistema el cual tiene validaciones de entrada",
      demoLink: (
        <h5>
          <a
            href="https://fir-auth-ba2d9.web.app/"
            target="_blank"
            className="text-light"
          >
            Demo
          </a>
        </h5>
      ),
      imgUrl: projImg1,
      icon: (
        <div>
          <img src={Reacticon} className="icon" alt="reactIcon"></img>
          <img src={Bsicon} className="icon" alt="bootstrapIcon"></img>
          <img src={Firebaseicon} className="icon" alt="firebaseIcon"></img>
        </div>
      ),
    },
    {
      title: "Friendly Chat",
      description:
        "En este proyecto se muestra un chat global en el que los usuarios registrados pueden escribir comentarios o publicar fotografías",
      demoLink: (
        <h5>
          <a
            href="https://friendlychat-b41c2.web.app/"
            target="_blank"
            className="text-light"
          >
            Demo
          </a>
        </h5>
      ),
      imgUrl: projImg2,
      icon: (
        <div>
          <img src={Reacticon} className="icon" alt="reactIcon"></img>
          <img src={Bsicon} className="icon" alt="bootstrapIcon"></img>
          <img src={Firebaseicon} className="icon" alt="firebaseIcon"></img>
        </div>
      ),
    },
  ];
  const designs = [
    {
      title: "Portafolio web",
      description:
        "En este proyecto desarrollé el maquetado de este sitio web así como algunos de sus componentes",
      imgUrl: projImg3,
      icon: (
        <div>
          <img src={IllustratorIcon} className="icon" alt="reactIcon"></img>
          <img src={PhotoshopIcon} className="icon" alt="reactIcon"></img>
        </div>
      ),
    },
    {
      title: "Banner para portafolio",
      description:
        "Para este proyecto animé con css y html un vecor SVG",
      imgUrl: projImg4,
      icon: (
        <div>
          <img src={IllustratorIcon} className="icon" alt="reactIcon"></img>
          <img src={html5Icon} className="icon html5" alt="htmlIcon"></img>
          <img src={css3Icon} className="icon" alt="cssIcon"></img>
        </div>
      ),
    },
    {
      title: "Logo personal",
      description:
        "Este diseño nace de la combinación de las letras R y Q referentes a Roberto Quintana, se hizo combinando las letras con diferentes fuentes",
      imgUrl: projImg5,
      icon: (
        <div>
          <img src={IllustratorIcon} className="icon" alt="reactIcon"></img>
        </div>
      ),
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12} data-aos="fade-up">
            <div>
              <h2>Proyectos</h2>
              <p>Mi mejor carta de presentación es mi trabajo.</p>
              <br />
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Software</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Diseño</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row className="d-flex justify-content-evenly">
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row className="d-flex justify-content-evenly">
                      {designs.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
