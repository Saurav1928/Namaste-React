import { CDN_URL } from '../../utils/constants'

const RestaurantCard = ({ resData }) => {
  // const { resName, cuisine, rating, time } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info
  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <span>{cuisines.join(', ')}</span>
      <div className='rating-time'>
        <span className='rating'>{avgRating} stars</span>
      </div>
    </div>
  )
}

export default RestaurantCard
