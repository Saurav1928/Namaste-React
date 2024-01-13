const Item = (props) => {
  // console.log("Items..")

  const { info } = props?.item?.card
  // console.log(info)
  return (
    <div className="flex justify-between shadow-lg py-2 my-4 rounded-md border-b-4">
      <div className=" flex flex-col text-left p-2 w-9/12">
        <span className="font-bold text-xl">{info?.name}</span>
        <p>Rs.{info?.price / 100}</p>
        <p className="text-slate-400 text-sm ">{info?.description}</p>
      </div>
      <div className="w-2/12">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
            info?.imageId
          }
        ></img>
      </div>
    </div>
  )
}

export default Item
