import React from "react";

const Blog = ({ blog }) => {
  const { _id, img3, name, date, description } = blog;
  console.log(blog);
  return (
    <div className="card bg-base-300 hover:bg-purple-300 shadow-2xl md:mr-4">
      <figure>
        <img
          src={img3}
          alt=""
          className="h-72 w-full pic-style"
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center">
          <p>{date}</p>
          <p className="text-xl font-semibold">
            <small>Author: {name}</small>
          </p>
        </div>
        <h2 className="card-title text-orange-600 font-bold">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
