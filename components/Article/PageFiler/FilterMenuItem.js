import { Fragment, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Fade from "@mui/material/Fade";

const styles = {
  arrowIcon: {
    position: "absolute",
    right: 0,
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
    setLoading(false);
  });
  if (loading) return <div>Loading</div>;
  return (
    <Fragment>
      <Chip
        deleteIcon={<KeyboardArrowDownIcon />}
        label={label}
        onClick={handleClick}
      ></Chip>
      <Menu
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
            <Fragment>
              <MenuItem
                onClick={() => {
                  handleMenuClick(item.name);
                }}
              >
                {item.name}
              </MenuItem>
            </Fragment>
          );
        })}
      </Menu>
    </Fragment>
  );
};
export default FilterItem;
