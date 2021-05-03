import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';

function Router({ onNavigate, onParentNavigate }) {
  // const history = useHistory();
  //
  // useEffect(() => {
  //   const unListen = history.listen((location, action) => {
  //     onNavigate(location.pathname + location.search);
  //   });
  //
  //   return () => {
  //     unListen();
  //   }
  // }, []);

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
