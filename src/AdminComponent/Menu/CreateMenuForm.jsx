import {
  AddPhotoAlternate,
  Category,
  Close,
  PriceChange,
  Restaurant,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { UploadImageC } from "../utils/UploadtoCloudnary";
import { useDispatch } from "react-redux";
import { create_restaurant } from "../../Components/State/Restaurant/Action";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  description: "",
  Price: "",
  Category: "",
  RestaurantId: "",
  vegetarian: true,
  seasonal: false,
  ingredients: [],
  images: [],
};
export const CreateMenuForm = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.RestaurantId = 2;
      console.log(values);
    },
  });
  const [uploadImage, setUploadImage] = useState(false);

  const handleImageInput = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await UploadImageC(file);
    // UploadImage(file).then((url) => {
    //     formik.setFieldValue("images", [...formik.values.images, url])
    //     setUploadImage(false)
    // })
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const uploadImages = formik.values.images.filter((item, i) => i !== index);
    formik.setFieldValue("images", uploadImages);
  };

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-center py-2">Add New Menu</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageInput}
                type="file"
              />
              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternate className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((item, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img className="w-24 h-24 object-cover" src={item} alt="" />
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="Price"
                name="Price"
                label="Price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Price}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="Category">Category</InputLabel>
                <Select
                  labelId="Category"
                  name="Category"
                  id="Category"
                  value={formik.values.Category}
                  label="Category"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"Burger"}>Burger</MenuItem>
                  <MenuItem value={"Pizza"}>Pizza</MenuItem>
                  <MenuItem value={"North Indian"}>North Indian</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="ingredients">Ingredients</InputLabel>
                <Select
                  labelId="ingredients"
                  name="ingredients"
                  id="ingredients"
                  multiple
                  value={formik.values.ingredients}
                  onChange={formik.handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="ingredients"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  //   MenuProps={MenuProps}
                >
                  {["kdngg", "fsngjkfgb", "fsngjkrfng"].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
                <InputLabel id="seasonal">IsSeasonal</InputLabel>
                <Select
                  labelId="seasonal"
                  name="seasonal"
                  id="seasonal"
                  value={formik.values.seasonal}
                  label="seasonal"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
                <InputLabel id="vegetarian">isVegetarian</InputLabel>
                <Select
                  labelId="vegetarian"
                  name="vegetarian"
                  id="vegetarian"
                  value={formik.values.vegetarian}
                  label="vegetarian"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Create Restaurant
          </Button>
        </form>
      </div>
    </div>
  );
};
