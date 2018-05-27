import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dash from './components/Dash';

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard" component={Dash} />
    </Switch>
  );
}

export default routes;
