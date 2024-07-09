import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="font-sans bg-dark text-secondary">
      <Navbar />
      <Hero />
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
