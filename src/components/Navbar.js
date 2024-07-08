import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Nitin Shriram S</div>
        <div>
          <a href="#profile" className="text-gray-300 hover:text-white mx-2">
            Profile
          </a>
          <a href="#education" className="text-gray-300 hover:text-white mx-2">
            Education
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white mx-2">
            Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white mx-2">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white mx-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
