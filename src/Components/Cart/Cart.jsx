import React, { useEffect, useState } from "react";
import { Cartitem } from "./Cartitem";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import { AddressCard } from "./AddressCard";
import { AddLocation } from "@mui/icons-material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { findCart } from "../State/Cart/Action";
import { createOrder } from "../State/Order/Action";
const items = [1, 1];
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
export const initialValues = {
  streetAddress: "",
  city: "",
  state: "",
  pincode: "",
};
const validationSchema = Yup.object({
  streetAddress: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  pincode: Yup.string().required("Required"),
});
export const Cart = () => {
  const handleOpenAddressModel = () => setOpen(true);
  const createOrderUsingSelectedAddress = () => {};
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const {cart,auth} = useSelector((store)=>store);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const data = {
      token:localStorage.getItem("token"),
      data:{
        restaurantid:cart.cartItems[0].food?.restaurant.id,
        deliveryAddress:{
          city:values.city,
          state:values.state,
          pincode:values.pincode,
        }
      }
    }
    dispatch(createOrder(data));
    console.log("form values",values);
  };
  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart?.cartItems.map((item) => (
            <Cartitem item={item}/>
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5 text-xl">Bill Details</p>
            <div className="space-y-3">
              <div className=" flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>${cart.cart?.totaPrice || cart.cart?.totalPrice}</p>
              </div>
              <div className=" flex justify-between text-gray-400">
                <p>Deliver Fee</p>
                <p>$21</p>
              </div>
              <div className=" flex justify-between text-gray-400">
                <p>Platform Fee</p>
                <p>$5</p>
              </div>
              <div className=" flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>$10</p>
              </div>
              <Divider />
              <div className=" flex justify-between text-gray-400">
                <p>Total pay</p>
                <p>${(cart.cart?.totaPrice || cart.cart?.totalPrice)+21+5+10}</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center text-2xl py-10 font-semibold">
              Chose Delivery Address
            </h1>
            <div className="flex flex-wrap justify-center gap-5">
              {[1, 1, 1].map((item) => (
                <AddressCard
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocation />
                <div className="space-y-3 text-gray-500">
                  <h1 className=" font-semibold text-lg text-white">
                    Add New Address
                  </h1>
                  <Button
                    onClick={handleOpenAddressModel}
                    variant="outlined"
                    color="primary"
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    name="streetAddress"
                    as={TextField}
                    label="Street Address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={8}>
                  <Field
                    name="state"
                    as={TextField}
                    label="state"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="pincode"
                    as={TextField}
                    label="pincode"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="city"
                    as={TextField}
                    label="city"
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
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};
