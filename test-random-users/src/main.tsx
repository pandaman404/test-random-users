import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TanStackProvider from './providers/TanstackProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TanStackProvider>
    <App />
  </TanStackProvider>
);
