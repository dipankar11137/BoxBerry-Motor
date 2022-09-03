import React from "react";
import { useForm } from "react-hook-form";
import "../../CSS/PicStyle.css";

const CarTool = ({ tool, handleModal, carToolId, addToCard }) => {
  const { _id, name, price, img, status } = tool;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div class="w-full max-w-sm  bg-white rounded-2xl shadow-2xl hover:shadow-inherit dark:bg-gray-800 dark:border-gray-700  hover:bg-purple-900 ">
      {/* <img class="p-8 rounded-t-lg" src={tool.img} alt="product image"> */}
      <figure>
        <img
          className="w-full rounded-xl"
          src={img}
          alt=""
          style={{ height: "220px" }}
        />
      </figure>
      <div class="px-5 pb-5 mt-3">
        <h2 class="card-title text-white">
          {name}
          <div class="badge badge-secondary">{status}</div>
        </h2>

        <div class="rating rating-sm">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-500"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-500"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-500"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-500"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-500"
          />
        </div>

        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            $ {price}
          </span>
          {/* <!-- The button to open modal --> */}
          <button onClick={() => handleModal(_id)}>
            <label for="my-modal-3" class="btn btn-info modal-button">
              Details
            </label>
          </button>

          {/* <!-- Put this part before </body> tag --> */}
          <input type="checkbox" id="my-modal-3" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative ">
              <label
                for="my-modal-3"
                class="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <div class="card w-11/12 hover:dark:bg-gray-700 dark:bg-gray-800 shadow-xl text-white">
                <figure>
                  <img
                    className="w-full h-56"
                    src={carToolId?.img2}
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    {carToolId?.name}
                    <div class="badge badge-secondary">{carToolId?.status}</div>
                  </h2>
                  <h2 className="text-2xl font-bold text-orange-400">
                    $ {carToolId?.price}
                  </h2>
                  <h2>
                    Available Products :{" "}
                    <span className=" text-orange-400 font-bold">
                      {carToolId?.quantity}
                    </span>
                  </h2>
                  <p>{carToolId?.description}</p>
                  <p>
                    Release Date :{" "}
                    <span className=" text-orange-400 font-bold">
                      {carToolId?.date}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booked  Modal*/}
          {/* <!-- The button to open modal --> */}
          <button onClick={() => addToCard(_id)}>
            <label for="my-modal-6" class="btn modal-button">
              Add To Card
            </label>
          </button>

          {/* <!-- Put this part before </body> tag --> */}
          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
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
                  className="btn btn-primary w-full text-white"
                  type="submit"
                  value="Booked"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTool;
