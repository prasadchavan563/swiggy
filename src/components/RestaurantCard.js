import { IMG_CDN } from "../config";
import { AiFillStar } from "react-icons/ai";

export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo, id }) => {
  const buttonStyle = {
    backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38" : "#48c479",
    color: isNaN(avgRating) ? "#535665" : "#fff"
  }

  return (
    <div className="m-4 p-4 w-[250px] rounded-sm bg-gray-100 hover:bg-gray-200">
      <img className="rounded-sm " src={IMG_CDN + cloudinaryImageId} alt={name} />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h4 className="card-tags">{cuisines.join(", ")}</h4>
      <h4 className="rating" style={buttonStyle}>
        <AiFillStar /><span>{avgRating}</span>
      </h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>

  );
};
