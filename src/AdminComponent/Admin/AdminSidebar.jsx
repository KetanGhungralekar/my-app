import { Dashboard, ShoppingBag } from "@mui/icons-material"
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { logout } from "../../Components/State/Authentication/Action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const menu = [
    {title: 'Dashboard', icon:<Dashboard/>, path:"/"},
    {title: 'Orders', icon:<ShoppingBag/>, path:"/orders"},
    {title: 'Menu', icon:<ShopTwoIcon/>, path:"/menu"},
    {title: 'Food Category', icon:<CategoryIcon/>, path:"/category"},
    {title: 'Ingredients', icon:<FastfoodIcon/>, path:"/ingredients"},
    {title: 'Events', icon:<EventIcon/>, path:"/event"},
    {title: 'Details', icon:<AdminPanelSettingsIcon/>, path:"/details"},
    {title: 'Logout', icon:<LogoutIcon/>, path:"/"}
]
export const AdminSidebar = ({handleClose}) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigate = (item) => {
        console.log(item.title);
        if(item.title === "Logout"){
            dispatch(logout());
            navigate('/');
        }
        else
        navigate(`/admin/restaurants${item.path}`)
    }
    return (
        <div className="">
            <Drawer variant={isSmallScreen?"temporary":"permanent"} open={true} onClose={handleClose} anchor='left' sx={{zIndex:1}}>
                <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-7">
                    {menu.map((item,i)=>
                        <>
                            <div onClick={()=>handleNavigate(item)} className="flex items-center space-x-5 px-5 cursor-pointer">
                            {item.icon}
                            <span>{item.title}</span>
                             </div>
                         {i !== menu.length-1 && <Divider/>}
                        </>
                    )}
                </div>
            </Drawer>
        </div>
    )
}