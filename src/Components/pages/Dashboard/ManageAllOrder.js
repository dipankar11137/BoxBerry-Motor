import React from "react";

const ManageAllOrder = ({ booking }) => {
  return (
    <tr className="item-center">
      <td className="bg-slate-200">
        <div class="flex items-center space-x-3 ">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={booking?.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{booking?.name}</div>
          </div>
        </div>
      </td>
      <td className="bg-indigo-200">
        <span class="text-xl">{booking?.quantity} </span>
      </td>
      <td className="bg-sky-200">
        <span class="text-xl">{booking?.date} </span>
      </td>
      <td className="bg-purple-200">
        <span class="text-xl">{booking?.phone} </span>
      </td>
      <td className="bg-cyan-200">
        <span class="text-xl">{booking?.address} </span>
      </td>
      <td className="bg-green-200">
        <button className="btn btn-sm">Pending</button>
      </td>
    </tr>
  );
};

export default ManageAllOrder;
