import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './redux/store';

import Home from './containers/Home';
import Faq from './containers/Faq';

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/faq" component={Faq} />
      {/* NOTE: put other app routes here */}
    </Switch>
  </ConnectedRouter>
);
export default routes;
