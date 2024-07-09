import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-secondary text-2xl font-bold hover:text-primary">
          <a href="#home">Nitin Shriram</a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-secondary hover:text-primary"
            onClick={toggleMenu}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-dark py-4 px-2`}
        >
          <div className="flex flex-col">
            <a
              href="#home"
              className="text-secondary text-lg hover:text-primary block py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#profile"
              className="text-secondary text-lg hover:text-primary block py-2"
              onClick={toggleMenu}
            >
              Profile
            </a>
            <a
              href="#education"
              className="text-secondary text-lg hover:text-primary block py-2"
              onClick={toggleMenu}
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-secondary text-lg hover:text-primary block py-2"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-secondary text-lg hover:text-primary block py-2"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-secondary text-lg hover:text-primary block py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {" "}
          {/* Hide on small screens */}
          <a href="#home" className="text-secondary text-lg hover:text-primary">
            Home
          </a>
          <a
            href="#profile"
            className="text-secondary text-lg hover:text-primary"
          >
            Profile
          </a>
          <a
            href="#education"
            className="text-secondary text-lg hover:text-primary"
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-secondary text-lg hover:text-primary"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-secondary text-lg hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-secondary text-lg hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
