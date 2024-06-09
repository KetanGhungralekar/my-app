import { Button, Card } from "@mui/material";
import React from "react";

export const OrderCard = () => {
    return (
        <Card className="p-5 flex justify-between items-center">
            <div className="flex items-center space-x-5">
                <img className="object-cover h-16 w-16" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
                <div>
                    <p>
                      Biryani
                    </p>
                    <p>$399</p>
                </div>
            </div>
            <div>
                    <Button className="cursor-not-allowed">completed</Button>
            </div>
        </Card>
    )
}
