import { createBrowserRouter } from 'react-router-dom';

import { NotFoundPage } from '../pages/NotFoundPage';
import { LeaderBoardPage } from '../pages/LeaderBoardPage';
import { SchedulePage } from '../pages/SchedulePage';
import { RootLayout } from '../components/RootLayout';

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
