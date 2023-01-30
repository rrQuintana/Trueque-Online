import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  document.addEventListener(
    "contextmenu",
    function (event) {
      event.preventDefault();
    },
    false
  );
  return (
    <div className="App">
      <Banner />

      <Skills />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
