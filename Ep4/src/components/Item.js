import { useDispatch } from "react-redux"
import { addItem } from "../../utils/cartSlice"
const Item = (props) => {
  // console.log("Items..")
  const dispatch = useDispatch()
  // console.log(props.item.card)
  // const { info } = props && props.item && props?.item?.card
  // console.log(info)
  const addItemHandler = (props) => {
    dispatch(addItem(props))
  }
  // console.log(info)

  return (
    <div className="flex justify-between shadow-lg py-2 my-4 rounded-md border-b-4">
      <div className=" flex flex-col text-left p-2 w-9/12">
        <span className="font-bold text-xl">
          {props?.item?.card?.info?.name}
        </span>
        <p>Rs.{props?.item?.card?.info?.price / 100}</p>
        <p className="text-slate-400 text-sm ">
          {props?.item?.card?.info?.description}
        </p>
      </div>
      <div className="w-2/12">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
            props?.item?.card?.info?.imageId
          }
        ></img>
        <button
          className="bg-black px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black "
          onClick={() => addItemHandler(props)}
        >
          Add+
        </button>
      </div>
    </div>
  )
}

export default Item
