import React from "react";
import notFound from "../../Images/Not Found/notFound.jpg";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center m-5">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
