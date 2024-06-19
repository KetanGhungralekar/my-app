import React, { useEffect } from "react";
import "./Home.css";
import MultiitemCarousal from "./MultiitemCarousal";
import { RestaurantCard } from "../Restaurant/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { get_all_restaurants } from "../State/Restaurant/Action";
import { store } from "../State/Store";
import { useNavigate } from "react-router-dom";
import { findCart } from "../State/Cart/Action";

export const Home = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const {restaurant} = useSelector((store)=>store);
    console.log(token)
    useEffect(()=>{
        dispatch(get_all_restaurants(token));
    },[])
    return (
        <div className="pb-10">
            <section className='banner -z-50 relative flex flex-col justify-center items-center'>
                <div className="w-[50vw] z-10 text-center">
                    <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Zosh Food</p>
                    <p className="z-10 text-gray-300 text-xl lg:text-4xl">Taste the Convinience</p>
                </div>
                <div className="cover absolute top-0 left-0 right-0">

                </div>
                <div className="fadout">

                </div>
            </section>
            <section className="p-10 lg:py-10 lg:px-20">
                <p className="text-2xl font-semibold text-gray-400 py-3 pb-10 px-5">Top Meals</p>
                <MultiitemCarousal/>
            </section>
            <section className="px-5 lg:px-20 pt-10">
                <h1 className="text-2xl font-semibold text-gray-400 pb-5 px-5">Our HandPicked Favourites</h1>
                <div className="flex flex-wrap items-center justify-around gap-1">
                    {
                        restaurant.restarants.map((item)=><RestaurantCard item={item}/>)
                    }
                </div>
            </section>
        </div>
    )
}