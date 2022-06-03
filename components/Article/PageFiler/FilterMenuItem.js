import { Fragment, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/system";
const styles = {
  menu: {
    height: "20rem",
  },
};

const useStyles = makeStyles(styles);

const FilterItem = ({ items, label, handleMenuClick }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (items !== undefined) setLoading(false);
  }, [items]);
  if (loading) return <div>Loading</div>;
  return (
    <Box component="ul">
      <Chip
        deleteIcon={<KeyboardArrowDownIcon />}
        label={label}
        onClick={handleClick}
      ></Chip>
      <Menu
        className={classes.menu}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {items.map((item) => {
          return (
            <MenuItem
              key={item.name}
              onClick={() => {
                handleMenuClick(item.name);
              }}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
export default FilterItem;
