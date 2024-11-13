import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-lg mb-4">
        I'm Cleopatra Mashabane, a passionate Software Developer with a focus on web development. I am
        also dedicated to empowering the next generation through tech education.
      </p>
      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
      <ul className="flex justify-center space-x-6">
        <li className="text-gray-700">React</li>
        <li className="text-gray-700">Tailwind CSS</li>
        <li className="text-gray-700">Node.js</li>
        <li className="text-gray-700">Python</li>
        <li className="text-gray-700">SQL</li>
      </ul>
    </section>
  );
};

export default About;
