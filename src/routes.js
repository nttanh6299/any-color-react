import { lazy } from 'react';
import { PublicLayout } from './layouts';

const ColorsContainer = lazy(() => import('./containers/ColorsContainer'));
const GradientsContainer = lazy(() =>
  import('./containers/GradientsContainer')
);

const routes = [
  {
    path: '/colors',
    exact: true,
    layout: PublicLayout,
    component: ColorsContainer
  },
  {
    path: '/',
    exact: true,
    layout: PublicLayout,
    component: GradientsContainer
  }
];

export default routes;
