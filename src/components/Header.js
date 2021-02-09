import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "../config/Router";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-item">
          <div className="nav-links">
            <Router>
              {routes.map((route) => (
                <li key={route.title}>
                  <Link to={route.path}>{route.title}</Link>
                </li>
              ))}
              <Switch>
                {routes.map((route) => (
                  <Route
                    exact={route.exact}
                    path={route.path}
                    key={route.title}
                  >
                    {route.component()}
                  </Route>
                ))}
              </Switch>
            </Router>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
