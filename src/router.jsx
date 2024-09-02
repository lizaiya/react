// import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// const Index = lazy(() => import('./pages/index.jsx'));
// const Login = lazy(() => import('./pages/login.jsx'));
import Index from '@/pages/index.jsx';
import Login from '@/pages/login.jsx';
// const Login = lazy(() => import('./pages/login.jsx'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  }
]);
export default router;
