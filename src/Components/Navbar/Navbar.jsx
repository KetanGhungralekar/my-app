import { Avatar, Badge, Box, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../State/Store";

export const Navbar = () => {
    const { auth, cart } = useSelector((store) => store);
    const navigate = useNavigate();

    const handleAvatar = () => {
        navigate("/my-profile");
    };

    return (
        <Box
            className="px-5 sticky top-0 z-50 py-[0.8rem] bg-[#111827] lg:px-20 flex justify-between"
            sx={{
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",  // Lighter shadow for a subtler effect
            }}
        >
            {/* Logo Section */}
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li
                    onClick={() => { navigate("/"); }}
                    className="logo font-semibold text-gray-300 text-2xl"
                    style={{
                        fontFamily: "'Roboto', sans-serif",  // Matching font family to sidebar
                    }}
                >
                    Zosh Food
                </li>
            </div>

            {/* Right Side Icons (Search, Avatar, Cart) */}
            <div className='flex items-center space-x-2 lg:space-x-10'>
                {/* Search Icon */}
                <div>
                    <IconButton
                        sx={{
                            color: "#FFFFFF", 
                            "&:hover": { 
                                backgroundColor: "#4B5563", 
                                borderRadius: "50%" 
                            }
                        }}
                    >
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>

                {/* Avatar or Login */}
                <div>
                    {auth.user ? (
                        <Avatar
                            onClick={handleAvatar}
                            sx={{
                                bgcolor: "#2D3748", // Neutral gray color for the avatar background
                                color: "#FFFFFF",  // White text for the avatar
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "#374151", // Hover effect to complement the navbar
                                },
                            }}
                        >
                            {auth.user?.fullname[0].toUpperCase()}
                        </Avatar>
                    ) : (
                        <IconButton onClick={() => navigate("account/login")}>
                            <Person sx={{ color: "#FFFFFF" }} />
                        </IconButton>
                    )}
                </div>

                {/* Shopping Cart Icon */}
                <div>
                    <IconButton
                        onClick={() => navigate("/cart")}
                        sx={{
                            color: "#FFFFFF", 
                            "&:hover": { 
                                backgroundColor: "#4B5563", 
                                borderRadius: "50%" 
                            }
                        }}
                    >
                        <Badge color="secondary" badgeContent={cart.cartItems.length}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    );
};
