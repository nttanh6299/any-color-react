import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { PublicRoute } from './layouts';
import routes from './routes';

const renderRoutes = routes => {
  if (routes.length > 0) {
    return routes.map((route, index) => {
      return (
        <PublicRoute
          key={index}
          path={route.path}
          exact={route.exact}
          layout={route.layout}
          component={route.component}
        />
      );
    });
  }
  return null;
};

function App() {
  return (
    <Router>
      <Switch>{renderRoutes(routes)}</Switch>
    </Router>
  );
}

export default App;
