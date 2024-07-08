import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
