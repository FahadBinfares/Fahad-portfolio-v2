import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
