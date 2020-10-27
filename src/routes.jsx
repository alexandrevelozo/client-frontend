import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import RegisterAccount from './pages/RegisterAccount';
// import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './views/Users';
import Products from './views/Products';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={RegisterAccount} />

      <Dashboard>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Dashboard>
      
    </Switch>
  </BrowserRouter>
);

export default Routes;
