import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";


const Restaurant = () => {

    const {id}=useParams();
    console.log(id,"resid");

    const resInfo=useRestaurant(id)            //get resInfo data from useRestaurant pass id 

    const Restdata = ({ name, description, price ,id,ratings}) => {
        return (
            <div className="menu" key={id}>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{ratings.aggregatedRating.rating}</p>
                <p>{price/100+" Rs"}</p>
            </div>
        );
    }

    return (resInfo === null) ? <Shimmer /> : (
        <div>
            {resInfo.map((data, index) => (
                <Restdata key={index} {...data} />
            ))}
        </div>
    );
};

export default Restaurant;
