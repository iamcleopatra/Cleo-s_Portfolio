import React from 'react';

const Achievements = () => {
  return (
    <div id="achievements" className="p-8">
      <h2 className="text-3xl font-bold mb-4">My Achievements</h2>
      <div className="relative space-y-8">
        {/* First Achievement */}
        <div className="flex items-center relative">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="ml-6 text-lg">Completed my software development diploma (2022)</div>
        </div>

        {/* Line connecting dots */}
        <div className="absolute left-4 top-4 w-0.5 h-full bg-gray-300"></div>

        {/* Second Achievement */}
        <div className="flex items-center relative">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="ml-6 text-lg">Volunteered at Geekulcha Mandela STEM Programme</div>
        </div>

        {/* Line connecting dots */}
        <div className="absolute left-4 top-16 w-0.5 h-full bg-gray-300"></div>

        {/* Third Achievement */}
        <div className="flex items-center relative">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
          <div className="ml-6 text-lg">Won the Women in Tech Africa Most Impactful Initiative Award</div>
        </div>

        {/* Line connecting dots */}
        <div className="absolute left-4 top-28 w-0.5 h-full bg-gray-300"></div>

        {/* Fourth Achievement */}
        <div className="flex items-center relative">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="ml-6 text-lg">Co-founded SAMTEC – NextGen Coders initiative</div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
