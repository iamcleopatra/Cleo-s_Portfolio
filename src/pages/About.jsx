import React from 'react';
import cppLogo from '../assets/solidy.png';
import csharpLogo from '../assets/c-sharp.png';
import javaLogo from '../assets/java-4-logo.svg';
import flutterLogo from '../assets/flutter.png';
import mysqlLogo from '../assets/mysql-logo.svg';
import pythonLogo from '../assets/python.svg';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto">
        I am a dedicated software developer and educator working to bridge the digital divide by expanding
        tech education access to underserved communities. Skilled in Java, Python, and both mobile and web
        development, I create impactful solutions and mentor aspiring developers. Through SAMTEC -
        NextGen Coders, a startup I co-founded, I inspire young learners to build practical coding skills for the
        future. Driven by a passion for problem-solving, I bring expertise in full-stack development, hands-on
        learning, and community engagement, while actively supporting diversity and inclusion within the tech
        industry.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
      <div className="grid grid-cols-3 gap-6 justify-center items-center">
        <div className="bg-blue-500/20 rounded-lg p-4 shadow w-20 h-20 flex justify-center items-center">
          <img src={cppLogo} alt="Solidy" className="w-12 h-12" />
        </div>
        <div className="bg-blue-500/20 rounded-lg p-4 shadow w-20 h-20 flex justify-center items-center">
          <img src={csharpLogo} alt="C#" className="w-12 h-12" />
        </div>
        <div className="bg-blue-500/20 rounded-lg p-4 shadow w-20 h-20 flex justify-center items-center">
          <img src={javaLogo} alt="Java" className="w-12 h-12" />
        </div>
        <div className="bg-blue-500/20 rounded-lg p-4 shadow w-20 h-20 flex justify-center items-center">
          <img src={flutterLogo} alt="Flutter" className="w-12 h-12" />
        </div>
        <div className="bg-blue-500/20 rounded-lg p-4 shadow w-20 h-20 flex justify-center items-center">
          <img src={mysqlLogo} alt="MySQL" className="w-12 h-12" />
        </div>
        <div className="bg-blue-500/20 rounded-lg p-4 shadow w-20 h-20 flex justify-center items-center">
          <img src={pythonLogo} alt="Python" className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
};

export default About;
