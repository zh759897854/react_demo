import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './theme/index.css';
import './theme/App.css';
import Login from './components/login'
import Table from './components/table'
import FlavorForm from './components/select'
import Game from './components/game'

ReactDOM.render(
  <React.StrictMode>
    <Login/>
    <Table/>
    <FlavorForm/>
    <Game/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
