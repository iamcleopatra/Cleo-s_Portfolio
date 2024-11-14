import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white p-6">
      <div className="flex flex-col items-center">
        <img
          src="/assets/darq walker_45.JPG"
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4"
        />
        <h2 className="text-xl font-bold">Cleopatra Mashabane</h2>
        <p className="mb-4">Software Developer | Web Developer | Tech Educator</p>

        {/* Contact Information */}
        <div className="space-y-4 mt-6 text-center">
          <div className="flex items-center space-x-2">
            <i className="fa fa-envelope text-gray-300"></i>
            <span className="text-sm">cynthiacleopatra03@email.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fa fa-phone text-gray-300"></i>
            <span className="text-sm">+276 851 5088</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fa fa-map-marker text-gray-300"></i>
            <span className="text-sm">Johannesburg, South Africa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
