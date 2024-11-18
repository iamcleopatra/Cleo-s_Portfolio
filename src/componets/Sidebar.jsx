import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const viewResume = () => {
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6 rounded-tr-lg rounded-br-lg shadow-lg flex flex-col justify-between">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 p-4 rounded-full mb-4">
          <img
            src="/assets/darq walker_45.JPG"
            alt="Profile"
            className="rounded-full w-32 h-32"
          />
        </div>
        <h2 className="text-xl font-bold">Cleopatra Mashabane</h2>
        <p className="text-sm text-gray-400">Software Developer | Web Developer | Tech Educator</p>
        
        <hr className="w-full my-4 border-gray-700" />

        {/* Contact Information */}
        <div className="space-y-4 text-left">
          <div className="flex items-center space-x-3">
            <i className="fa fa-envelope text-yellow-500"></i>
            <div>
              <h3 className="text-xs font-semibold">EMAIL</h3>
              <span className="text-sm text-gray-300">cynthiacleopatra03@email.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fa fa-phone text-yellow-500"></i>
            <div>
              <h3 className="text-xs font-semibold">PHONE</h3>
              <span className="text-sm text-gray-300">+27 68 515 088</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fa fa-map-marker text-yellow-500"></i>
            <div>
              <h3 className="text-xs font-semibold">LOCATION</h3>
              <span className="text-sm text-gray-300">Johannesburg, South Africa</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr className="w-full my-4 border-gray-700" />
        {/* Social Links */}
        <div className="flex justify-around mb-4">
          <a href="https://github.com/iamcleopatra" target="_blank" className="text-gray-400 hover:text-yellow-500">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/cynthia-mashabane-252014226/" target="_blank" className="text-gray-400 hover:text-yellow-500">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-yellow-500">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        {/* View Resume Button */}
        <button
          onClick={viewResume}
          className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
