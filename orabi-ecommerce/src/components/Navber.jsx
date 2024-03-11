import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Flex from "./layout/Flex";
import Listitem from "./layout/Listitem";
import List from "./layout/List";
import Image from "./layout/Image";
import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import Container from "./layout/Container";

const Navber = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth(e) {
      // console.log(window.innerWidth);
      if (window.innerWidth < 768) {
        console.log("ami responsive hoichi");
        setShow(false);
      } else {
        setShow(true);
      }
    }

    scrollWidth();

    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <nav>
      <Container>
        <Flex className="flex-col md:flex-row py-8">
          <div className=" md:w-2/5 relative">
            <Image imgsrc={Logo} alttext="logo" />
            {/* <img src={Logo} alt="logo" /> */}
            <FaBars
              className="block md:hidden absolute top-0 right-0 cursor-pointer"
              onClick={() => setShow(!show)}
            />
          </div>
          <div className=" md:w-3/5">
            {show && (
              <List className="md:flex gap-x-10 font-dm text-sm md:max-lg:justify-end mt-4 md:mt-0">
                <Listitem itemname="Home" className="text-primary font-bold" />
                <Listitem
                  itemname="Shop"
                  className="font-normal text-secondary hover:font-bold hover:text-primary my-2 md:my-0"
                />
                <Listitem
                  itemname="About"
                  className="font-normal text-secondary hover:font-bold hover:text-primary my-2 md:my-0"
                />
                <Listitem
                  itemname="Contacts"
                  className="font-normal text-secondary hover:font-bold hover:text-primary my-2 md:my-0"
                />
                <Listitem
                  itemname="Journal"
                  className="font-normal text-secondary hover:font-bold hover:text-primary my-2 md:my-0"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navber;
