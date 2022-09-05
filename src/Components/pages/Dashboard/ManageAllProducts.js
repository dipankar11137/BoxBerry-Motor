import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ManageAllProduct from "./ManageAllProduct";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [car, setCar] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/carTools")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [car]);

  const handleRemove = (id) => {
    const proceed = window.confirm("Are you sure ?");
    if (proceed) {
      const url = `http://localhost:5000/carTools/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const reaming = products.filter((product) => product._id !== id);
          console.log(reaming);
          setCar(reaming);
          toast("Delete this products");
        });
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl mt-7 font-bold text-purple-900 uppercase mb-4">
        Manage Car Tools
      </h1>

      <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <thead>
              <tr>
                <th className="pl-14 text-sm"> Name</th>
                <th className="text-sm">Available Quantity</th>
                <th className="text-sm">Edit Product</th>
                <th className="text-sm">Remove Products</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ManageAllProduct
                  key={product._id}
                  product={product}
                  handleRemove={handleRemove}
                ></ManageAllProduct>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllProducts;
