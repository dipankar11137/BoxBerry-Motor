import React from "react";
import { Link } from "react-router-dom";

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
      <td className="bg-sky-300">
        {book?.price && !book?.paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            {" "}
            <button className="btn btn-sm">Pay</button>
          </Link>
        )}
        {book?.price && book?.paid && <span className="btn btn-sm">Payed</span>}
      </td>
      <td className="bg-indigo-300">
        <button onClick={() => handleRemove(_id)} className="btn btn-xs">
          Remove Order
        </button>
      </td>
    </tr>
  );
};

export default MyOrder;
