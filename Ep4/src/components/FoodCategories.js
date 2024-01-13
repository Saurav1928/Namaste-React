import { useState } from "react"
import ItemList from "./ItemList"

const FoodCategories = ({ data, showItems, setShowIndex }) => {
  // console.log("hello from Food categories..")

  const clickHandler = () => {
    setShowIndex()
  }
  // console.log(props)
  const { title, itemCards } = data
  return (
    <div className="bg-slate-200 mx-auto my-4 w-6/12 p-4 shadow-lg   rounded-md ">
      {/* Header */}
      <div
        className=" flex justify-between cursor-pointer"
        onClick={clickHandler}
      >
        <span className="text-lg">
          {title} ({itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Body */}
      {showItems && <ItemList itemcard={itemCards} />}
    </div>
  )
}
export default FoodCategories
