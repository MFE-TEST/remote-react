import React from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import Router from '../Router';
import Header from '../../Components/Header';

function App({ history }) {
  return (
    <ReactRouter history={history}>
      <Header />
      <Router />
    </ReactRouter>
  );
}

export default App;
