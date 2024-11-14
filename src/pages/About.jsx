import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-lg mb-4 max-w-3xl mx-auto">
        I am a dedicated software developer and educator working to bridge the digital divide by expanding
        tech education access to underserved communities. Skilled in Java, Python, and both mobile and web
        development, I create impactful solutions and mentor aspiring developers. Through SAMTEC -
        NextGen Coders, a startup I co-founded, I inspire young learners to build practical coding skills for the
        future. Driven by a passion for problem-solving, I bring expertise in full-stack development, hands-on
        learning, and community engagement, while actively supporting diversity and inclusion within the tech
        industry.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
      <ul className="flex justify-center space-x-6">
        <li className="text-gray-700">React</li>
        <li className="text-gray-700">Tailwind CSS</li>
        <li className="text-gray-700">Node.js</li>
        <li className="text-gray-700">Python</li>
        <li className="text-gray-700">SQL</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Key Strengths</h3>
      <ul className="text-left space-y-2 max-w-2xl mx-auto">
        <li className="flex items-center space-x-2">
          <i className="fa fa-check-circle text-green-500"></i>
          <span>Full-stack development expertise</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fa fa-check-circle text-green-500"></i>
          <span>Mentorship & Tech Education</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fa fa-check-circle text-green-500"></i>
          <span>Community Engagement & Diversity Advocate</span>
        </li>
      </ul>
    </section>
  );
};

export default About;
