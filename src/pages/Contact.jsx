import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-lg mb-4">Feel free to reach out to me via the following platforms:</p>
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="mailto:cynthiacleopatra03@gmail.com" className="text-blue-500 hover:text-blue-700">Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/cynthia-mashabane-252014226/" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/iamcleopatra" className="text-blue-500 hover:text-blue-700">GitHub</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
