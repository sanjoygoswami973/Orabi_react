import React from "react";
import Image from "./layout/Image";
import Advertisement_bg from "../assets/advertisement_bg.jpg";
import Container from "./layout/Container";
import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <div className=" w-full mt-12 sm:max-xl:mt-20 2xl:mt-32">
      <Container>
        <Link to="#">
          <Image
            className="w-full"
            imgsrc={Advertisement_bg}
            alttext="advertisement_bg"
          />
        </Link>
      </Container>
    </div>
  );
};

export default Advertisement;
