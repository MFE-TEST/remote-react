import React from 'react';
import { Router as MemoryRouter } from 'react-router-dom';
import Router from '../Router';
import Header from '../../Components/Header';

function App({ history, onNavigate, initialPath = "/" }) {
  return (<MemoryRouter history={history}>
      <Header />
      <Router onNavigate={onNavigate} />
    </MemoryRouter>);
}

export default App;
