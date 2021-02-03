import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { routes } from '../config/Router';

const Navbar = () => {
  return (
    <Router>
      {routes.map((route) => (
        <li key={route.title}>
          <Link to={route.path}>{route.title}</Link>
        </li>
      ))}
      <Switch>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path} key={route.title}>
            {route.component()}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default Navbar;
