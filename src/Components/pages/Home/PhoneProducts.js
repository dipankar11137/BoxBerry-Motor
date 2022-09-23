import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneProduct from "./PhoneProduct";

const PhoneProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-purple-300  m-5 rounded-xl">
      <h1 className="text-5xl text-center uppercase font-bold pt-5 text-fuchsia-900">
        Mobile Phone Products{" "}
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-10 px-4 gap-x-2 gap-y-6">
        {products.slice(0, 10).map((product) => (
          <PhoneProduct key={product._id} product={product}></PhoneProduct>
        ))}
      </div>
      <div className="flex justify-end m-8 pb-5">
        <Link to="/showAllMobilePhone">
          <button className="btn font-bold">
            Show All Mobile Phone Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhoneProducts;
