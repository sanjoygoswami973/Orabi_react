import React, { useRef } from "react";
import Heading from "./layout/Heading";
import Paragraph from "./layout/Paragraph";
import {
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import Button from "./layout/Button";
import Icon from "./layout/Icon";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Product from "./layout/Product";
import Bestseller_img1 from "../assets/bestseller_img1.jpg";
import Bestseller_img2 from "../assets/bestseller_img2.jpg";
import Bestseller_img3 from "../assets/bestseller_img3.jpg";
import Bestseller_img4 from "../assets/bestseller_img4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Bestseller = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container className=" mt-12 sm:max-xl:mt-20 2xl:mt-28">
        <Heading
          as="h2"
          className="font-dm font-bold text-3xl justify-center md:max-2xl:pl-5 sm:justify-start sm:text-40px mb-12"
          text="Our Bestsellers"
        />
        <div className="relative">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div>
              <Product
                src={Bestseller_img1}
                alt="Bestseller_img1"
                badge={true}
              />
            </div>
            <div>
              <Product
                src={Bestseller_img2}
                alt="Bestseller_img2"
                badge={true}
              />
            </div>
            <div>
              <Product
                src={Bestseller_img3}
                alt="Bestseller_img3"
                badge={true}
              />
            </div>
            <div>
              <Product
                src={Bestseller_img4}
                alt="Bestseller_img4"
                badge={true}
              />
            </div>
          </Slider>
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={previous}>
              <div className=" w-16 h-16 rounded-full bg-[#C7C7C7] flex justify-center items-center absolute left-0 top-1/3">
                <Icon
                  iconname={
                    <FaLongArrowAltLeft className=" text-xl text-white" />
                  }
                />
              </div>
            </button>
            <button className="button" onClick={next}>
              <div className=" w-16 h-16 rounded-full bg-[#C7C7C7] flex justify-center items-center absolute right-0  top-1/3">
                <Icon
                  iconname={
                    <FaLongArrowAltRight className=" text-xl text-white" />
                  }
                />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Bestseller;
