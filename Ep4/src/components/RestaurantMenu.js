import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { MENU_API, SUBMIT_ACTION_ENTER } from "../../utils/constants"

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)
  useEffect(() => {
    fetchMenu()
  }, [])
  const { resId } = useParams()
  // console.log(resId)
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId + SUBMIT_ACTION_ENTER)
    const json = await data.json()
    // console.log(json)
    // const { info } = json?.data?.cards[0]?.card?.card // hotel info
    // const { info } = json?.data?.cards[0]?.card?.card

    // // console.log(info)
    // const regularMenu =
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // console.log(regularMenu)
    // setHotelInfo(info)
    // setRegularMenu(regularMenu)
    // console.log(json.data)
    setResInfo(json.data)
  }

  if (resInfo === null) return <Shimmer />
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info
  // console.log(resInfo)
  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // console.log(itemCards)

  return (
    <div className="menu">
      {/*       
;<h1>{hotelInfo.name}</h1>
<span>{hotelInfo.city}</span> */}
      {/* <h1>{resInfo.</h1> */}
      {
        // console.log(resInfo.cards[0].card.card.info.name)
      }
      ;<h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/* ;<li>{itemCards[0].card.info.name}</li>
;<li>{itemCards[1].card.info.name}</li>
;<li>{itemCards[5].card.info.name}</li> */}

        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu
