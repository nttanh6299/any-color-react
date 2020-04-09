import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const PublicLayout = ({ children }) => (
  <>
    <Suspense fallback={<div></div>}>
      <main className="container">{children}</main>
    </Suspense>
  </>
);

export { PublicRoute, PublicLayout };
