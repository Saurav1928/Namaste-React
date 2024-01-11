// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../../utils/useRestaurantMenu"
import { FOOD_URL } from "../../utils/constants"
// import { MENU_API, SUBMIT_ACTION_ENTER } from "../../utils/constants"

const RestaurantMenu = () => {
  const { resId } = useParams()
  // console.log(resId)
  // const fetchMenu = async () = > {
  //   const data = await fetch(MENU_API + resId)
  //   const json = await data.json()
  //   // console.log(json)
  //   // const { info } = json?.data?.cards[0]?.card?.card // hotel info
  //   // const { info } = json?.data?.cards[0]?.card?.card

  //   // // console.log(info)
  //   // const regularMenu =
  //   //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  //   // console.log(regularMenu)
  //   // setHotelInfo(info)
  //   // setRegularMenu(regularMenu)
  //   // console.log(json.data)
  //   setResInfo(json.data)
  // }

  const resInfo = useRestaurantMenu(resId)
  if (resInfo === null) return <Shimmer />
  // console.log(resInfo)
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  console.log(resInfo)
  // const snack =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.itemCards[0]?.card
  // console.log(snack)
  // console.log(resInfo)
  // console.log(info?.description)
  // console.log(info)
  // ?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.itemCards[0]?.card?.info
  // )
  return (
    <div className=" p-5 m-4 flex flex-wrap justify-center flex-col items-center ">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <div className="  m-4">
        <ul className="">
          {itemCards?.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="border-slate-400 p-2 flex justify-between gap-5"
            >
              <div className="flex flex-col max-w-[40rem]">
                <span className="font-bold ">{item?.card?.info?.name} </span>
                <span>
                  <span> ₹ {item?.card?.info?.price / 100}</span>
                </span>
                <div className="text-gray-500 text-sm font-sans">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div
                className="flex w-60
               flex-col relative gap-2 p-2 justify-center items-center border border-gray-200"
              >
                <img
                  src={FOOD_URL + item?.card?.info?.imageId}
                  className=""
                ></img>
                <span className="bg-slate-500 absolute bottom-0 py-1 px-2 rounded-md cursor-pointer hover:bg-green-200">
                  Add+
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu
