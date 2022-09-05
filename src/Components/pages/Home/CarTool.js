import React from "react";

const CarTool = ({ tool, handleModal, carToolId, handleBooking }) => {
  const { _id, name, price, img, status, quantity } = tool;

  return (
    <div>
      <div class=" w-full max-w-sm  bg-white rounded-2xl shadow-2xl hover:shadow-inherit dark:bg-gray-800 dark:border-gray-700  hover:bg-purple-900 ">
        {/* <img class="p-8 rounded-t-lg" src={tool.img} alt="product image"> */}
        {/* <span class="indicator-item badge badge-primary">new</span> */}
        <figure>
          <div className="">
            <img
              className="rounded-xl w-full "
              src={img}
              alt=""
              style={{ height: "220px" }}
            />
          </div>
        </figure>
        <div class="px-5 pb-5 mt-3">
          <h2 class="card-title text-white">
            {name}
            <div class="badge badge-secondary">{status}</div>
          </h2>
          <h2 className="text-lg text-white">
            Available Products : <span>{quantity}</span>
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
                      <div class="badge badge-secondary">
                        {carToolId?.status}
                      </div>
                    </h2>
                    <h2 className="text-2xl font-bold text-orange-400">
                      ${carToolId?.price}
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
            {/* Book Button  */}
            <button
              onClick={() => handleBooking(_id)}
              class="btn btn-orange-500"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTool;
