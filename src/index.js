import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import GlobalContext from './GlobalContext';
import { createRoot } from 'react-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  
      <App />
    
  </React.StrictMode>
);


