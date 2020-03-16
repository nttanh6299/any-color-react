import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../components/nav';

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
    <Nav />
    <Suspense fallback={<div></div>}>
      <main>{children}</main>
    </Suspense>
  </>
);

export { PublicRoute, PublicLayout };
