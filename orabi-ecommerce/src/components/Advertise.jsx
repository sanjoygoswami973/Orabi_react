import React from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Image from "./layout/Image";
import PhoneImg from "../assets/phoneImg.jpg";
import ElectronicImg from "../assets/electronicImg.jpg";
import FurnitureImg from "../assets/furnitureImg.jpg";
import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <div className=" mt-10 sm:mt-20 lg:mt-36 mb-10 sm:mb-20 lg:mb-32">
      <Container>
        <Flex className=" gap-x-2.5 sm:gap-x-5 lg:gap-x-10 lg:items-center">
          <div className="max-w-2/4">
            <Link to="#">
              <Image imgsrc={PhoneImg} alttext="phone" />
            </Link>
          </div>
          <div className="max-w-2/4">
            <Link to="#">
              <Image imgsrc={ElectronicImg} alttext="phone" />
            </Link>
            <Link to="#" className="mt-2.5 sm:mt-5 lg:mt-10 inline-block">
              <Image imgsrc={FurnitureImg} alttext="phone" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
