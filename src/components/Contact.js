import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b-4 border-gray-800 pb-2">
          Contact
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Email: 125156081@sastra.ac.in</li>
          <li>Phone: 7010022574</li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/nitin-shriram-s"
              className="text-blue-500"
            >
              Nitin Shriram S
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/NitinShriram" className="text-blue-500">
              NitinShriram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
