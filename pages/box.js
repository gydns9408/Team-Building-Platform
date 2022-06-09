import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
const Box = ({ title, body, id }) => {
  return (
    <Box>
      <Link href={`${process.env.HOST_NAME}/contest/Read/${id}`}>
        <p>{title}</p>
        <p>{body}</p>
      </Link>
    </Box>
  );
};

export default Box;
