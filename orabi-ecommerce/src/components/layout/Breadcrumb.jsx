import React from "react";
import Heading from "./Heading";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className=" mt-32 mb-36">
      <Heading
        as="h2"
        text={title}
        className="font-dm font-bold text-primary text-5xl mb-3"
      />
      <p className="font-dm font-normal text-[#767676] text-xs flex items-center gap-x-2">
        <Link to="/">Home</Link> <LiaAngleRightSolid />{" "}
        {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default Breadcrumb;
