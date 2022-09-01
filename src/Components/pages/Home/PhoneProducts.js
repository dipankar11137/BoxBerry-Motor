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
    <div>
      <hr />
      <h1 className="text-5xl text-center uppercase font-bold mt-5 text-amber-600">
        Mobile Phone Products{" "}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-10 gap-4 p-3">
        {products.slice(0, 8).map((product) => (
          <PhoneProduct key={product._id} product={product}></PhoneProduct>
        ))}
      </div>
      <div className="flex justify-end m-8">
        <Link to="/showAllMobilePhone">
          <button className="btn btn-primary font-bold">
            Show All Mobile Phone Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhoneProducts;
