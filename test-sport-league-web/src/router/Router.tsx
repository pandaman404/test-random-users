import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const LeaderBoardPage = lazy(() => import('../pages/LeaderBoardPage'));
const SchedulePage = lazy(() => import('../pages/SchedulePage'));
const RootLayout = lazy(() => import('../components/RootLayout'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <SchedulePage />,
      },
      {
        path: 'schedule',
        element: <SchedulePage />,
      },
      {
        path: 'leaderboard',
        element: <LeaderBoardPage />,
      },
    ],
  },
]);
