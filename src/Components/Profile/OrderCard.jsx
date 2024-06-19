import { Button, Card } from "@mui/material";
import React from "react";

export const OrderCard = ({item,order}) => {
    return (
        <Card className="p-5 flex justify-between items-center">
            <div className="flex items-center space-x-5">
                <img className="object-cover h-16 w-16" src={item.food.images[0]} alt="" />
                <div>
                    <p>
                        {item.food.name}
                    </p>
                    <p>${item.totalPrice}</p>
                </div>
            </div>
            <div>
                    <Button className="cursor-not-allowed">{order.status}</Button>
            </div>
        </Card>
    )
}
