import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ManageAllUser from "./ManageAllUser";

const ManageAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boxberry.onrender.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return (
    <div className="mx-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Add Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ManageAllUser key={user._id} user={user}></ManageAllUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllUsers;
