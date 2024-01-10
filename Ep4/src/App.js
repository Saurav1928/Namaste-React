import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import RestaurantMenu from "./components/RestaurantMenu"

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
// import SwiggyMart from "./components/SwiggyMart"
// import useOnlineStatus from "../utils/useOnlineStatus"
// import Grocery from "./components/Grocery"

const Swiggy = lazy(() => import("./components/Swiggy"))
const Grocery = lazy(() => import("./components/Grocery"))
const AppLayout = () => {
  // const onlineStatus = useOnlineStatus()
  // if (onlineStatus == false) return <h2>Network Lost! Please check the connection!</h2>
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/swiggy",
        element: (
          <Suspense>
            <Swiggy />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.querySelector(".root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)
