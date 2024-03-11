import React, { Children, useState, useEffect, useRef } from "react";
import Heading from "../components/layout/Heading";
import Container from "../components/layout/Container";
import Paragraph from "../components/layout/Paragraph";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSideBar from "../components/layout/LeftSideBar";
import { RiMicrosoftLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import Form from "../components/layout/Form";
import Label from "../components/layout/Label";
import Select from "../components/layout/Select";
import Option from "../components/layout/Option";
import Icon from "../components/layout/Icon";
import { IoFilterCircle } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import Dropdown from "../components/layout/Dropdown";

const Shop = () => {
  let [showNumber, setShowNumber] = useState(12);
  let [showSideBar, setShowSideBar] = useState(false);
  let sideRef = useRef();

  let handlePaginationChange = (e) => {
    setShowNumber(+e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    function scrollWidth(e) {
      // console.log(window.innerWidth);
      if (window.innerWidth < 639) {
        // console.log("ami responsive hoichi");
        setShowSideBar(false);
      } else {
        setShowSideBar(true);
      }
    }

    scrollWidth();

    window.addEventListener("resize", scrollWidth);

    document.body.addEventListener("click", (e) => {
      // console.log(sideRef.current);
      // console.log(e.target);
      if (sideRef.current.contains(e.target)) {
        console.log(sideRef.current.contains(e.target));
        setShowSideBar(true);
      } else {
        setShowSideBar(false);
      }
    });
  }, []);

  return (
    <Container>
      <Breadcrumb title="Products" />
      <Flex className="gap-x-5 md:gap-x-10 relative">
        {showSideBar && (
          <div className="w-full sm:w-1/4 absolute sm:static top-0 left-0 bg-[#f8f6f6] sm:bg-transparent z-50 pt-12 sm:p-0 px-5">
            <Icon
              iconClass="absolute top-3 right-5 text-2xl cursor-pointer sm:hidden"
              iconname={<IoCloseCircle />}
              onClick={() => setShowSideBar(!showSideBar)}
            />
            <LeftSideBar />
          </div>
        )}
        <div className="w-full sm:w-3/4 relative">
          <div className="flex flex-col md:flex-row md:justify-between mb-14 gap-y-2">
            <div className="hidden sm:block">
              <div className="bg-primary p-3 inline-block mr-5">
                <RiMicrosoftLine className="bg-white" />
              </div>
              <div className=" p-3 border border-solid border-[#F0F0F0] inline-block">
                <FaBars className="text-[#737373]" />
              </div>
            </div>
            <div className="flex gap-x-3 lg:gap-x-10 lg:justify-end">
              <Dropdown
                dropref={sideRef}
                className="flex items-center text-2xl text-[#767676] sm:hidden cursor-pointer"
                // onClick={() => setShowSideBar(!showSideBar)}
              >
                <IoFilterCircle />
              </Dropdown>
              <Form className="flex items-center gap-x-1.5 sm:gap-x-3.5 relative w-auto lg:w-[315px]">
                <Label
                  htmlFor="Featured"
                  className="font-dm font-normal text-base text-[#767676] w-[100px] lg:w-auto"
                  text="Sort by:"
                />
                <Select
                  id="Featured"
                  className="border border-[#F0F0F0] font-dm font-normal text-base text-[#767676] outline-[#767676] focus:ring-blue-500 block w-full py-2 px-2 sm:px-5 max-w-60 appearance-none"
                >
                  <Option defaultValue="FE" text="Featured" />
                  <Option value="FE" text="Computer" />
                  <Option value="FE" text="T-Shirt" />
                  <Option value="FE" text="Bags" />
                  <Option value="FE" text="Shoes" />
                </Select>
                <Icon
                  iconClass=" text-base text-[#737373] absolute right-5 top-1/2 -translate-y-1/2"
                  iconname={<VscTriangleDown />}
                />
              </Form>
              <Form className="flex items-center gap-x-1.5 lg:gap-x-3.5 relative w-auto lg:w-[200px]">
                <Label
                  htmlFor="showItemNumber"
                  className="font-dm font-normal text-base text-[#767676]"
                  text="Show:"
                />
                <Select
                  onClick={handlePaginationChange}
                  id="showItemNumber"
                  className="border border-[#F0F0F0] font-dm font-normal text-base text-[#767676] outline-[#767676] focus:ring-blue-500 block w-full py-2 px-4 sm:px-5 max-w-[140px] appearance-none"
                >
                  <Option defaultValue="12" text="12" />
                  <Option value="24" text="24" />
                  <Option value="48" text="48" />
                  <Option value="96" text="96" />
                </Select>
                <Icon
                  iconClass=" text-base text-[#737373] absolute right-1 lg:right-5 top-1/2 -translate-y-1/2"
                  iconname={<VscTriangleDown />}
                />
              </Form>
            </div>
          </div>
          <Pagination itemsPerPage={showNumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
