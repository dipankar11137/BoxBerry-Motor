import React, { useEffect, useState } from "react";
import CarTool from "./CarTool";

const CarTools = () => {
  const [carTools, setCarTools] = useState([]);
  const [carToolId, setCarToolId] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/carTools")
      .then((res) => res.json())
      .then((data) => setCarTools(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/carTools/${id}`)
      .then((res) => res.json())
      .then((data) => setCarToolId(data));
  }, [carToolId]);

  const addToCard = (id) => {
    setId(id);
  };

  const handleModal = (id) => {
    setId(id);
  };
  return (
    <div className="px-8">
      <h1>Car Items</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4  gap-4">
        {carTools.slice(0, 8).map((tool) => (
          <CarTool
            key={tool._id}
            tool={tool}
            handleModal={handleModal}
            carToolId={carToolId}
            addToCard={addToCard}
          ></CarTool>
        ))}
      </div>
    </div>
  );
};

export default CarTools;
