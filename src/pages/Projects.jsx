import React from 'react';
import medfileImg from '../assets/medfile.png';  // Add relevant image paths
import shuffleUpImg from '../assets/shuffle.png';
import upcomingProjectImg from '../assets/upcoming.jpeg';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Medfile Project */}
        <div className="bg-gray-100 p-6 rounded-md shadow-lg">
          <img src={medfileImg} alt="Medfile Project" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Medfile</h3>
          <p className="mb-4">
            A clinic filing management system built with React, Node.js, and Tailwind CSS. It allows doctors and administrators to manage patient records and appointments.
          </p>
          <div className="flex justify-between">
            <a href="https://github.com/iamcleopatra/MedFile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repo</a>
            <a href="https://med-file-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live Demo</a>
          </div>
        </div>

        {/* Shuffle Up Project */}
        <div className="bg-gray-100 p-6 rounded-md shadow-lg">
          <img src={shuffleUpImg} alt="Shuffle Up Project" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Shuffle Up</h3>
          <p className="mb-4">
            An Android app to help indecisive friends decide what to do by randomly picking an activity from a list.
          </p>
          <div className="flex justify-between">
            <a href="https://github.com/iamcleopatra/shuffle_up" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repo</a>
            <a href="https://shuffle-up-demo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live Demo</a>
          </div>
        </div>

        {/* Upcoming Project */}
        <div className="bg-gray-100 p-6 rounded-md shadow-lg">
          <img src={upcomingProjectImg} alt="Upcoming Project" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upcoming Project</h3>
          <p className="mb-4">
            A new and exciting project currently in development. Stay tuned for more details!
          </p>
          <div className="flex justify-between">
            <a href="https://github.com/yourusername/upcoming-project" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repo</a>
            <a href="#" className="text-gray-500">Live Demo Coming Soon</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
