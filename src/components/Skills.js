import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b-4 border-gray-800 pb-2">
          Skills
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Programming Languages: C++, JAVA, Python</li>
          <li>Web Development: HTML, CSS, Node, React</li>
          <li>Database: SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
