import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default App;
