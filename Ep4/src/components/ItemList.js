import Item from "./Item"
const ItemList = (props) => {
  // console.log(props.itemcard)
  //   console.log(props.itemcard[0].card.info.name)
  const { itemcard } = props
  // console.log(itemcard)
  // console.log(itemcard)
  return (
    <div>
      <div>
        {itemcard?.map((item) => (
          <Item key={item.card.info.id} item={item} />
        ))}
      </div>
    </div>
  )
}
export default ItemList
