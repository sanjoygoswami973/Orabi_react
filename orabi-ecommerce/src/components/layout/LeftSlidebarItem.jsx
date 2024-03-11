import React, { useState } from "react";
import Heading from "./Heading";
import { FaPlus } from "react-icons/fa6";
import Flex from "./Flex";
import { FiMinus } from "react-icons/fi";

const LeftSlidebarItem = (props) => {
  let [drop, setDrop] = useState(props.subdropDown);
  // let [barItemShow, setBarItemShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let isActiveFun = (showItem) => {
    // setBarItemShow(showItem);
    setIsActive(showItem);
  };
  return (
    <div>
      {drop ? (
        // {inActive ? <FiMinus onClick={()=>{setIsActive(!isActive)}}/>:<FaPlus onClick={}}
        <Flex
          onClick={() => isActiveFun(!isActive)}
          className="items-center justify-between cursor-pointer mt-5 pb-5 border-b border-solid border-[#767676] "
        >
          <Heading
            styleProps={{ background: props.divColor }}
            as="h3"
            spanColorClass={`w-3 h-3 rounded-full mr-2`}
            color={props.divColor}
            text={props.subdropDownTitle}
            className="font-dm font-normal text-base text-[#767676]"
          />
          {isActive ? (
            <FiMinus className="text-[#767676]" />
          ) : (
            <FaPlus className="text-sm text-[#767676]" />
          )}
          {/* <FaPlus className=" text-sm text-[#767676]" /> */}
        </Flex>
      ) : (
        <Flex className="items-center justify-between cursor-pointer mt-5 pb-5 border-b border-solid border-[#767676] ">
          <Heading
            styleProps={{ background: props.divColor }}
            as="h3"
            spanColorClass={`w-3 h-3 rounded-full mr-2`}
            color={props.divColor}
            text={props.subdropDownTitle}
            className="font-dm font-normal text-base text-[#767676]"
          />
        </Flex>
      )}

      {isActive && <div>{props.children}</div>}
    </div>
  );
};

export default LeftSlidebarItem;
