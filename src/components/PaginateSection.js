import React from 'react'
import ReactPaginate from "react-paginate";
function PaginateSection({ getPage, pageCount }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      className=""
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"flex border-1 border-black gap-4"}
      pageLinkClassName={
        "cursor-pointer min-w-[2rem] bg-slate-900 text-white  hover:bg-sky-700  duration-300  p-1 text-center flex items-center justify-center rounded-xl"
      }
      previousLinkClassName={
        "cursor-pointer min-w-[2rem] bg-slate-900 text-white  hover:bg-sky-700  duration-300  p-1 text-center flex items-center justify-center rounded-xl"
      }
      nextLinkClassName={
        "cursor-pointer min-w-[2rem] bg-slate-900 text-white  hover:bg-sky-700  duration-300  p-1 text-center flex items-center justify-center rounded-xl"
      }
      breakLinkClassName={
        "cursor-pointer min-w-[2rem] bg-slate-900 text-white  hover:bg-sky-700  duration-300  p-1 text-center flex items-center justify-center rounded-xl"
      }
      activeLinkClassName={
        "min-w-[2rem] bg-sky-500 text-black   duration-300  p-1 text-center flex items-center justify-center rounded-xl"
      }
    />
  );
}

export default PaginateSection
