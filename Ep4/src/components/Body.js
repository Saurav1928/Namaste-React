import RestaurantCard, { RestaurantCardWithVeg } from "./RestaurantCard"

import { useState, useEffect, useContext } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { RES_URL } from "../../utils/constants"
import UserContext from "../../utils/UserContext"
function checkRatings(restaurent) {
  return restaurent.info.avgRating >= 4.5
}

const Body = () => {
  const [resList, setResList] = useState([])
  const [searchText, setSearchText] = useState("")
  const [filteredRes, setFilteredRes] = useState(resList)
  const { setUserName, loggedInUser } = useContext(UserContext)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(RES_URL)
    const json = await data.json()

    const resp =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(resp)
    setResList(resp)
    setFilteredRes(resp)
  }

  if (resList?.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search p-5 flex gap-2">
          <input
            className="px-2 py-1 text-yellow-400 focus:2 focus:ring-blue-500 rounded-md"
            type="text"
            value={searchText}
            placeholder="Restaurant name.."
            onChange={(e) => {
              setSearchText(e.target.value)
              const searchedList = resList.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(e.target.value.toLowerCase())
              )
              setFilteredRes(searchedList)
            }}
          ></input>

          <button
            className=" bg-yellow-300 px-2 rounded-md "
            onClick={() => {
              const searchedList = resList.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              )
              setFilteredRes(searchedList)
            }}
          >
            Search
          </button>
          <button
            className="top-rated-btn bg-green-300 px-2 rounded-md  "
            onClick={() => {
              let filteredList = resList?.filter(checkRatings)
              setFilteredRes(filteredList)
            }}
          >
            Top Rated
          </button>
          <input
            className="border border-black p-2"
            placeholder="Name.."
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          ></input>
        </div>
      </div>
      <div className="m-4 p-4 flex flex-wrap justify-center">
        {filteredRes.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurant/" + restaurent.info.id}
          >
            {restaurent &&
            restaurent.info &&
            restaurent.info.veg !== undefined ? (
              <RestaurantCardWithVeg
                RestaurantCard={RestaurantCard}
                resData={restaurent}
              />
            ) : (
              <RestaurantCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
