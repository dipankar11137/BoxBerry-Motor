import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Booking = () => {
  const { id } = useParams();
  // console.log(id);
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigator = useNavigate();

  const [booking, setBooking] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/carTools/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const onSubmit = (data) => {
    const newQuantity = data?.quantity;
    // console.log(newQuantity);
    const beforeQuantity = booking?.quantity;
    // console.log(beforeQuantity);
    if (newQuantity > beforeQuantity) {
      return toast.error("More than available product");
    } else {
      fetch("http://localhost:5000/carBooking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success("Successfully Add This Products");
          // console.log("tost is not work");
          navigator("/");
        });
    }
  };
  return (
    <div className="flex h-screen justify-center items-center  bg-slate-700">
      <div className="p-4">
        <img
          className="h-56 w-72 rounded-xl animate-bounce"
          src={booking?.img}
          alt=""
        />
      </div>
      <div className="card w-96 shadow-xl  bg-violet-50">
        <div className="card-body">
          <h2 className="text-center text-2xl">Booked Product</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={booking?.name}
                className="input input-bordered bg-white w-full max-w-xs cursor-not-allowed disabled:text-slate-500"
                {...register("name", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                value={booking?.img}
                className="input input-bordered bg-white w-full max-w-xs cursor-not-allowed disabled:text-slate-500"
                {...register("img", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                className="input input-bordered  bg-white w-full max-w-xs cursor-not-allowed disabled:text-slate-500"
                {...register("email", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered bg-white w-full max-w-xs"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Date is Required",
                  },
                })}
              />
              <label className="label">
                {errors.date?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.date.message}
                  </span>
                )}
                {errors.date?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.date.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="quantity"
                placeholder="Quantity"
                className="input input-bordered bg-white w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is Required",
                  },
                  minLength: {
                    message: `Gater than ${booking?.minOrderQuantity}`,
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn btn-orange-500 w-full text-white"
              type="submit"
              value="Booked"
            />
          </form>
        </div>
      </div>
      <div className="p-4">
        <img
          className="h-56 w-72 rounded-xl animate-bounce"
          src={booking?.img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Booking;
