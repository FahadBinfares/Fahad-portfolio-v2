// import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import { useEffect, useState } from "react";
import heroImage from "./assets/Logos/Fahad-logo.png";

function App() {
  return (
    <>
      <div className="flex flex-col ">
        <TopButton />
        <Navbar
          About={About}
          Skills={Skills}
          Project={Project}
          Experience={Experience}
          Contact={Contact}
          Footer={Footer}
        />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
