import React from 'react';
import ReactDOM from 'react-dom';
import App from './Boot/App';

const element = document.getElementById('_react_dash');

function mount(element) {
  ReactDOM.render(<App />, element);
}

if (element) {
  mount(element);
}

export { mount };
