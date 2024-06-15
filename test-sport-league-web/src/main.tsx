import ReactDOM from 'react-dom/client';
import { LeagueProvider } from './context/LeagueContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import './index.css';
import { GlobalStyles } from './components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LeagueProvider>
    <GlobalStyles />
    <RouterProvider router={router} />
  </LeagueProvider>
);
