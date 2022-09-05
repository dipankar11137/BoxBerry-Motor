import React from "react";
import Footer from "../../Share/Footer";
import Banner from "./Banner";
import CameraTools from "./CameraTools";
import CarTools from "./CarTools";
import PhoneProducts from "./PhoneProducts";
import RatingReview from "./RatingReview";
import Review from "./Review";

const Home = () => {
  return (
    <div className="bg-slate-500">
      <Banner />
      <CarTools />
      <CameraTools />
      <PhoneProducts />
      <RatingReview />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
