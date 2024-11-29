import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PageCalculator from './pages/PageCalculator/PageCalculator.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/calculate',
        element: <PageCalculator />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
);
