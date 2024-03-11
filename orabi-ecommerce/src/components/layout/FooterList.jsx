import React from "react";
import Heading from "./Heading";
import List from "./List";
import Listitem from "./Listitem";

const FooterList = ({ heading, litem1, litem2, litem3, litem4, litem5 }) => {
  return (
    <div>
      <Heading
        as="h4"
        text={heading}
        className="mb-4 font-dm text-base font-bold"
      />

      <List>
        <Listitem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
          itemname={litem1}
          href="#"
        />
        <Listitem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
          itemname={litem2}
          href="#"
        />
        <Listitem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
          itemname={litem3}
          href="#"
        />
        <Listitem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
          itemname={litem4}
          href="#"
        />
        <Listitem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
          itemname={litem5}
          href="#"
        />
      </List>
    </div>
  );
};

export default FooterList;
