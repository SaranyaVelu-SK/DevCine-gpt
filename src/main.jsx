import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import { StrictMode } from 'react';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body />,
    errorElement:<Error />
  },
  {
    path:'/sample',
    element:<LoginForm/>,
    errorElement:<Error/>
  }
])


createRoot(document.getElementById('root')).render(<App />)
