import Item from "./Item"
const ItemList = (props) => {
  // console.log(props.itemcard)
  //   console.log(props.itemcard[0].card.info.name)
  const { itemcard } = props

  return (
    <div>
      <div>
        {itemcard?.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  )
}
export default ItemList
