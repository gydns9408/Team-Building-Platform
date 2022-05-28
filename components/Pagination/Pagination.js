import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
const Paging = ({ currentPage, MaxPage, handel }) => {
  return (
    <Pagination
      activePage={currentPage}
      totalItemsCount={MaxPage}
      itemsCountPerPage={16}
      pageRangeDisplayed={10}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handel}
    />
  );
};

export default Paging;
