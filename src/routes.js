import React, { lazy } from 'react';
import { PublicLayout } from './layouts';

const ColorsContainer = lazy(() => import('./containers/ColorsContainer'));
const GradientsContainer = lazy(() =>
  import('./containers/GradientsContainer')
);

const routes = [
  {
    path: '/',
    exact: true,
    layout: PublicLayout,
    component: ColorsContainer
  },
  {
    path: '/gradients',
    exact: true,
    layout: PublicLayout,
    component: GradientsContainer
  }
];

export default routes;
