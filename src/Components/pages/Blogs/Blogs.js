import React from "react";
import { useQuery } from "react-query";
import Footer from "../../Share/Footer";
import Loading from "../../Share/Loading";
import Blog from "./Blog";

// import Loading from "../../Share/Loading";
// import Blog from "./Blog";

const Blogs = () => {
  const { data: blogs, isLoading } = useQuery("blogs", () =>
    fetch("https://boxberry.onrender.com/carTools").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" bg-slate-700 ">
      <div className="max-w-7xl mx-auto mb-8">
        <h4 className="text-3xl text-center font-bold mb-8 pt-8 text-white">
          Our Blogs
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs?.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
