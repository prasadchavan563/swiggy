// import React, { useState } from 'react';
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";
import { IMG_CDN } from "../config";


const Restaurant = () => {
    const { id } = useParams();
    const resInfo = useRestaurant(id); // Assuming resInfo is an array of objects with a category property

    // Extracting unique categories
    const uniqueCategories = resInfo ? [...new Set(resInfo.map(data => data.category))] : [];
    console.log("uniqueCategories", uniqueCategories);

    // State to control accordion-style display
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    const DisplayDataByCategory = ({ category }) => {
        // Filter resInfo based on category
        const dataForCategory = resInfo.filter(info => info.category === category);
        console.log(dataForCategory, "dataForCategory");

        return (
            <div key={category}>
                {/* <div>

                </div> */}

                <div
                    className="text-center cursor-pointer w-6/12 mx-auto my-4 flex justify-between bg-white-100 shadow-lg p-4"
                    onClick={() => toggleCategory(category)}
                >
                    <h2 className="font-bold text-lg my-4">
                        {category}({dataForCategory.length})
                    </h2>
                    <span className="my-5">🔽</span>
                </div>
                <div className="text-center w-6/12 mx-auto my-2 justify-between rounded-2xl bg-gray-50 shadow-sm p-2">
                    {activeCategory === category && (
                        <>
                            <div className="text-left">
                                {dataForCategory.map((data, index) => (
                                    <div className="flex justify-between border-b-2" key={index}>
                                        <div className="my-3 w-9/12">
                                            <p className="font-medium">{data.name}</p>
                                            <p className="font-medium mb-5">
                                                {/* {data.price / 100}{" Rs"} */}
                                                {data.price ? "₹ " + data.price / 100 : "₹ "+ data.defaultPrice / 100}
                                            </p>
                                            <p className="font-thin from-neutral-200 mt-20">{data.description}</p>

                                        </div>
                                        <div className="w-3/12">
                                            <div className="absolute">
                                                <button className="p-2 bg-white text-green-600 shadow-lg mt-10 mx-35 rounded-lg">Add+</button>
                                            </div>
                                            <img src={IMG_CDN + data.imageId} className=" p-4 my-10 rounded-2xl" />

                                        </div>
                                    </div>
                                ))}
                            </div>

                        </>
                    )}
                </div>
            </div>
        );
    };

    return (resInfo === null) ? <Shimmer /> : (
        <div className="text-center">
            {uniqueCategories.map((category, index) => (
                <DisplayDataByCategory key={index} category={category} />
            ))}
        </div>
    );

};
export const NewRestaurant = (Restaurant) => {
    return () => {
        return (
            <div>

            </div>
        )
    }
}

export default Restaurant;
