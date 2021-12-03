import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './components/Users';

ReactDOM.render(
  <React.StrictMode>
        <div>  <App /> <Users/></div>
  </React.StrictMode>,
  document.getElementById('root')
);

