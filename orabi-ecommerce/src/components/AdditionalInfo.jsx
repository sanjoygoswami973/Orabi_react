import React from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck, FaUndoAlt } from "react-icons/fa";
import Paragraph from "./layout/Paragraph";

const AdditionalInfo = () => {
  return (
    <div className="bg-white border-b-2 border-solid border-[#F0F0F0] mt-2">
      <Container>
        <Flex className="justify-between py-30px ">
          <Paragraph
            className="font-dm font-normal text-10px sm:text-base text-[#6D6D6D]"
            text="Two years warranty"
            iconleft={
              <PiNumberTwoBold className=" text-base sm:text-2xl text-primary mr-1 sm:mr-1.5" />
            }
          />
          <Paragraph
            className="font-dm font-normal text-10px sm:text-base text-[#6D6D6D]"
            text="Free shipping"
            iconleft={
              <FaTruck className=" text-sm sm:text-base text-primary mr-1 sm:mr-1.5" />
            }
          />
          <Paragraph
            className="font-dm font-normal text-10px sm:text-base text-[#6D6D6D]"
            text="Return policy in 30 days"
            iconleft={
              <FaUndoAlt className=" text-sm sm:text-base text-primary mr-1 sm:mr-1.5" />
            }
          />
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
