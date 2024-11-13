import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Cleopatra Mashabane</h1>
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 border rounded-md"
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <nav className={`lg:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#achievements" className="hover:text-gray-400">Achievements</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
