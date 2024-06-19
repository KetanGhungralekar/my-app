import React, { useEffect } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../State/Authentication/Action";
import { useNavigate } from "react-router-dom";
export const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {auth} = useSelector(store=>store);
    console.log(auth);
    const HandleLogout = () => {
        dispatch(logout());
        navigate("/");
    }
    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div className="flex flex-col items-center justify-center">
                <AccountCircleIcon sx={{ fontSize: "9rem" }}/>
                <h1 className="font-semibold text-2xl py-5">
                    {auth.user?.fullname}
                </h1>
                <p>{auth.user?.email}</p>
                <Button variant="contained" onClick={HandleLogout} sx={{margin:"2rem 0rem"}}>Logout</Button>
            </div>
        </div>
    )
}