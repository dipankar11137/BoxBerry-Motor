import React from "react";

const Review = ({ review }) => {
  const { img, name, description } = review;
  return (
    <div className="card w-52 bg-slate-900 text-white shadow-xl hover:bg-fuchsia-900">
      <figure className="px-10 pt-10">
        <img className="mask mask-pentagon" src={img} alt="" />
      </figure>
      <div className="card-body items-center text-center">
        <p>{description}</p>

        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default Review;
