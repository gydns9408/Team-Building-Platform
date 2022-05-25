import { useState, useEffect, Fragment } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@mui/material/Fade";
const styles = {
  menu: {
    position: "relative",
    width: "4rem",
    height: "4rem",
    minHeight: "1px",
  },
};

const useStyles = makeStyles(styles);

const MenuPopupState = ({ names, onClick, data }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("분야");
  const open = Boolean(anchorEl);

  useEffect(() => {
    setMenu(data);
  }, []);
  useEffect(() => {
    setMenu(data);
  }, [data]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        id="dropdown-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {menu}
      </Button>
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
        {names.map((d) => {
          return (
            <MenuItem
              key={d.id}
              onClick={(e) => {
                onClick(d.name);
                setMenu(d.name);
                handleClose();
              }}
            >
              {d.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Fragment>
  );
};

export default MenuPopupState;
