import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import { NavBar } from "./NavBar";
import "aos/dist/aos.css";

export const Banner = () => {
  // Define the text to be typed and the initial state of the text
  const Name = "Veamos";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    // Use an interval to update the typed text every 200 milliseconds
    const typingInterval = setInterval(() => {
      // If all the text has been typed, clear the interval
      if (typedName === Name) {
        clearInterval(typingInterval);
      } else {
        // Add the next character to the typed text
        setTypedName(typedName + Name[typedName.length]);
      }
    }, 150);

    // Clear the interval when the component is unmounted
    return () => clearInterval(typingInterval);
  }, [typedName]);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <section
        className="banner h-custom vh-100 d-flex justify-content-center align-items-center "
        id="home"
      >
        <Container
          className="d-flex justify-content-center align-items-center "
          id="Banner-Text-container "
        >
          <div
            className="Letras w-100"
            id="Banner-Text"
          >
              <div data-aos="fade-right ">
                <h1>
                  Roberto Quintana
                  <br />
                  <span
                    className="txt-rotate size"
                    data-rotate='[ "Software Developer", "Web Developer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
              </div>
              <div data-aos="fade-right">
                <h2>Think twice, code once.</h2>
                <br />
                <h5>Desarrollo de sitios web front-end y aplicaciones.</h5>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1WYG17LkA9SLYAQoDkgs8F65kudwiQvSy/view?usp=sharing"
                  className="tagline text-decoration-none RevisarCV glowing-text"
                >
                  {" "}
                  <i className="fa-sharp fa-solid fa-folder m-2"></i> Revisar CV
                </a>
                <br /><br />
                <div className="d-flex mt-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/roberto-quintana-a83644243/"
                    className="m-2 contact-icons linkedin"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/rrQuintana"
                    className="m-2 contact-icons github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>

                <button>
                  {typedName} <ArrowRightCircle size={25} />
                </button>
              </div>
          </div>
              <div className="Banner-image d-none d-sm-block mt-5">
                <div className="BI-base">
                  <div className="BI-tab">
                    <div className="BI-ic1"></div>
                    <div className="BI-ic2"></div>
                    <div className="BI-ic3"></div>
                    <div className="BI-ic4"></div>
                  </div>
                </div>
              </div>
        </Container>
      </section>
    </>
  );
};
