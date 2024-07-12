import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-dark text-secondary py-8 px-4 sm:px-10"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 pt-5">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 hover:text-primary">
              B.Tech Computer Science Engineering (Artificial Intelligence and
              Data Science)
            </h3>
            <p className="text-lg">SASTRA University (CGPA - 9.3723)</p>
            <p className="text-lg">2021 – Present</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 hover:text-primary">
              Class XII
            </h3>
            <p className="text-lg">Shaanthi Schools (Percentage - 96.5%)</p>
            <p className="text-lg">2021</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 hover:text-primary">
              Class X
            </h3>
            <p className="text-lg">Shaanthi Schools (Percentage - 95%)</p>
            <p className="text-lg">2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
