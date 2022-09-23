import React from "react";

const PhoneProduct = ({ product }) => {
  const { name, img, quantity, price } = product;
  return (
    <div className="card w-60 bg-gray-800 shadow-xl text-slate-200">
      <div className="avatar w-64 h-40 justify-center">
        <img className="pic-style" src={img} alt="" />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions justify-end ">
          <div className="badge badge-outline">{quantity}</div>
          <div className="badge badge-outline">100</div>
        </div>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default PhoneProduct;
