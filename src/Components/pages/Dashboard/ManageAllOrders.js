import React, { useEffect, useState } from "react";
import ManageAllOrder from "./ManageAllOrder";

const ManageAllOrders = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/carBooking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="mx-6">
      <h1 className="text-center text-white font-bold text-2xl pb-3 uppercase">
        Manage All order
      </h1>
      <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-full text-center">
            <thead>
              <tr>
                <th className="pl-14 text-sm"> Name</th>
                <th className="text-sm">Quantity</th>
                <th className="text-sm">Delivery Date</th>
                <th className="text-sm">Phone</th>
                <th className="text-sm">Address</th>
                <th className="text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <ManageAllOrder
                  key={booking._id}
                  booking={booking}
                ></ManageAllOrder>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
