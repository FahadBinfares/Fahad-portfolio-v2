import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import heroImage from "./assets/Logos/Fahad-logo.png";

function App() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = heroImage;
    image.onload = () => {
      setHeroLoaded(true);
    };

    const timer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const ready = heroLoaded && minimumTimePassed;

  return (
    <>
      {!ready && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <h1 className=" text-4xl font-bold text-[#FF6310] font-bold logo-loading ">
            Fahad Binfares
          </h1>
        </div>
      )}
      <div className="flex flex-col ">
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
