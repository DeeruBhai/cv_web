import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div className=" max-container border-[#fff]">
        <NavBar />
        <section id="home" className="h-[100vh]">
          <Home />
        </section>
        <section id="about" className="h-[100vh]">
          <About />
        </section>
        <section id="projects" className="h-[100vh]">
          <Projects />
        </section>
        <section id="contact" className="h-[100vh]">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
