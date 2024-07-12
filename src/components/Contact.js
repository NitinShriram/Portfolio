import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-secondary py-10 mb-10">
      <div className="container mx-auto text-center space-y-4">
        <h2 className="text-white text-3xl font-bold mb-7">Get in Touch</h2>
        <div className="space-x-4">
          <a
            href="mailto:125156081@sastra.ac.in"
            className="px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-red-600"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/nitinshriram-/"
            className="px-6 py-3 bg-secondary text-black font-semibold rounded-full hover:bg-red-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
