import { createHashRouter } from 'react-router-dom';
import Home from './components/Home';
import Animals from './components/Animals';
import Animal from './components/Animal';
import NotFound from './components/NotFound';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home></Home>,
    index: true,
  },
  {
    path: '/animals',
    element: <Animals></Animals>,
  },
  {
    path: '/animal/:id',
    element: <Animal></Animal>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
