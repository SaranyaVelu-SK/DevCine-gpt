import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import Error from './components/Error'
import Browse from './components/Browse'
import { useDispatch } from 'react-redux';

function App() {


  const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    errorElement: <Error />
  },
  {
    path: '/browse',
    element: <Browse />,
    errorElement: <Error />
  }
])



  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
