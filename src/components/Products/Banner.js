import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "animate.css";
import { NavBar } from "../LandingPage/NavBar";
import "aos/dist/aos.css";
import "./Products.css";

export const Banner = () => {
  // Define the text to be typed and the initial state of the text
  const Name = "Conoce más";
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
  const toRotate = ["Intercambia", "Ahorra", "Recicla"];
  const period = 1000;

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
        className="products-banner h-custom vh-100 d-flex justify-content-center align-items-center "
        id="home"
      >
        <Container
          className="d-flex justify-content-center align-items-center "
          id="Banner-Text-container "
        >
          <div className="Letras w-100" id="Banner-Text">
            <div data-aos="fade-right ">
              <h1 className="text-black w-50">
              Encuentra lo que necesitas para tus estudios en un solo lugar
              </h1>
              <h2>
                <span
                  className="txt-rotate size"
                  data-rotate='[ "Intercambia", "Ahorra", "Recicla" ]'
                >
                  <span className="wrap text-dark">{text}</span>
                </span>
              </h2>
              
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
