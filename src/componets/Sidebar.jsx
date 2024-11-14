import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white p-6">
      <div className="flex flex-col items-center">
        <img src="/assets/darq walker_45.JPG" alt="Profile" className="rounded-full w-32 h-32 mb-4" />
        <h2 className="text-xl font-bold">Cleopatra Mashabane</h2>
        <p className="mb-4">Software Developer | Web Developer | Tech Educator</p>

        {/* <nav className="space-y-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#achievements" className="hover:text-gray-400">Achievements</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <a href="/cv" className="hover:text-gray-400">Download CV</a>
        </nav> */}
      </div>
    </div>
  );
};

export default Sidebar;
