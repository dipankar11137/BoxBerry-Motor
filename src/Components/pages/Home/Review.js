import React from "react";

const Review = ({ review }) => {
  const { img, name, description } = review;
  return (
    <div className="card w-52 bg-slate-900 text-white shadow-xl hover:bg-fuchsia-900">
      <div className="card-body items-center text-center">
        <p>{description}</p>
      </div>
      <div className="flex justify-end p-3">
        <h2 className="mr-5">{name}</h2>
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span className="text-xs">
              <img src={img} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
