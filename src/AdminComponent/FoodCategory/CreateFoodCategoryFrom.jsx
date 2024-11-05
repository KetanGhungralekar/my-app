import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const CreateFoodCategoryForm = () => {
    const [formData, setFormData] = useState({
        CategoryName: "",restaurantId: ""
    });
  const handleSubmit = (e) => {
    const data = {
        name: formData.CategoryName,
        restaurantId: {
            id:1
        }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]:value });
  };
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Food Category
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            id="CategoryName"
            name="CategoryName"
            label="CategoryName"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.CategoryName}
          ></TextField>
          <Button variant="contained" type="submit">
            Create Food Category
          </Button>
        </form>
      </div>
    </div>
  );
};
