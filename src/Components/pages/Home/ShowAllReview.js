import React, { useEffect, useState } from "react";
import Footer from "../../Share/Footer";
import Review from "./Review";

const ShowAllReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://boxberry.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-slate-700">
      <div className="mb-10 p-5 bg-gray-300 mx-10 rounded-xl">
        <h1 className="text-center text-purple-600 text-5xl font-bold pb-5">
          Customer Reviews
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5  gap-4">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowAllReview;
