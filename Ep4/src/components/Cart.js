import { useSelector } from "react-redux"

const Cart = () => {
  const cart = useSelector((store) => store.cart)
  console.log(cart)
  return (
    <div>
      {/* {cart.map((item) => (
        <div>
          {item.name} key={item.id}
        </div>
      ))} */}
    </div>
  )
}
export default Cart
