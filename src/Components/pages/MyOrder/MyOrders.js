import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Footer from "../../Share/Footer";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const email = user?.email;

  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch(`https://boxberry.onrender.com/carBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [booking,email]);

  const handleRemove = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `https://boxberry.onrender.com/carBooking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = booking.filter((product) => product._id !== id);
          setBooking(remaining);
          // manageQuantity(booking?.quantity, id);
          toast.success("Successfully Remove");
        });
    }
  };

  // delivery products minus
  // const manageQuantity = (quantity, id) => {
  //   console.log("get", quantity);
  //   console.log("booking", booking?.quantity);
  //   // if (booking?.quantity > 0) {
  //   const newQuantity = parseInt(booking?.quantity) + quantity;
  //   const updateQuantity = { quantity: newQuantity };

  //   fetch(`https://boxberry.onrender.com/carTools/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(updateQuantity),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBooking(data);
  //       // toast.success("Product Delivery Successful");
  //     });
  // } else {
  //   toast.error("Sold Out");
  // }
  // };

  return (
    <div >
      <div className="bg-slate-700 pb-10 h-screen text-white">
        {/* <h1 className="">Booking</h1> */}
        <div className="overflow-x-auto mx-52 border rounded-xl text-black ">
          <table className="table w-full text-center text-2xl">
            <thead>
              <tr className="text-white">
                {/* <th></th> */}
                <th className="bg-purple-900 "></th>
                <th className="bg-fuchsia-900">Product Name</th>
                <th className="bg-cyan-900">Delivery Date</th>
                <th className="bg-green-900">Quantity</th>
                <th className="bg-sky-900">Payment</th>
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
