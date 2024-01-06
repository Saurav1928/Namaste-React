import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError
} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'


const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
;<Outlet />

    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.querySelector('.root'))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)
