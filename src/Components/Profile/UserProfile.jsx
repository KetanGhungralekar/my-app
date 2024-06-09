import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";
export const UserProfile = () => {
    const HandleLogout = () => {
        console.log("Logout");
    }
    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div className="flex flex-col items-center justify-center">
                <AccountCircleIcon sx={{ fontSize: "9rem" }}/>
                <h1 className="font-semibold text-2xl py-5">
                    Code With Zosh
                </h1>
                <p>Email: ddgfffffff</p>
                <Button variant="contained" onClick={HandleLogout} sx={{margin:"2rem 0rem"}}>Logout</Button>
            </div>
        </div>
    )
}