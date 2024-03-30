import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage';
import LoggedIn from './LoggedInPage/LoggedIn';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function AppLayout(){
  return (
    <div className='w-screen h-auto bg-[#0B101B]'>
      <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <MainPage/>
      },
      {
        path: "/login",
        element: <LoggedIn/>
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>,
)
