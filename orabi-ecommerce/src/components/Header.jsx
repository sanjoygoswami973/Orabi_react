import React, { useEffect, useRef, useState } from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Dropdown from "./layout/Dropdown";
import { HiBars2 } from "react-icons/hi2";
import List from "./layout/List";
import Listitem from "./layout/Listitem";
import Input from "./layout/Search";
import Search from "./layout/Search";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import Cartimage from "../assets/cartimage.png";
import Image from "./layout/Image";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryDropdownShow, setCategoryDropdownShow] = useState(false);
  let [userDropdownShow, setUserDropdownShow] = useState(false);
  let [cartDropdownShow, setCartDropdownShow] = useState(false);

  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(categoryRef.current);
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropdownShow(true);
      } else {
        setCategoryDropdownShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropdownShow(true);
      } else {
        setUserDropdownShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartDropdownShow(true);
      } else {
        setCartDropdownShow(false);
      }
    });
  }, []);

  return (
    <div className=" bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="items-center justify-between">
          <div>
            <Dropdown className="relative z-50" dropref={categoryRef}>
              <p className="flex items-center gap-x-2.5">
                <span className="text-2xl">
                  <HiBars2 />
                </span>
                <span className="text-sm font-normal font-dm text-primary hidden md:inline-block">
                  Shop by Category
                </span>
              </p>
              {categoryDropdownShow && (
                <List className="absolute w-263px bg-primary top-11">
                  <Listitem
                    itemname="Accesories"
                    className="py-4 px-5 text-white opacity-70 hover:opacity-100 border-b border-solid border-[#2D2D2D] hover:pl-8 ease-in duration-300"
                  />
                  <Listitem
                    itemname="Furniture"
                    className="py-4 px-5 text-white opacity-70 hover:opacity-100 border-b border-solid border-[#2D2D2D] hover:pl-8 ease-in duration-300"
                  />
                  <Listitem
                    itemname="Electronics"
                    className="py-4 px-5 text-white opacity-70 hover:opacity-100 border-b border-solid border-[#2D2D2D] hover:pl-8 ease-in duration-300"
                  />
                  <Listitem
                    itemname="Clothes"
                    className="py-4 px-5 text-white opacity-70 hover:opacity-100 border-b border-solid border-[#2D2D2D] hover:pl-8 ease-in duration-300"
                  />
                  <Listitem
                    itemname="Bags"
                    className="py-4 px-5 text-white opacity-70 hover:opacity-100 border-b border-solid border-[#2D2D2D] hover:pl-8 ease-in duration-300"
                  />
                  <Listitem
                    itemname="Home appliances"
                    className="px-5 py-4 text-white duration-300 ease-in opacity-70 hover:opacity-100 hover:pl-8"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-auto sm:w-420px lg:w-601px ">
            <Search
              className="w-full py-4 px-3 sm:px-5 placeholder:text-[#C4C4C4] font-dm font-normal text-sm focus:outline-[#C4C4C4]"
              placeholderTxt="Search Products"
            />
            <FaSearch className="absolute -translate-y-1/2 top-1/2 right-5 text-primary " />
          </div>
          <Flex className="gap-x-1 sm:gap-x-6 md:gap-x-10 text-lg">
            <Dropdown className="relative z-50" dropref={userRef}>
              <div className="flex items-center gap-1">
                <FaUser />
                <GoTriangleDown />
              </div>
              {userDropdownShow && (
                <List className="absolute w-200px bg-white font-dm font-normal text-sm text-primary top-11 right-0 text-center border border-solid border-[#F0F0F0] shadow">
                  <Listitem
                    itemname="My Account"
                    className="py-4 hover:text-white hover:bg-primary border-b border-solid border-[#F0F0F0] ease-in duration-300 hover:font-bold"
                  />
                  <Listitem
                    itemname="Log Out"
                    className="py-4 hover:text-white hover:bg-primary border-b border-solid border-[#F0F0F0] ease-in duration-300 hover:font-bold"
                  />
                </List>
              )}
            </Dropdown>
            <div>
              <Dropdown className="relative z-50" dropref={cartRef}>
                <FaShoppingCart />
                {cartDropdownShow && (
                  <div className="absolute right-0 top-11 w-305px sm:w-360px border border-solid shadow-inner border-[#F0F0F0]">
                    <div className="p-5 bg-[#efefea]">
                      <Flex className=" items-center gap-x-5">
                        <div className="w-1/3">
                          <Image imgsrc={Cartimage} />
                        </div>
                        <div className="font-dm font-bold text-sm w-2/3 relative ">
                          <h3 className="mb-3">Black Smart Watch</h3>
                          <p>$44.00</p>
                          <ImCross className=" absolute right-0 top-1/2 -translate-y-1/2 text-primary text-xs" />
                        </div>
                      </Flex>
                    </div>
                    <div className=" bg-white px-3 sm:px-5 pt-4 pb-5">
                      <h4 className="font-dm font-normal text-base text-[#767676] mb-4">
                        Subtotal:{" "}
                        <span className="font-bold text-primary">$44.00</span>
                      </h4>
                      <Link
                        to="#"
                        className=" font-dm font-bold text-sm text-primary border border-solid border-[#2B2B2B] py-4 px-8 sm:px-10 inline-block hover:bg-primary hover:text-white duration-300 mr-3.5 sm:mr-5"
                      >
                        View Cart
                      </Link>
                      <Link
                        to="#"
                        className=" font-dm font-bold text-sm text-white bg-primary border border-solid border-[#2B2B2B] py-4 px-8 sm:px-10 inline-block hover:bg-white hover:text-primary duration-300"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                )}
              </Dropdown>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
