import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>
  </Provider >,
  document.getElementById('root')
);