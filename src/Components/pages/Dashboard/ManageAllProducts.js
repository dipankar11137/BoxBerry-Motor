import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ManageAllProduct from "./ManageAllProduct";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [car, setCar] = useState();
  const [singleProduct, setSingleProduct] = useState({});

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

  const handleEdit = (id) => {
    fetch(`http://localhost:5000/carTools/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  };
  // restock Product
  const handleRestock = (event) => {
    event.preventDefault();
    const newQuantity =
      parseInt(event.target.quantity.value) + parseInt(singleProduct.quantity);
    console.log(newQuantity);
    const updateQuantity = { quantity: newQuantity };
    fetch(`http://localhost:5000/carTools/${singleProduct?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        toast.success("Restock Is Successfully");
        event.target.reset();
      });
  };

  return (
    <div className="lg:ml-20 p-4">
      <h1 className="text-center text-2xl  font-bold text-white uppercase mb-4 mr-20">
        Manage Car Tools
      </h1>

      <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-10/12 text-center">
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
                  handleEdit={handleEdit}
                  singleProduct={singleProduct}
                  handleRestock={handleRestock}
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
