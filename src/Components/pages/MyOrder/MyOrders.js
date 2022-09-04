import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Footer from "../../Share/Footer";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const email = user?.email;
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/carBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [booking]);

  const handleRemove = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `http://localhost:5000/carBooking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = booking.filter((product) => product._id !== id);
          setBooking(remaining);
          toast.success("Successfully Remove");
        });
    }
  };

  return (
    <div>
      <div className="bg-slate-700 pb-10 text-white">
        <h1>Booking</h1>
        <div class="overflow-x-auto mx-52 border rounded-xl text-black ">
          <table class="table w-full text-center text-2xl">
            <thead>
              <tr className="text-white">
                <th className="bg-purple-900 "></th>
                <th className="bg-fuchsia-900">Product Name</th>
                <th className="bg-cyan-900">Delivery Date</th>
                <th className="bg-green-900">Quantity</th>
                <th className="bg-indigo-900">Remove Product</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book) => (
                <MyOrder
                  key={book._id}
                  book={book}
                  handleRemove={handleRemove}
                ></MyOrder>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyOrders;
