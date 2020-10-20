import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import './index.css';
render(
  <div className="main-section">

    <BrowserRouter>
      <h1>INTERNSHIP SIGNUP FORM</h1>
      <hr />


      <App />
    </BrowserRouter>
  </div>
  ,
  document.getElementById('root')
);

