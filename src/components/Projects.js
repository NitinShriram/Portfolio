import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "Ransomware Detection System",
      description: `
        - Developed a hybrid ransomware detection system (RDS) leveraging ensemble learning methods to classify 28 ransomware families in cryptocurrency transactions using the Bitcoin Heist dataset.
        - Data pre-processing includes Label encoding, Address encoding, Normalization, MinMax scaling, SMOTE, Random underSampler, Outlier removal, new features construction, and feature selection.
        - Implemented a Signature-Based RDS framework (Stage 1) utilizing supervised learning methods to identify known ransomware variants accurately. Methods used: Decision tree, Random Forest, XGBoost, MLP classifier.
        - Designed an Anomaly-Based RDS framework (Stage 2) to detect zero-day ransomware strains by analyzing potentially suspicious occurrences categorized as "White" instances.
      `,
      link: "https://github.com/NitinShriram/Ransomware-Detection-System",
    },
    {
      name: "To-Do App with Voice Recognition",
      description: `
        - Developed a web application using the MERN stack with integrated voice recognition via the react-speech-recognition library, allowing hands-free task management.
        - The app features an intuitive interface for creating, updating, and organizing tasks, with a responsive design.
      `,
      link: "https://subtle-hummingbird-7507b5.netlify.app/",
    },
    {
      name: "Chat Application - MERN",
      description: `
        - Developed a MERN stack chat application supporting real-time one-on-one and group chats using Socket.IO.
        - Implemented user authentication and authorization with JWT tokens, allowing login and signup via unique Gmail accounts.
        - Designed a responsive UI with Chakra UI, ensuring seamless use across various devices.
        - Enabled users to upload profile pictures during signup, utilizing Cloudinary for image storage and management.
        - Added functionality for users to search for existing group chats and create new ones.
      `,
      link: "",
    },
  ];

  return (
    <section id="projects" className="bg-dark text-secondary py-8 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-7">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projectList.map((project, index) => (
            <div key={index}>
              <div className="bg-gray-800 p-4 py-10 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-left text-lg px-6 whitespace-pre-wrap">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-secondary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
