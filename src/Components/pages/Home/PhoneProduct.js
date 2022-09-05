import React from "react";

const PhoneProduct = ({ product }) => {
  const { name, img, description, quantity, price } = product;
  return (
    <div class="card w-64 bg-gray-800 shadow-xl text-slate-200">
      <div class="avatar w-64 h-40 justify-center">
        <img className="pic-style" src={img} alt="" />
      </div>
      <div class="card-body">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <div class="card-actions justify-end ">
          <div class="badge badge-outline">{quantity}</div>
          <div class="badge badge-outline">100</div>
        </div>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default PhoneProduct;
