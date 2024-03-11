import React from "react";
import SideBarContent from "./SideBarContent";
import { category, colors, brands, prices } from "../../data/data";

const LeftSideBar = () => {
  return (
    <>
      <SideBarContent
        dropDown={true}
        dropDownTitle="Shop by Category"
        data={category}
      />
      <SideBarContent
        dropDown={false}
        dropDownTitle="Shop by Color"
        data={colors}
        // subDivColor={colors.code}
      />
      <SideBarContent
        dropDown={false}
        dropDownTitle="Shop by Brand"
        data={brands}
      />
      <SideBarContent
        dropDown={false}
        dropDownTitle="Shop by Price"
        data={prices}
      />
    </>
  );
};

export default LeftSideBar;
