import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Parser from "html-react-parser";
const SectionTagsView = ({ body, image_url, type }) => {
  useEffect(() => {
  }, []);
  return (
    <Box>
      <img src={image_url} />
      <p>{Parser(body)}</p>
    </Box>
  );
};

export default SectionTagsView;
