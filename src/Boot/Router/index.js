import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';

function Router() {

  return (<Switch>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
  </Switch>)
}

export default Router;
