import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import { StrictMode } from 'react';
import Body from './components/Body.jsx';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    errorElement:<Error />
  },
  {
    path:'/b',
    element:<Body/>,
    errorElement:<Error/>
  }
])


createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)
