import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../../utils/useRestaurantMenu"
// import { FOOD_URL } from "../../utils/constants"
import FoodCategories from "./FoodCategories"
import { useState } from "react"

function myfun(item) {
  return (
    item?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
}
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null)
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)
  if (resInfo === null) return <Shimmer />

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
  // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.filter()
  let categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(myfun)
  // console.log(categories)

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        {categories.map((c, index) => (
          <FoodCategories
            key={c?.card?.card?.title}
            data={c?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default RestaurantMenu

// import { useParams } from "react-router-dom"
// import Shimmer from "./Shimmer"
// import useRestaurantMenu from "../../utils/useRestaurantMenu"
// import { FOOD_URL } from "../../utils/constants"

// function myfun(item) {
//   return (
//     item?.card?.card?.["@type"] ===
//     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   )
// }
// const RestaurantMenu = () => {
//   const { resId } = useParams()
//   const resInfo = useRestaurantMenu(resId)
//   if (resInfo === null) return <Shimmer />

//   const { name, costForTwoMessage, cuisines } =
//     resInfo?.cards[0]?.card?.card?.info

//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
//   // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
//   // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.filter()
//   let categories =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(myfun)
//   console.log(categories)

//   return (
//     <div className=" p-5 m-4 flex flex-wrap justify-center flex-col items-center ">
//       <h1 className="font-bold text-2xl">{name}</h1>
//       <p>
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>
//       <h2>Menu</h2>
//       <div className="  m-4">
//         <ul className="">
//           {itemCards?.map((item) => (
//             <li
//               key={item?.card?.info?.id}
//               className="border-slate-400 p-2 flex justify-between gap-5"
//             >
//               <div className="flex flex-col max-w-[40rem]">
//                 <span className="font-bold ">{item?.card?.info?.name} </span>
//                 <span>
//                   <span> ₹ {item?.card?.info?.price / 100}</span>
//                 </span>
//                 <div className="text-gray-500 text-sm font-sans">
//                   {item?.card?.info?.description}
//                 </div>
//               </div>
//               <div
//                 className="flex w-60
//                flex-col relative gap-2 p-2 justify-center items-center border border-gray-200"
//               >
//                 <img
//                   src={FOOD_URL + item?.card?.info?.imageId}
//                   className=""
//                 ></img>
//                 <span className="bg-slate-500 absolute bottom-0 py-1 px-2 rounded-md cursor-pointer hover:bg-green-200">
//                   Add+
//                 </span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default RestaurantMenu
