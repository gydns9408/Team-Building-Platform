import Header from "../header/Header";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <Box sx={{ mx: 9.125 }}>
        <div className="layout">{props.children}</div>
      </Box>
    </Fragment>
  );
};

export default Layout;
