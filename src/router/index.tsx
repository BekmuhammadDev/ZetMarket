import { createBrowserRouter } from 'react-router-dom';

import { Dashboard, AuthLayout } from '@layouts';
import {
  Leads,
  OrderCanceld,
  OrderCompleted,
  OrderNew,
  SignIn,
  Stats,
} from '@pages';

const router = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <Stats />,
      },
      {
        path: '/orders',
        element: <OrderNew />,
      },
      {
        path: '/order-canceld',
        element: <OrderCanceld />,
      },
      {
        path: '/order-completed',
        element: <OrderCompleted />,
      },

      {
        path: '/leads',
        element: <Leads />,
      },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>Not Found</h1>,
  },
];

export const AppRouter = createBrowserRouter(router);
