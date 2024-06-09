import React from "react";
import { RestaurantCard } from "../Restaurant/RestaurantCard";

export const Favourites = () => {
    return(
        <div>
            <h1 className="py-2 text-xl font-semibold text-center">Favourites</h1>
            <div className="flex justify-center flex-wrap">
                {
                    [1,1,1,1,1].map((item)=><RestaurantCard/>)
                }
            </div>
        </div>
    )
}