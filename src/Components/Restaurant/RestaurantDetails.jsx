import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from "./MenuCard";

const categories = [
    "pizza",
    "biryanis",
    "burgers",
    "cakes",
    "ice-creams",
    "soups",
]
const Foodtypes = [
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non Vegetarian only",value:"non-vegetarian"},
    {label:"Seasonal",value:"seasonal"},
]
const menu = [1,1,1,1,1];
export const RestaurantDetails = () => {
    const [foodtype, setFoodtype] = useState("");
    const [category, setCategory] = useState("biryanis");
    const handleFilter = (e)=>{
        if (e.target.name === "food-type") {
            setFoodtype(e.target.value);
        }
        else if (e.target.name === "category") {
            setCategory(e.target.value);
        }
    }
    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/india/indian fast food</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
                        </Grid>
                    </Grid>
                </div>
                <div className="pb-3 pt-5">
                    <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                    <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae neque iusto magni eius illum consectetur laudantium, aspernatur eligendi architecto aliquam deleniti enim molestiae sapiente inventore, totam corporis officia mollitia ex.</p>
                    <div className="space-y-3 mt-3">
                    <p className="text-gray-500 flex items-center gap-3 text-xl">
                    <LocationOnIcon/>
                        <span className="font-semibold">Mumbai Maharashtra</span></p>
                        <p className="text-gray-500 flex items-center gap-3 text-xl">
                    <CalendarTodayIcon/>
                        <span className="font-semibold">Mon-Sun: 9:00AM-9:00PM(Today)</span></p>
                    </div>
                </div>
            </section>
            <Divider/>
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1rem"}}>Food Type</Typography>
                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food-type" value={foodtype}>
                                    {Foodtypes.map((item)=><FormControlLabel key={item.value}
                                    value={item.value} control={<Radio/>} label={item.label}/>)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:""}}>Food Category</Typography>
                            <FormControl className="py-10 space-y-5" component={"fieldset"} value={category}>
                                <RadioGroup>
                                    {categories.map((item)=><FormControlLabel key={item}
                                    value={item} control={<Radio/>} label={item}/>)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menu.map((item)=> <MenuCard/>)}
                </div>
            </section>
        </div>
    )
}