import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddCarProducts = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const url = `https://boxberry.onrender.com/carTools`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Add This Products");
        reset();
      });
  };

  return (
    <div className=" pb-20">
      <h2 className="mt-5 ml-10 font-bold text-4xl text-center text-orange-500 uppercase">
        Please Add A Product
      </h2>
      <div className="bg-indigo-200 p-5 rounded-2xl w-11/12 mt-5 ml-5 ">
        <form
          className=" flex justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              className="input input-bordered bg-white lg:w-96 sm:w-full max-w-xs hover:shadow-xl shadow-inner"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text">Images</span>
            </label>
            <input
              type="text"
              placeholder="Images 1 URL"
              className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
              {...register("img", {
                required: {
                  value: true,
                  message: "Images is Required",
                },
              })}
            />
            <input
              type="text"
              placeholder="Images 2 URL"
              className="input input-bordered bg-white w-full mt-2 max-w-xs hover:shadow-xl shadow-inner"
              {...register("img2", {
                required: {
                  value: true,
                  message: "Images is Required",
                },
              })}
            />
            <input
              type="text"
              placeholder="Images 3 URL"
              className="input input-bordered bg-white w-full mt-2 max-w-xs hover:shadow-xl shadow-inner"
              {...register("img3", {
                required: {
                  value: true,
                  message: "Images is Required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.img?.message}
                </span>
              )}
            </label>

            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.description?.message}
                </span>
              )}
            </label>
            {/* Price */}
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.price?.message}
                </span>
              )}
            </label>
          </div>

          <div>
            {/* Add Quantity */}
            <label className="label">
              <span className="label-text">Add Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Input Positive Number"
              className="input input-bordered  bg-white lg:w-96 sm:w-full max-w-xs  hover:shadow-xl shadow-inner"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Min Order Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.quantity?.message}
                </span>
              )}
            </label>
            {/* status */}
            <label className="label">
              <span className="label-text">Product Status</span>
            </label>
            <input
              type="text"
              placeholder="Product Status "
              className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
              {...register("status", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.status?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.status?.message}
                </span>
              )}
            </label>
            {/* Rating */}
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating (1-5)"
              className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
              {...register("rating", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.rating?.message}
                </span>
              )}
            </label>
            {/* Date */}
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="Date "
              className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
              {...register("date", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.date?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.date?.message}
                </span>
              )}
            </label>
            {/* Email
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              value={user?.email}
              className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner cursor-not-allowed disabled:opacity-75"
              {...register("email", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            /> */}
            <input
              className="btn mt-5 w-full text-white"
              type="submit"
              value="ADD"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCarProducts;
