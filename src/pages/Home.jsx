import React from 'react';
import './Home.css'; // Custom styles for the home page
import logo from '../assets/images.png';

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="mascot">
      <img src={logo}  />
        <div className="thought-bubble">🌞</div>
      </div>
      <div className="intro-text">
        <h1>Hey there! <br /> I'm <span>Cleopatra.</span></h1>
        <p>A software developer combining art with logic. <br />
        I aspire to be a <span>Mobile Dev Engineer</span> and I enjoy building creative projects.</p>
      </div>
      {/* <div className="animation">
        <div className="pacman"></div>
        <div className="dots">
          {Array(8).fill(null).map((_, index) => <div key={index} className="dot"></div>)}
        </div>
      </div> */}
    </div>
  );
};

export default Home;
