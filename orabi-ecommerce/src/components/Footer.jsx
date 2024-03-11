import React from "react";
import List from "./layout/List";
import Listitem from "./layout/Listitem";
import Image from "./layout/Image";
import Flex from "./layout/Flex";
import Container from "./layout/Container";
import Footer_logo from "../assets/footer_logo.png";
import FooterList from "./layout/FooterList";
import Heading from "./layout/Heading";
import Paragraph from "./layout/Paragraph";

const Footer = () => {
  return (
    <div className=" mt-16 lg:mt-20 xl:mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex-wrap justify-between gap-y-5 xl:pl-0 sm:pl-16 md:max-xl:pl-20 ">
          <div className=" w-[50%] md:w-[30%] lg:w-[13%]">
            <FooterList
              heading="Menu"
              litem1="Home"
              litem2="Shop"
              litem3="About"
              litem4="Contact"
              litem5="Journal"
            />
          </div>
          <div className="w-[50%] md:w-[30%] lg:w-[13%]">
            <FooterList
              heading="SHOP"
              litem1="Category 1"
              litem2="Category 2"
              litem3="Category 3"
              litem4="Category 4"
              litem5="Category 5"
            />
          </div>
          <div className="w-[50%] md:w-[32%] lg:w-[17%]">
            <FooterList
              heading="HELP"
              litem1="Privacy Policy"
              litem2="Terms & Conditions"
              litem3="Special E-shop"
              litem4="Shipping"
              litem5="Secure Payments"
            />
          </div>
          <div className=" w-[50%] md:w-[50%] lg:w-[31%]">
            <div>
              <h4 className="mb-4 font-dm text-[15px] sm:text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className=" w-full md:w-[50%] lg:w-[26%] mt-3">
            <Image
              className="mx-auto"
              imgsrc={Footer_logo}
              alttext="footer_logo"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;

{
  /* <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Home"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shop"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="About"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Contact"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 1"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 2"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 3"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 4"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Privacy Policy"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Terms & Conditions"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Special E-shop"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shipping"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-[30%] justify-center">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <Image imgsrc={Footer_logo} alttext="footer_logo" />
          </div> */
}
