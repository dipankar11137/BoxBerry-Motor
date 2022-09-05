import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const MyReview = () => {
  const [user] = useAuthState(auth);

  let img;
  let name;
  if (user?.photoURL == null) {
    img =
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";
  } else {
    img = user?.photoURL;
  }
  if (user?.displayName == null) {
    name = "Abbus";
  } else {
    name = user?.displayName;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Add a Review");
        reset();
      });
  };
  return (
    <div className=" pb-20 ">
      <h2 className="mt-5 ml-10 font-bold text-4xl text-center text-orange-500 uppercase">
        Please Add A Review
      </h2>
      <div className="flex justify-center">
        <div className="bg-indigo-200 p-5 rounded-2xl w-4/12 mt-5 ml-5 flex justify-center ">
          <form className=" gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* Description */}
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                // type="text"
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

              {/* name */}
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                className="input input-bordered bg-white lg:w-96 sm:w-full max-w-xs hover:shadow-xl shadow-inner  cursor-not-allowed disabled:opacity-75"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />

              <label className="label">
                <span className="label-text">Images</span>
              </label>
              <input
                type="text"
                value={img}
                className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner  cursor-not-allowed disabled:opacity-75"
                {...register("img", {
                  required: {
                    value: true,
                    message: "Images is Required",
                  },
                })}
              />

              {/* email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner  cursor-not-allowed disabled:opacity-75"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                })}
              />

              <input
                className="btn mt-5 w-full text-white"
                type="submit"
                value="ADD"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
