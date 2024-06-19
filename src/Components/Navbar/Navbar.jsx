import { Avatar, Badge, Box, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../State/Store";

export const Navbar = () => {
    const {auth,cart} = useSelector((store)=>store);   
    console.log(auth);
    const navigate = useNavigate();
    const handleAvatar = ()=>{
        navigate("/my-profile")
    }
    return (
        <Box className="px-5 sticky top-0 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
                <div className="lg:mr-10 cursor-pointer flex items-centre space-x-4">
                    <li onClick={()=>{navigate("/")}} className="logo font-semibold text-gray-300 text-2xl">
                        Zosh Food
                    </li>
                </div>
                <div className='flex items-centre space-x-2 lg:space-x-10'>
                    <div className="">
                        <IconButton>
                            <SearchIcon sx={{fontSize:"1.5rem"}}/>
                        </IconButton>
                    </div>
                    <div>
                        {auth.user?<Avatar onClick={handleAvatar} sx={{bgcolor:"white",color:pink.A400,cursor:"pointer"}}>{auth.user?.fullname[0].toUpperCase()}</Avatar>:<IconButton onClick={()=>navigate("account/login")}><Person/></IconButton>}
                    </div>
                    <div>
                        <IconButton onClick={()=>navigate("/cart")}>
                            <Badge color ='secondary' badgeContent={cart.cartItems.length}>
                            <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                            </Badge>
                        </IconButton>
                    </div>
                </div>
        </Box>
    )
}