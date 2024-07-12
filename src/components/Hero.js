import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-dark text-secondary min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col items-center text-center p-8 space-y-4">
        <h1 className="text-5xl font-bold animate-bounce hover:text-primary">
          Welcome to Nitin's Portfolio
        </h1>
        <p className="text-2xl">
          Discover my projects, skills, and experiences.
        </p>
        <div className="space-x-4 py-7">
          <a
            href="https://github.com/NitinShriram"
            className="px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-red-600"
          >
            Github
          </a>

          {/* <a
            href="https://www.linkedin.com/in/nitinshriram-/"
            className="px-6 py-3 bg-secondary text-black font-semibold rounded-full hover:bg-red-600"
          >
            LinkedIn
          </a> */}
          <a
            href="/125156081_NitinShriramS.pdf"
            className="px-6 py-3 bg-secondary text-black font-semibold rounded-full hover:bg-red-600"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
