import Home from '../pages/Home';
import Favorite from '../pages/Favorite';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    title: 'Home',
  },
  {
    path: '/favorite',
    exact: false,
    component: () => <Favorite />,
    title: 'Favorite',
  },
];
