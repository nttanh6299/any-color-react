import React, { lazy } from 'react';
import { PublicLayout } from './layouts';

const ColorsContainer = lazy(() => import('./containers/ColorsContainer'));

const routes = [
  {
    path: '/',
    exact: true,
    layout: PublicLayout,
    component: ColorsContainer
  }
];

export default routes;
