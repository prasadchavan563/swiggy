
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
            const restaurantInfo = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((data)=>data?.card?.info);
            setResInfo(restaurantInfo);
            const restaurantInfoIfNotIn=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards?.map((data)=>data?.card?.info)
            if(!restaurantInfo){
                setResInfo(restaurantInfoIfNotIn);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return resInfo

}
export default useRestaurant;


//This the own custom Hook
//easily Reusable, more Maintainable, testable