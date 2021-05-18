import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import RouterController from './RouterController';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterController></RouterController>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

