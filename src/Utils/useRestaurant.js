
import { useState, useEffect } from "react";

const useRestaurant=(id)=>{

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
    return resInfo

}
export default useRestaurant;


//This the own custom Hook
//easily Reusable, more Maintainable, testable