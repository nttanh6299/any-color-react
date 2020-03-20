import React from 'react';
//use HashRouter if you want to deploy to github page
import { Switch, HashRouter } from 'react-router-dom';
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
    <HashRouter basename="/">
      <Switch>{renderRoutes(routes)}</Switch>
    </HashRouter>
  );
}

export default App;
