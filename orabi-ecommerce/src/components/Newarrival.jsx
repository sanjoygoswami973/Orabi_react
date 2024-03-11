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
import Arrive_img1 from "../assets/arrive_img1.jpg";
import Arrive_img2 from "../assets/arrive_img2.jpg";
import Arrive_img3 from "../assets/arrive_img3.jpg";
import Arrive_img4 from "../assets/arrive_img4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Newarrival = () => {
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
      <Container>
        <Heading
          as="h2"
          className="font-dm font-bold text-3xl justify-center md:max-2xl:pl-5 sm:justify-start sm:text-40px mb-12"
          text="New Arrivals"
        />
        <div className="relative">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div>
              <Product src={Arrive_img1} alt="Arrive_img1" badge={true} />
            </div>
            <div>
              <Product src={Arrive_img2} alt="Arrive_img2" badge={true} />
            </div>
            <div>
              <Product src={Arrive_img3} alt="Arrive_img3" badge={true} />
            </div>
            <div>
              <Product src={Arrive_img4} alt="Arrive_img4" badge={true} />
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

export default Newarrival;

{
  /* <Paragraph
        className="bg-red-400"
        text="Paragraph"
        iconleft={<FaCaretSquareLeft />}
        iconright={<FaCaretSquareRight />}
      />
      <Button
        className="bg-red-400"
        text="Button"
        iconleft={<FaCaretSquareLeft />}
        iconright={<FaCaretSquareRight />}
        iconalignment="right"
        href="#"
      /> */
}

{
  /* <div>
            <div className=" w-16 h-16 rounded-full bg-[#C7C7C7] flex justify-center items-center absolute left-0 top-1/3">
              <Icon
                iconname={
                  <FaLongArrowAltLeft className=" text-xl text-white" />
                }
              />
            </div>
            <div className=" w-16 h-16 rounded-full bg-[#C7C7C7] flex justify-center items-center absolute right-0  top-1/3">
              <Icon
                iconname={
                  <FaLongArrowAltRight className=" text-xl text-white" />
                }
              />
            </div>
          </div> */
}

// <div className=" w-370px">
//   <Product src={Arrive_img1} alt="Arrive_img1" badge={true} />
// </div>
// <div className=" w-370px">
//   <Product src={Arrive_img2} alt="Arrive_img2" badge={true} />
// </div>
// <div className=" w-370px">
//   <Product src={Arrive_img3} alt="Arrive_img3" badge={true} />
// </div>
// <div className=" w-370px">
//   <Product src={Arrive_img4} alt="Arrive_img4" badge={true} />
// </div>
