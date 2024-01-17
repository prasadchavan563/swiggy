import { IMG_CDN } from "../config";
import { AiFillStar } from "react-icons/ai";

export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo, id,totalRatingsString }) => {
  const buttonStyle = {
    backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38" : "#48c479",
    color: isNaN(avgRating) ? "#535665" : "#fff"
  }
  
  return (
    <div className="m-4 p-4 w-[250px] rounded-sm bg-gray-100 hover:bg-gray-200">
      <img className="rounded-sm " src={IMG_CDN + cloudinaryImageId} alt={name} />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h4 className="card-tags">{cuisines && cuisines.join(", ")}</h4>

      <h4 className="rating" style={buttonStyle}>
        <AiFillStar /><span>{avgRating}{totalRatingsString}</span>
      </h4>
      <h4>{sla && sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>

  );
};


export const WithRestaurantLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <lable className="absolute bg-black text-white m-2 p-1 rounded-lg">High Rated</lable>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

// pure function means it will not reflet to the original component which will called inside another 
// that is the reason we pass props also