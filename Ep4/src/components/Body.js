import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import {useState} from "react";
function checkRatings(restaurent){
return restaurent.info.avgRating>=4.3;
}
const Body = () => {
  // let tmpList=[]
  const [resList, setResList]=useState(resObj)
    return (
      <div className="body">
        <div className="search">Search</div>
       <div className="filter"> 
       <button className="top-rated-btn" 
       onClick={()=>{
        let filteredList=resList.filter(checkRatings)
        setResList(filteredList);
       }}
       >
        Top Rated</button>
        </div>
        <div className="res-container">
          {/* {resObj.map((x) => (
            <RestaurantCard resData={x} />
          ))} */}
          {resList.map((restaurent) => (
            <RestaurantCard key={restaurent.info.id} resData={restaurent} />
          ))}
        </div>
      </div>
    );
  };

  export default Body