import { CDN_URL } from "../../utils/constants"

const RestaurantCard = ({ resData }) => {
  // const { resName, cuisine, rating, time } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info
  const { deliveryTime } = sla
  // console.log(resData?.info)
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

// export const RestaurantCardWithVeg = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         {console.log("Hello from veg")}
//         <label className="bg-black text-white font-extrabold">veg</label>
//         <RestaurantCard {...props} />
//       </div>
//     )
//   }
// }

export const RestaurantCardWithVeg = ({ RestaurantCard, ...props }) => {
  return (
    <div>

      <label className="bg-green-600 text-white font-extrabold absolute px-2 m-2 rounded-md  ">Veg</label>
      <RestaurantCard resData={props.resData} />
    </div>
  );
};


export default RestaurantCard
