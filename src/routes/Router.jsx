import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import TreeCollectPage from '../pages/TreeCollectPage';

export default createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/collect',
    element: <TreeCollectPage />,
  },

]);
