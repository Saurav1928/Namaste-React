import RestaurantCard from './RestaurantCard'
// import resObj from "../../utils/mockData";
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

function checkRatings (restaurent) {
  return restaurent.info.avgRating >= 4.5
}
const url =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

const Body = () => {
  const [resList, setResList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filteredRes, setFilteredRes] = useState(resList)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(url)
    const json = await data.json()
    // console.log("json: ", json);
    const resp = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    setResList(resp)
    setFilteredRes(resp)
  }
  console.log('Body renders')

  // if ( resList.length === 0) {
  //   // console.log("Hii")
  //   return <Shimmer />
  // }


  return resList.length===0 ? <Shimmer/>: (
    <div className='body'>
      ;
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            value={searchText}
            placeholder='restaurant name..'
            onChange={e => {
              setSearchText(e.target.value)
              const searchedList= resList.filter((res)=>res.info.name.toLowerCase().includes(e.target.value.toLowerCase()))
              setFilteredRes(searchedList);
            }}
          ></input>
          <button
            onClick={() => {
              const searchedList = resList.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              //  console.log(searchedList);
              setFilteredRes(searchedList)
            }}
          >
            Search
          </button>
        </div>
        <button
          className='top-rated-btn'
          onClick={() => {
            let filteredList = resList.filter(checkRatings)
            setFilteredRes(filteredList)
          }}
        >
          Top Rated
        </button>
      </div>
      <div className='res-container'>
        {/* {resObj.map((x) => (
            <RestaurantCard resData={x} />
          ))} */}
        {filteredRes.map(restaurent => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  )
}

export default Body

