import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default routes;
