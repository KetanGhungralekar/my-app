import { Button, Grid, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        dispatch(LoginUser({userData:values,navigate}))
    }
  return (
    <div>
        <Typography variant="h4" className='text-center pb-5'>
            Login
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
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <Typography variant="body2" align='center' sx={{mt:2}}>
        Don't have an account?
      </Typography>
      <Button fullWidth onClick={()=>navigate("/account/register")}>
        Register
      </Button>
    </div>
  );
};
