import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../State/Authentication/Action";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};
export const RegisterForm = () => {
    const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("form Values",values);
    dispatch(registerUser({userData:values,navigate}))
  };
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h4" className="text-center pb-5">
        Register
      </Typography>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="fullname"
                as={TextField}
                label="FullName"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                as={TextField}
                label="password"
                variant="outlined"
                fullWidth
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Field as ={Select}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Role"
                name="role"
                // onChange={handleChange}
              >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Owner</MenuItem>
              </Field>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                onSubmit={handleSubmit}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        If you already have an account
      </Typography>
      <Button fullWidth onClick={() => navigate("/account/login")}>
        Login
      </Button>
    </div>
  );
};
