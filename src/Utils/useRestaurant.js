
import { useState, useEffect } from "react";

const useRestaurant = (id) => {

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

            let restaurantInfo = json?.data?.cards?.map((card) => {
                const nestedCards = card?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                if (Array.isArray(nestedCards)) {
                    return nestedCards.flatMap((nestedCard) => {
                        const itemCards = nestedCard?.card?.card?.itemCards;

                        if (Array.isArray(itemCards)) {
                            return itemCards
                                .map((data) => data?.card?.info)
                                .filter((info) => info);
                        }

                        return [];
                    });
                }

                return [];
            }).flat();

            if (restaurantInfo.length === 0) {
                const restaurantInfoIfNotIn = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards?.map((data) => data?.card?.info);
                restaurantInfo = restaurantInfoIfNotIn || [];
            }

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