import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Welcome />
  </BrowserRouter>,
  document.getElementById('root')
);