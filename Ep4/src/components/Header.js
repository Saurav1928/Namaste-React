import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LOGO_URL } from "../../utils/constants"
// import useOnlineStatus from "../../utils/useOnlineStatus"

// let times = 1

const Header = () => {
  const [login, setLogin] = useState("Login")
  // console.log('Header rendered for ', times++, ' times ')
  // useEffect(() => {
  //   console.log('Use effect callled...')
  // })

  // const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between p-5 border border-solid text-lg items-center text-yellow-100 ">
      <div className="logo-container">
        <img className=" w-16  " src={LOGO_URL} alt="App-Logo" />
      </div>
      <div className="nav-items shadow-sm  ">
        <ul className="flex justify-between gap-4 ">
          {/* <li className="hover:text-yellow-500 ">
            Online status: {onlineStatus == true ? "Online" : "Offline"}
          </li> */}
          <li className="hover:text-yellow-500 ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-500 ">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-yellow-500 ">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="hover:text-yellow-500 ">
            {" "}
            <Link to="/swiggy">Swiggy</Link>
          </li>
          <li>
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              if (login == "Login") setLogin("Logout")
              else setLogin("Login")
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
