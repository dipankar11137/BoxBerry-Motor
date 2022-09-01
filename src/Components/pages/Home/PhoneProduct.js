import React from "react";

const PhoneProduct = ({ product }) => {
  const { name, img, description, minOrderQuantity, availableQuantity, price } =
    product;
  return (
    <div class="card w-64 bg-base-100 shadow-xl">
      <div class="avatar justify-center p-2">
        <div class="w-48 rounded-xl">
          <img src={img} alt="" />
        </div>
      </div>
      <div class="card-body">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{minOrderQuantity}</div>
          <div class="badge badge-outline">{availableQuantity}</div>
        </div>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default PhoneProduct;
