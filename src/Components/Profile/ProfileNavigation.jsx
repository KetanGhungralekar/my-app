import React from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu = [
    {title : "Orders", icon:<ShoppingBagIcon/>},
    {title : "Favourites", icon:<FavoriteIcon/>},
    {title : "Address", icon:<HomeIcon/>},
    {title : "Events", icon:<EventIcon/>},
    {title : "Logout", icon:<LogoutIcon/>},
]
export const ProfileNavigation = ({open,handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigate = (item)=>{
        console.log(item.title);
        if(item.title === "Logout"){
            dispatch(logout());
            navigate('/');
        }
        else
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    return(
        <div className="">
            <Drawer variant={isSmallScreen?"temporary":"permanent"} open={isSmallScreen?open:true} onClose={handleClose} anchor='left' sx={{zIndex:-1}}>
                <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-7 pt-16">
                    {menu.map((item,i)=>
                        <>
                            <div onClick={() => handleNavigate(item)} className="flex-col justify-start space-x-5 px-5 cursor-pointer">
                            {item.icon}
                            <span>{item.title}</span>
                             </div>
                         {i != menu.length-1 && <Divider/>}
                        </>
                    )}
                </div>
            </Drawer>
        </div>
    )
}