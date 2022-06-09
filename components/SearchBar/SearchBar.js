import { useState, useEffect, Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { Box } from "@mui/system";
import Popover from "@mui/material/Popover";
import { makeStyles } from "@material-ui/core/styles";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const styles = {
  searchItem: {},
};

const useStyles = makeStyles(styles);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const reqSearch = async (searchQuery, index, filed, size) => {
  const body = {
    index: index,
    searchQuery: searchQuery,
    filed: filed,
    size: size,
  };

  const data = await fetch(`${process.env.HOSTNAME}/api/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json();
  });

  return data;
};

const size = 10;
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [index, setIndex] = useState("contest_index");
  const [filed, setFiled] = useState(["contest_name"]);
  const [preview, setPreview] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    reqSearch(searchQuery, index, filed, size).then((data) => {
      if (data !== null && data !== undefined) {
        setPreview(data);
      }
    });
  }, [searchQuery]);

  // const handleModalOpen = () => {
  //   setModalToggle(true);
  // };
  // const handleModalClose = () => {
  //   setModalToggle(false);
  // };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (loading) return <div>loading...</div>;
  return (
    <span>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onClick={handleClick}
        />
      </Search>
      <Popover
        id={"search-bar"}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
        {preview.map((data) => {
          return (
            <p
              key={data.contest_name}
              onClick={() => {
                // handle(data);
              }}
            >
              {/* {data.professtion_image_url === "" ? null : (
                <img src={data.professtion_image_url} />
              )} */}
              {data.contest_name}
            </p>
          );
        })}
      </Popover>
    </span>
  );
};

export default SearchBar;
