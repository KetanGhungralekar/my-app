import { Card, Chip, IconButton } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Addtofavourites } from "../State/Authentication/Action";
import { isPresentinFavourites } from "../config/logic";
import { store } from "../State/Store";

export const RestaurantCard = ({item}) => {
    const auth = useSelector((store)=>store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    console.log(auth);
    const handleAddToFavourite = ()=>{
        dispatch(Addtofavourites({token,restaurantId:item.id}))
    }
    const handleNavigatetoRestaurant = ()=>{
        if (item.open){
            navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
        }
    }
    return (
        <Card className="m-5 w-[17rem]">
            <div className={`relative ${item?.open?'cursor-point':"cursor-not-allowed"}`}>
                <img className="w-full h-[10rem] rounded-t-md object-cover" src={item.images[0]} alt="" />
                <Chip 
                size="small" 
                className="absolute top-2 left-2" 
                color={item.open?"success":"error"} 
                label={item.open?"Open":"closed"} 
                />
            </div>
            <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p onClick={handleNavigatetoRestaurant} className="text-lg font-semibold cursor-pointer">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
                <div>
                    <IconButton onClick={handleAddToFavourite}>
                        {isPresentinFavourites(auth.favourites,item)?<FavoriteIcon sx={{color:"red"}}/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}