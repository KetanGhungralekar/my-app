import React from "react";
import { AdminSidebar } from "./AdminSidebar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Orders } from "../Orders/Orders";
import { Menu } from "../Menu/Menu";
import { FoodCategory } from "../FoodCategory/FoodCategory";
import { Ingredients } from "../Ingredients/Ingredients";
import { Events } from "../Events/events";
import { RestaurantDetails } from "./RestaurantDetails";
import { CreateMenuForm } from "../Menu/CreateMenuForm";

export const Admin = () => {
    const handleClose = () => {
        console.log("close")
    }
    return (
        <div className="lg:flex justify-between">
            <div>
                <AdminSidebar handleClose={handleClose}/>
            </div>
            <div className="lg:w-[80%]">
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/category' element={<FoodCategory/>}/>
                    <Route path='/ingredients' element={<Ingredients/>}/>
                    <Route path='/event' element={<Events/>}/>
                    <Route path='/details' element={<RestaurantDetails/>}/>
                    <Route path='/menu/create' element={<CreateMenuForm/>}/>
                </Routes>
            </div>
        </div>
    )
}