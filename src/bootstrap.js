import React from 'react';
import ReactDOM from 'react-dom';
import App from './Boot/App';
import { createBrowserHistory, createMemoryHistory } from 'history';

const element = document.getElementById('_react_dash');

function mount(element, { onNavigate, initialPath = "/" } = {}) {
  const memoryHistory = createMemoryHistory({ initialPath });
  memoryHistory.listen((location) => {
    if ((memoryHistory.location.pathname + memoryHistory.location.search) !== (location.pathname + location.search)) {
      onNavigate.push(location.pathname + location.search);
    }
  });

  const onParentNavigate = (fullpath) => {
    if ((memoryHistory.location.pathname + memoryHistory.location.search) !== fullpath) {
      memoryHistory.push(fullpath)
    }
  }

  ReactDOM.render(<App history={memoryHistory} onNavigate={onNavigate} initialPath={initialPath} />, element);

  return { onParentNavigate };
}

if (element) {
  const history = createBrowserHistory();
  const onNavigate = (fullPath) => {
    if ((history.location.pathname + history.location.search) !== fullPath) {
      history.push(fullPath);
    }
  };

  mount(element, { onNavigate, initialPath: location.pathname + location.search });
}

export { mount };
