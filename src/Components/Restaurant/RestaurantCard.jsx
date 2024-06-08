import { Card, Chip, IconButton } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = () => {
    const [favorite,setfavourite] = useState(false);
    return (
        <Card className="m-5 w-[17rem]">
            <div className={`relative ${true?'cursor-point':"cursor-not-allowed"}`}>
                <img className="w-full h-[10rem] rounded-t-md object-cover" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
                <Chip 
                size="small" 
                className="absolute top-2 left-2" 
                color={true?"success":"error"} 
                label={true?"Open":"closed"} 
                />
            </div>
            <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p className="text-lg font-semibold">Indian Fast food</p>
                    <p className="text-gray-500 text-sm">Juicy Burgers at your disposal</p>
                </div>
                <div>
                    <IconButton onClick={()=>{setfavourite(!favorite); console.log(favorite)}}>
                        {favorite?<FavoriteIcon sx={{color:"red"}}/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}