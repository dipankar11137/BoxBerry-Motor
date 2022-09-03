import React from "react";
import Footer from "../../Share/Footer";
import Banner from "./Banner";
import CameraTools from "./CameraTools";
import CarTools from "./CarTools";
import PhoneProducts from "./PhoneProducts";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <CarTools />
      <CameraTools />
      <PhoneProducts />
      <Footer />
    </div>
  );
};

export default Home;
