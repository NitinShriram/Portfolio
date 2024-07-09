import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b-4 border-gray-800 pb-2">
          Projects
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">Ransomware Detection System</h3>
            <a
              href="https://github.com/NitinShriram/Ransomware-Detection-System"
              className="text-blue-500"
            >
              GitHub
            </a>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>
                Developed a hybrid ransomware detection system (RDS) leveraging
                ensemble learning methods to classify 28 ransomware families in
                cryptocurrency transactions using the Bitcoin Heist dataset.
              </li>
              <li>
                Data pre-processing includes Label encoding, Address encoding,
                Normalization, MinMax scaling, SMOTE, Random underSampler,
                Outlier removal, new features construction, and feature
                selection.
              </li>
              <li>
                Implemented a Signature-Based RDS framework (Stage 1) utilizing
                supervised learning methods to identify known ransomware
                variants accurately. Methods used: Decision tree, Random Forest,
                XGBoost, MLP classifier.
              </li>
              <li>
                Designed an Anomaly-Based RDS framework (Stage 2) to detect
                zero-day ransomware strains by analyzing potentially suspicious
                occurrences categorized as "White" instances.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              To-Do app with voice recognition
            </h3>
            <a
              href="https://subtle-hummingbird-7507b5.netlify.app/"
              className="text-blue-500"
            >
              Live Link
            </a>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>
                Developed a web application using the MERN stack with integrated
                voice recognition via the react-speech-recognition library,
                allowing hands-free task management.
              </li>
              <li>
                The app features an intuitive interface for creating, updating,
                and organizing tasks, with a responsive design.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Chat Application - MERN</h3>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>
                Developed a MERN stack chat application supporting real-time
                one-on-one and group chats using Socket.IO.
              </li>
              <li>
                Implemented user authentication and authorization with JWT
                tokens, allowing login and signup via unique Gmail accounts.
              </li>
              <li>
                Designed a responsive UI with Chakra UI, ensuring seamless use
                across various devices.
              </li>
              <li>
                Enabled users to upload profile pictures during signup,
                utilizing Cloudinary for image storage and management.
              </li>
              <li>
                Added functionality for users to search for existing group chats
                and create new ones.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
