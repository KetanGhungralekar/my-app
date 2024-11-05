import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { IngredientCategoryTable } from "./IngredientCategoryTable";

export const CreateIngredientsForm = () => {
    const [formData, setFormData] = useState({
        name: "",ingredientCategoryId: ""
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
    const {name, value } = e.target;
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
                        <FormControl fullWidth>
                <InputLabel id="Category">Category</InputLabel>
                <Select
                  labelId="IngredientCategory"
                  name="ingredientCategoryId"
                  id="IngredientCategory"
                  value={formData.ingredientCategoryId}
                  label="IngredientCategory"
                  onChange={handleInputChange}
                >
                  <MenuItem value={"Burger"}>Burger</MenuItem>
                  <MenuItem value={"Pizza"}>Pizza</MenuItem>
                  <MenuItem value={"North Indian"}>North Indian</MenuItem>
                </Select>
              </FormControl>
          <Button variant="contained" type="submit">
            Create Ingredient
          </Button>
        </form>
      </div>
    </div>
  );
};
