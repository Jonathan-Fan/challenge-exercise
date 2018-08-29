import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import DataState from './dataState/DataState';
import './index.css';

const dataState = new DataState();

ReactDOM.render(
  <App dataState={dataState} />,
  document.getElementById('root') as HTMLElement
);
