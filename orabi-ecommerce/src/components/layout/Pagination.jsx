import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import Arrive_img1 from "../../assets/arrive_img1.jpg";
import Arrive_img2 from "../../assets/arrive_img2.jpg";
import Arrive_img3 from "../../assets/arrive_img3.jpg";
import Arrive_img4 from "../../assets/arrive_img4.jpg";
import Paragraph from "./Paragraph";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="w-full sm:w-[48%] lg:w-[30%]">
            <Product src={Arrive_img1} alt="Arrive_img1" badge={true} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(endOffset);
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  // console.log(items.length);
  // console.log(pageCount);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // amader page number ar sathe item number gun korte hobe
    // console.log(newOffset);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-col gap-y-7 sm:flex-row sm:flex-wrap sm:gap-x-4 xl:gap-x-10 lg:gap-y-12">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        nextClassName="hidden"
        pageLinkClassName="border border-[#F0F0F0] py-2.5 md:max-lg:p-1.5 px-3.5 inline-block font-dm font-normal text-sm text-[#767676]"
        breakClassName="flex items-end"
        breakLinkClassName="page-link"
        containerClassName="flex gap-x-4 md:max-lg:gap-x-2.5 mt-12 flex-wrap gap-y-2 md:gap-y-0"
        activeClassName="bg-primary text-white"
      />
      <Paragraph
        text={`Products from ${itemOffset} to ${endOffset} of ${items.length}`}
        className="font-dm font-normal text-sm text-[#767676] md:absolute md:bottom-4 md:right-0 mt-3 md:mt-0"
      />
    </>
  );
};

export default Pagination;
