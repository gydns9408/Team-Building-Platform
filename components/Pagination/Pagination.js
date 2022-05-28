import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/jss/nextjs-material-kit/components/paginationStyle";

const useStyles = makeStyles(styles);

const Paging = ({ currentPage, MaxPage, handel }) => {
  const classes = useStyles(styles);
  return (
    <Pagination
      classNmae={classes.pagination}
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
