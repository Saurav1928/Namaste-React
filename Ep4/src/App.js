import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import RestaurantMenu from "./components/RestaurantMenu"
import { Provider } from "react-redux"
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
import UserContext from "../utils/UserContext"
import appStore from "../utils/appStore"
import Cart from "./components/Cart"
// import SwiggyMart from "./components/SwiggyMart"
// import useOnlineStatus from "../utils/useOnlineStatus"
// import Grocery from "./components/Grocery"

const Swiggy = lazy(() => import("./components/Swiggy"))
const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  const [userName, setUserName] = useState("Default Name")
  useEffect(() => {
    const data = {
      name: "Saurav",
    }
    setUserName(data.name)
  }, [])
  // const onlineStatus = useOnlineStatus()
  // if (onlineStatus == false) return <h2>Network Lost! Please check the connection!</h2>
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
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
