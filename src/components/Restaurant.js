import { useEffect, useState } from "react";
import { MENU_API } from '../config';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const Restaurant = () => {

    const {id}=useParams();
    console.log(id,"resid");



    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        if (resInfo === null) {
            fetchMenu();
        }
    }, [resInfo]);

    const fetchMenu = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId=${id}`);
            const json = await data.json();
            console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((data)=>data?.card?.info),"json");
            const restaurantInfo = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((data)=>data?.card?.info);
            setResInfo(restaurantInfo);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle errors if fetch fails
        }
    };

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
