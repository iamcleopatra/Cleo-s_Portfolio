import './index.css';
import 'font-awesome/css/font-awesome.min.css';


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // Ensure this is included to apply Tailwind styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This links to the div in index.html
);

