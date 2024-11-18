import React from 'react';
import cppLogo from '../assets/solidy.png';
import csharpLogo from '../assets/c-sharp.png';
import javaLogo from '../assets/java-4-logo.svg';
import flutterLogo from '../assets/flutter.png';
import mysqlLogo from '../assets/mysql-logo.svg';
import pythonLogo from '../assets/python.svg';
import './About.css'; // Include the necessary styles

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto">
        I am a dedicated software developer and educator working to bridge the digital divide by expanding
        tech education access to underserved communities. Skilled in Java, Python, and both mobile and web
        development, I create impactful solutions and mentor aspiring developers. Through SAMTEC -
        NextGen Coders, a startup I co-founded, I inspire young learners to build practical coding skills for the
        future.
      </p>

      <h3 className="text-3xl font-semibold mb-6">Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-6">
        <div className="tech-card">
          <img src={cppLogo} alt="Solidy" />
        </div>
        <div className="tech-card">
          <img src={csharpLogo} alt="C#" />
        </div>
        <div className="tech-card">
          <img src={javaLogo} alt="Java" />
        </div>
        <div className="tech-card">
          <img src={flutterLogo} alt="Flutter" />
        </div>
        <div className="tech-card">
          <img src={mysqlLogo} alt="MySQL" />
        </div>
        <div className="tech-card">
          <img src={pythonLogo} alt="Python" />
        </div>
      </div>
    </section>
  );
};

export default About;
