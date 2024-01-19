import { useDispatch, useSelector } from "react-redux"
import Item from "./Item"
import { clearCart } from "../../utils/cartSlice"

const Cart = () => {
  //   console.log(cart.items)
  const dispatch = useDispatch()
  // const { items } = cart
  const items = useSelector((store) => store.cart.items)
  if (items.length === 0) return <h1>Empty cart</h1>
  console.log(items)
  const clearCartHandler = () => {
    dispatch(clearCart())
  }
  return (
    <div className="text-center m-4 p-4 text-xl">
      <h1>Cart</h1>
      <div className="text-right">
        {" "}
        <button
          className=" bg-red-800 px-2 rounded-md "
          onClick={clearCartHandler}
        >
          Clear cart
        </button>
      </div>
      <div>
        {items.map((item) => {
          return (
            <div>
              <h1>{item.item.card.info.name}</h1>
              <span>{item.item.card.info.price / 100}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Cart
