import React from "react";
import { toast } from "react-toastify";

const ManageAllUser = ({ user }) => {
  const makeAdmin = () => {
    fetch(`https://boxberry.onrender.com/user/admin/${user?.email}`, {
      method: "PUT",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made an admin`);
        }
      });
    // console.log(user?.email);
  };
  return (
    <tr>
      <td>{user?.email}</td>
      <td>
        {user?.role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-xs btn-orange-500">
            Add Admin
          </button>
        ) : (
          <h1 className="text-green-700 font-bold">Already Admin</h1>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove Admin</button>
      </td>
    </tr>
  );
};

export default ManageAllUser;
