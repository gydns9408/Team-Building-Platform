import { useState, useEffect, Fragment } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@mui/material/Fade";

const MenuPopupState = ({ names, onClick, data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState({
    description: null,
    id: null,
    image_url: null,
    name: "분야",
  });
  const open = Boolean(anchorEl);

  useEffect(() => {
    console.log(menu);
    setMenu(data);
  }, []);
  useEffect(() => {
    console.log(menu);
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
        {menu !== undefined ? menu.name : "분야"}
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
              key={d.name}
              onClick={(e) => {
                onClick(d);
                setMenu(d);
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
