import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ManageAllProduct = ({
  product,
  handleRemove,
  handleEdit,
  singleProduct,
  handleRestock,
}) => {
  const { _id, name, img, quantity } = product;

  return (
    <tr className="item-center">
      <td className="bg-slate-200">
        <div class="flex items-center space-x-3 ">
          <div class="avatar">
            <div class="mask  w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td className="bg-indigo-200">
        <span class="text-xl">{quantity} </span>
      </td>
      {/* modal */}
      <td className="bg-rose-50">
        <label
          onClick={() => handleEdit(_id)}
          for="my-modal-3"
          class="btn bg-indigo-900 modal-button"
        >
          <FaEdit />
        </label>

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body appleProducts-center text-center">
                  <h1 className="text-2xl font-bold">
                    Name : {singleProduct.name}
                  </h1>
                  <img
                    class="mask mask-hexagon-2 "
                    src={singleProduct?.img}
                    alt=""
                  />
                  <form onSubmit={handleRestock}>
                    <input
                      type="number"
                      name="quantity"
                      id=""
                      placeholder="Enter a Number"
                      class="input input-bordered input-error hover:border-lime-500"
                    />

                    <input
                      type="submit"
                      className=" ml-3 btn mt-2 btn-orange-500 text-white  font-bold rounded-lg"
                      value="Restock"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      {/* remove */}
      <th className="bg-sky-200">
        <button onClick={() => handleRemove(_id)} class="btn btn-neutral">
          <FaTrash />
        </button>
      </th>
    </tr>
  );
};

export default ManageAllProduct;
