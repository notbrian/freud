import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { App } from 'components';

function routes() {
  return (
    <Switch>
      <Route exact path='/' component={App} />
    </Switch>
  );
}

export default routes;
