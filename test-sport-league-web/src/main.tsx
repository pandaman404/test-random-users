import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import './index.css';
import { GlobalStyles } from './components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);
