import { CDN_URL } from "../../utils/constants"

const RestaurantCard = ({ resData }) => {
  // const { resName, cuisine, rating, time } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info
  const { deliveryTime } = sla
  console.log(resData?.info)
  return (
    <div className="m-4 p-4 w-[16rem] bg-slate-300 rounded-lg flex flex-col gap-2">
      <img
        className="rounded-md h-[16rem] w-[100%]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-xl font-extrabold font-serif ">{name}</h3>
      <span className="mt-2">{cuisines.join(", ")}</span>
      <div className="rating-time">
        <span className="rating">{avgRating} stars</span>
      </div>
      <span>{costForTwo}</span>
      <span>{deliveryTime} min.</span>
    </div>
  )
}

export default RestaurantCard
