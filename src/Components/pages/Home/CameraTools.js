import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CameraTool from "./CameraTool";

const CameraTools = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://boxberry.onrender.com/cameraProducts/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-8 mt-5 bg-slate-400 mx-4 rounded-2xl shadow-2xl">
      {/* <hr className="mt-5" /> */}
      <h1 className="text-5xl text-center uppercase font-bold  text-fuchsia-900">
        Camera Tools Products{" "}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10">
        {products.slice(0, 6).map((product) => (
          <CameraTool key={product._id} product={product}></CameraTool>
        ))}
      </div>
      <div className="flex justify-end m-8">
        <Link to="/showAllCameraTools">
          <button className="btn  ">Show All Camera Tools</button>
        </Link>
      </div>
    </div>
  );
};

export default CameraTools;
