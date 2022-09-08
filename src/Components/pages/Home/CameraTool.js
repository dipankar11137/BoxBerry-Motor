import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/PicStyle.css";

const CameraTool = ({ product }) => {
  const {
    _id,
    name,
    img,
    description,
    minOrderQuantity,
    availableQuantity,
    price,
  } = product;
  const navigate = useNavigate();

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };
  return (
    <div className="">
      <div className="card w-96 glass p-2 shadow-xl bg-sky-900 hover:bg-indigo-900  text-white">
        <div className=" flex justify-center">
          <img className="w-full h-64 rounded-xl pic-style" src={img} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p>{description}</p>
          <p className="font-bold ">Min Order Quantity : {minOrderQuantity}</p>
          <p className="font-bold ">Available Products : {availableQuantity}</p>
          <p className="font-bold ">Price : {price} /per</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleBooking(_id)} className="btn">
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraTool;
