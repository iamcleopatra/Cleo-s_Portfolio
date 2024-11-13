import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Medfile</h3>
          <p className="mb-4">
            A clinic filing management system built with React, Node.js, and Tailwind CSS. It allows
            doctors and administrators to manage patient records and appointments.
          </p>
          <p className="text-gray-600">Tech Stack: React, Node.js, MongoDB, Tailwind CSS</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">WeShare</h3>
          <p className="mb-4">
            A social expense tracker for friends and roommates to track and share expenses. Built with
            React, Node.js, and SQL.
          </p>
          <p className="text-gray-600">Tech Stack: React, Node.js, SQL</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Shuffle Up</h3>
          <p className="mb-4">
            An Android app to help indecisive friends decide what to do by randomly picking an activity
            from a list.
          </p>
          <p className="text-gray-600">Tech Stack: Java, Android Studio</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
