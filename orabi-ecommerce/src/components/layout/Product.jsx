import React from "react";
import Image from "./Image";
import Arrive_img1 from "../../assets/arrive_img1.jpg";
import Badge from "./Badge";
import Paragraph from "./Paragraph";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import Heading from "./Heading";
import Button from "./Button";

const Product = ({ src, alt, className, badge }) => {
  return (
    <div className="mx-auto max-w-md xl:mx-0 sm:max-w-72 md:max-xl:max-w-60 xl:max-w-370px xl:max-2xl:px-4 2xl:px-3">
      <div className="relative overflow-y-hidden group">
        <Image imgsrc={src} className="w-full" alttext={alt} />
        {badge && (
          <Badge
            className="font-dm font-bold text-sm text-white bg-primary py-2.5 px-8 absolute top-5 left-5 "
            text="New"
          />
        )}
        <div className=" bg-white shadow-outerShadow w-full absolute md:max-xl:-bottom-full -bottom-1/2 left-0 md:max-xl:pt-5 pt-8 pb-5 pr-9 group-hover:bottom-1 duration-300">
          <Paragraph
            className=" font-dm font-normal text-base text-[#767676] justify-end "
            text="Add to Wish List"
            iconright={<FaHeart className="text-primary ml-4" />}
            iconalignment="right"
          />
          <Paragraph
            className=" font-dm font-normal text-base text-[#767676] justify-end py-5 md:max-xl:py-3 "
            text="Compare"
            iconright={<TfiReload className="text-primary ml-4" />}
            iconalignment="right"
          />
          <Paragraph
            className=" font-dm font-normal text-base text-[#767676] justify-end "
            text="Add to Cart"
            iconright={<FaShoppingCart className="text-primary ml-4" />}
            iconalignment="right"
          />
        </div>
      </div>
      <div>
        <Heading
          as="h3"
          className="font-dm font-bold md:max-xl:text-17px text-xl text-primary mt-6 mb-4 justify-between"
          text="Basic Crew Neck Tee"
          iconright="$44.00"
          iconalignment="right"
          iconcls="font-dm font-normal text-base text-[#767676]"
        />
        <Paragraph
          text="Black"
          className="font-dm font-normal text-base text-[#767676]"
        />
      </div>
    </div>
  );
};

export default Product;
