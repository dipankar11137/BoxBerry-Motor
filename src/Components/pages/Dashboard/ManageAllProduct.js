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
        <div className="flex items-center space-x-3 ">
          <div className="avatar">
            <div className="mask  w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td className="bg-indigo-200">
        <span className="text-xl">{quantity} </span>
      </td>
      {/* modal */}
      <td className="bg-rose-50">
        <label
          onClick={() => handleEdit(_id)}
          for="my-modal-3"
          className="btn bg-indigo-900 modal-button"
        >
          <FaEdit />
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              for="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body appleProducts-center text-center">
                  <h1 className="text-2xl font-bold">
                    Name : {singleProduct.name}
                  </h1>
                  <img
                    className="mask mask-hexagon-2 "
                    src={singleProduct?.img}
                    alt=""
                  />
                  <form onSubmit={handleRestock}>
                    <input
                      type="number"
                      name="quantity"
                      id=""
                      placeholder="Enter a Number"
                      className="input input-bordered input-error hover:border-lime-500"
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
        <button onClick={() => handleRemove(_id)} className="btn btn-neutral">
          <FaTrash />
        </button>
      </th>
    </tr>
  );
};

export default ManageAllProduct;
