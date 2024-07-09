import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaPython,
  FaJava,
  FaCode,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="bg-dark text-secondary py-8 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center items-center space-x-6">
          <div className="flex flex-col items-center m-4">
            <FaHtml5 className="text-5xl text-primary hover:text-secondary" />
            <p className="mt-2">HTML5</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <FaCss3Alt className="text-5xl text-primary hover:text-secondary" />
            <p className="mt-2">CSS3</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <FaNodeJs className="text-5xl text-primary hover:text-secondary" />
            <p className="mt-2">Node.js</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <FaReact className="text-5xl text-primary hover:text-secondary" />
            <p className="mt-2">React</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <FaPython className="text-5xl text-primary hover:text-secondary" />
            <p className="mt-2">Python</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <FaJava className="text-5xl text-primary hover:text-secondary" />
            <p className="mt-2">Java</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <FaCode className="text-5xl text-primary hover:text-secondary" />
            <p className="mt-2">C++</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
