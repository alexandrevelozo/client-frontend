import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/User/Main';
import Login from './pages/Login';
import RegisterAccount from './pages/RegisterAccount';
// import Header from './components/Header';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/usuarios" component={Main} />
      <Route exact path="/create-account" component={RegisterAccount} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
