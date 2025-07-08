import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import Body from './components/Body'
import Error from './components/Error'
import Browse from './components/Browse'
import { useEffect } from 'react'
import auth from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './store/userSlice';

function App() {

  const dispatch = useDispatch();

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

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    } else {
      dispatch(removeUser())
    }
  });
}, [])


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
