import React from 'react';
import ReactDOM from 'react-dom';
import App from './Boot/App';
import { createBrowserHistory } from 'history';

const element = document.getElementById('_react_dash');

function mount(element, {  history } = {}) {
  ReactDOM.render(<App history={history} />, element);
}

if (element) {
  const history = createBrowserHistory({ basename: BASE_NAME });

  mount(element, { history });
}

export { mount };
