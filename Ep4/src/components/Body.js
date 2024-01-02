import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {/* {resObj.map((x) => (
            <RestaurantCard resData={x} />
          ))} */}
          {resObj.map((restaurent) => (
            <RestaurantCard key={restaurent.info.id} resData={restaurent} />
          ))}
        </div>
      </div>
    );
  };

  export default Body