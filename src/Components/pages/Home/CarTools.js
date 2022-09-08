import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarTool from "./CarTool";

const CarTools = () => {
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

  const handleShowAllCarProducts = () => {
    navigate("/showAllCarProducts");
  };
  return (
    <div className="px-8 bg-slate-400 mx-4 p-4 rounded-2xl shadow-2xl">
      <h1 className="text-center text-6xl font-bold py-3 uppercase text-fuchsia-900">
        Car Items
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4  gap-4">
        {carTools.slice(0, 8).map((tool) => (
          <CarTool
            key={tool._id}
            tool={tool}
            handleModal={handleModal}
            carToolId={carToolId}
            handleBooking={handleBooking}
          ></CarTool>
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <button onClick={handleShowAllCarProducts} className="btn">
          Show All{" "}
        </button>
      </div>
    </div>
  );
};

export default CarTools;
