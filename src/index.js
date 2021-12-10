import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/routes';
import GlobalStyles from'./styles/global'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
