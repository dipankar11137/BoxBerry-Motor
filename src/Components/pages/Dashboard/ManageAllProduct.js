import React from "react";

const ManageAllProduct = ({ product, handleRemove }) => {
  const { _id, name, img, quantity } = product;
  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        <span class="text-xl">{quantity} </span>
      </td>
      <td>
        <button class="btn btn-accent">Add Quantity</button>
      </td>
      <th>
        <button onClick={() => handleRemove(_id)} class="btn btn-neutral">
          Remove
        </button>
      </th>
    </tr>
  );
};

export default ManageAllProduct;
