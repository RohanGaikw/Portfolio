import React from "react";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import  Footer from "./pages/Footer";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />


      </main>
    </>
  );
}

export default App;
