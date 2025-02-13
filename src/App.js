import React from 'react' ;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const appRouter = createBrowserRouter([
  {
    path: '/login-logout-page/',
    element: <Login />
  },
  {
    path: '/login-logout-page/dashboard/',
    element: <Dashboard />
  }
])

const App = () => {
  return (
      <RouterProvider router={appRouter} />
  )
}

export default App ;
