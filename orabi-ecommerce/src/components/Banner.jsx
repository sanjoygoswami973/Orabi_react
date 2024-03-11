import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./layout/Image";
import Bannerbg from "../assets/banner_home.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  let [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "7%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                padding: "10px 0",
                borderRight: "3px #262626 solid",
              }
            : {
                width: "30px",
                color: "#262626",
                padding: "10px 0",
                borderRight: "3px #ffffff solid",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "5%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      padding: "5px 0",
                      borderRight: "3px #262626 solid",
                    }
                  : {
                      width: "30px",
                      color: "#262626",
                      padding: "5px 0",
                      borderRight: "3px #ffffff solid",
                      color: "transparent",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 639,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "2%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "24px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      fontSize: "12px",
                      padding: "3px 0",
                    }
                  : {
                      width: "24px",
                      color: "#262626",
                      borderRight: "3px #ffffff solid",
                      color: "transparent",
                      fontSize: "12px",
                      padding: "3px 0",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Link to="#">
        <div>
          <Image
            imgsrc={Bannerbg}
            className="mx-auto block"
            alttext="bannerImgOne"
          />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Image
            imgsrc={Bannerbg}
            className="mx-auto block"
            alttext="bannerImgOne"
          />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Image
            imgsrc={Bannerbg}
            className="mx-auto block"
            alttext="bannerImgOne"
          />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
