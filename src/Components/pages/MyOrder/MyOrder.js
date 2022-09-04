import React from "react";

const MyOrder = ({ book, handleRemove }) => {
  const { _id, name, date, quantity, img } = book;
  return (
    <tr>
      <td className="bg-purple-300">
        <img className="mask mask-pentagon h-20 w-20" src={img} alt="" />
      </td>
      <td className="bg-fuchsia-300">{name}</td>
      <td className="bg-cyan-100">{date}</td>
      <td className="bg-green-300">{quantity}</td>
      <td className="bg-indigo-300">
        <button onClick={() => handleRemove(_id)} class="btn btn-xs">
          Remove Order
        </button>
      </td>
    </tr>
  );
};

export default MyOrder;
