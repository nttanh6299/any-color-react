import React, { useMemo } from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute } from './layouts';
import routes from './routes';
import Nav from './components/nav';

function App() {
  const renderRoutes = useMemo(() => {
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
  }, [routes]);

  const renderNav = useMemo(() => <Nav />, []);

  return (
    <>
      {renderNav}
      <Switch>{renderRoutes}</Switch>
    </>
  );
}

export default App;
