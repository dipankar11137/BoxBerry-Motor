import React from "react";
import Zoom from "react-reveal/Zoom";

const CarTool = ({ tool, handleModal, carToolId, handleBooking }) => {
  const { _id, name, price, img, status, quantity } = tool;

  return (
    <div>
      <Zoom>
        <div className=" w-full max-w-sm  bg-white rounded-2xl shadow-2xl hover:shadow-inherit dark:bg-gray-800 dark:border-gray-700  hover:bg-purple-900 ">
          {/* <img className="p-8 rounded-t-lg" src={tool.img} alt="product image"> */}
          {/* <span className="indicator-item badge badge-primary">new</span> */}
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
          <div className="px-5 pb-5 mt-3">
            <h2 className="card-title text-white">
              {name}
              <div className="badge badge-secondary">{status}</div>
            </h2>
            <h2 className="text-lg text-white">
              Available Products : <span>{quantity}</span>
            </h2>

            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                $ {price}
              </span>
              {/* <!-- The button to open modal --> */}
              <button onClick={() => handleModal(_id)}>
                <label for="my-modal-3" className="btn btn-info  modal-button">
                  Details
                </label>
              </button>

              {/* <!-- Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative ">
                  <label
                    for="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <div className="card w-11/12 hover:dark:bg-gray-700 dark:bg-gray-800 shadow-xl text-white">
                    <figure>
                      <img
                        className="w-full h-56"
                        src={carToolId?.img2}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {carToolId?.name}
                        <div className="badge badge-secondary">
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
                className="btn   btn-orange-500"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default CarTool;
