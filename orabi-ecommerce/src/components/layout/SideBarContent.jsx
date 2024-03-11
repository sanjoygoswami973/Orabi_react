import React, { useState } from "react";
import Heading from "./Heading";
import { IoMdArrowDropdown } from "react-icons/io";
import Flex from "./Flex";
import LeftSlidebarItem from "./LeftSlidebarItem";
import Paragraph from "../layout/Paragraph";
import { category, colors, brands, prices } from "../../data/data";

const SideBarContent = ({ dropDown, dropDownTitle, data }) => {
  // let [category1, setCategory1] = useState(category);
  // console.log(category, colors, brands, prices);
  let [drop, setDrop] = useState(dropDown);
  let [barItemShow, setBarItemShow] = useState(dropDown);

  // category1.map((citem) => {
  //   console.log(citem);
  //   console.log(citem.name);
  //   console.log(citem.subCategory);
  //   citem.subCategory.map((citem2) => {
  //     console.log(citem2);
  //     console.log(citem2.name);
  //   });
  // });

  return (
    <div className="mb-[53px]">
      {drop ? (
        <Flex
          onClick={() => setBarItemShow(!barItemShow)}
          className="items-center justify-between cursor-pointer mb-9"
        >
          <Heading
            as="h3"
            text={dropDownTitle}
            className="font-dm font-bold text-xl text-primary "
          />
          <IoMdArrowDropdown className=" text-2xl" />
        </Flex>
      ) : (
        <Heading
          as="h3"
          text={dropDownTitle}
          className="font-dm font-bold text-xl text-primary cursor-pointer mb-9"
        />
      )}

      {barItemShow && (
        <>
          {data.map((item) => (
            <LeftSlidebarItem
              subdropDown={item.subCategory ? true : false}
              subdropDownTitle={item.name}
              divColor={item.code}
            >
              {item.subCategory &&
                item.subCategory.map((subItem) => (
                  <Paragraph
                    className="font-dm font-normal text-base text-[#767676cb] cursor-pointer mt-5 pb-5 border-b border-solid border-[#767676]"
                    text={subItem.name}
                  />
                ))}
            </LeftSlidebarItem>
          ))}
        </>
      )}

      {!drop && (
        <>
          {data.map((item) => (
            <LeftSlidebarItem
              subdropDown={item.subCategory ? true : false}
              subdropDownTitle={item.name}
              divColor={item.code}
            >
              {item.subCategory &&
                item.subCategory.map((subItem) => (
                  <Paragraph
                    className="font-dm font-normal text-base text-[#767676cb] cursor-pointer mt-5 pb-5 border-b border-solid border-[#767676]"
                    text={subItem.name}
                  />
                ))}
            </LeftSlidebarItem>
          ))}
        </>
      )}
    </div>
  );
};

export default SideBarContent;
