import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Share/Footer";
import CarTool from "./CarTool";

const AllCarProducts = () => {
  const [carTools, setCarTools] = useState([]);
  const [carToolId, setCarToolId] = useState({});
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://boxberry.onrender.com/carTools")
      .then((res) => res.json())
      .then((data) => setCarTools(data));
  }, [carTools]);

  useEffect(() => {
    fetch(`https://boxberry.onrender.com/carTools/${id}`)
      .then((res) => res.json())
      .then((data) => setCarToolId(data));
  }, [carToolId]);

  const handleModal = (id) => {
    setId(id);
  };

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <div>
      <div className="px-8 bg-slate-400 mx-4 p-4 rounded-2xl shadow-2xl">
        <h1 className="text-center text-6xl font-bold py-3 uppercase text-fuchsia-900">
          Car Items
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4  gap-4">
          {carTools.map((tool) => (
            <CarTool
              key={tool._id}
              tool={tool}
              handleModal={handleModal}
              carToolId={carToolId}
              handleBooking={handleBooking}
            ></CarTool>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCarProducts;
