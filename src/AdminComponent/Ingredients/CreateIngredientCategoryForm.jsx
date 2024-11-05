import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { IngredientCategoryTable } from "./IngredientCategoryTable";

export const CreateIngredientCategoryForm = () => {
    const [formData, setFormData] = useState({
        name: ""
    });
  const handleSubmit = (e) => {
    const data = {
        name: formData.name
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
          Create Ingredient Category
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            id="CategoryName"
            name="name"
            label="CategoryName"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <Button variant="contained" type="submit">
            Create Ingredient Category
          </Button>
        </form>
      </div>
    </div>
  );
};
