import { useState } from "react"
import ItemList from "./ItemList"

const FoodCategories = (props) => {
  const [showItems, setShowItems] = useState(false)
  const clickHandler = () => {
    setShowItems(!showItems)
  }
  // console.log(props)
  const { title, itemCards } = props?.card?.card
  return (
    <div className="bg-slate-200 mx-auto my-4 w-6/12 p-4 shadow-lg   rounded-md ">
      {/* Header */}
      <div
        className=" flex justify-between cursor-pointer"
        onClick={clickHandler}
      >
        <span className="text-lg">
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Body */}
      {showItems && <ItemList itemcard={itemCards} />}
    </div>
  )
}
export default FoodCategories
