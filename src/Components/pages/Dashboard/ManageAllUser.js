import React from "react";
import { toast } from "react-toastify";

const ManageAllUser = ({ user }) => {
  const makeAdmin = () => {
    // fetch(`http://localhost:5000/user/admin/${user?.email}`, {
    //   method: "PUT",
    //   headers: {},
    // })
    //   .then((res) => {
    //     // if (res.status === 403) {
    //     //   toast.error("Failed to Make an admin");
    //     // }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       // refetch();
    //       toast.success(`Successfully made an admin`);
    //     }
    //   });
    // console.log(user?.email);
  };
  return (
    <tr>
      <td>{user?.email}</td>
      <td>
        {user?.role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs btn-secondary">
            Add Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove Admin</button>
      </td>
    </tr>
  );
};

export default ManageAllUser;
