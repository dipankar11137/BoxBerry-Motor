import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://boxberry.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mb-10 p-5 bg-gray-300 mx-10 rounded-xl">
      <h1 className="text-center text-purple-600 text-5xl font-bold pb-5">
        Customer Reviews
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-6  gap-4">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
