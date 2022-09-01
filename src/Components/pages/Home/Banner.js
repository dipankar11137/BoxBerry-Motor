import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import car from "../../../Images/Banner/car-1.jpg";
import camera from "../../../Images/Banner/camera1.jpg";
import laptop from "../../../Images/Banner/laptop.jpg";
import "../../CSS/Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
  };
  return (
    <Slider {...settings}>
      <div div className="relative h-scren w-screen ">
        <img className="object-fill sliderImg w-screen" src={car} alt="" />
        <div className="absolute1 flex flex-col  justify-start">
          <div>
            <p className="heroP text-lime-200 ">BoxBerry Motor</p>
          </div>
          <div>
            <h1 className="heroHead text-start ">CaR</h1>
          </div>
          <div>
            <p className="heroP text-white pb-4 ">
              {" "}
              Apple Product dolor amet consectetur <br />
              adipisicing Nobis, excepturi.{" "}
            </p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
      <div div className="relative h-scren w-screen ">
        <img className="object-fill sliderImg w-screen" src={laptop} alt="" />
        <div className="absolute1 flex flex-col  justify-start">
          <div className="mt-36">
            <p className="heroP text-lime-500 ">
              {" "}
              City<span className="text-orange-500">
                Crown
              </span> Electronics{" "}
            </p>
          </div>
          <div>
            <h1 className="heroHead text-start ">Laptop</h1>
          </div>
          <div>
            <p className="heroP text-lime-200 ">BoxBerry Motor</p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
      <div div className="relative h-scren w-screen ">
        <img className="object-fill sliderImg w-screen" src={camera} alt="" />
        <div className="absolute1 flex flex-col  justify-start">
          <div>
            <p className="heroP text-lime-200 ">BoxBerry Motor</p>
          </div>
          <div>
            <h1 className="heroHead text-start ">Camera product</h1>
          </div>
          <div>
            <p className="heroP text-white pb-4 ">
              {" "}
              Apple Product dolor amet consectetur <br />
              adipisicing Nobis, excepturi.{" "}
            </p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
