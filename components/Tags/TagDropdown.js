import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { makeStyles } from "@material-ui/core/styles";
import Tag from "./Tag";

const styles = {
  menu: {
    position: "relative",
    width: "4rem",
    height: "4rem",
    minHeight: "1px",
  },
};

const useStyles = makeStyles(styles);

const MenuPopupState = ({ names, onClick }) => {
  const classes = useStyles();
  const [menu, setMenu] = React.useState("분야");
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            className={classes.menu}
            {...bindTrigger(popupState)}
          >
            {menu}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {names.map((d) => {
              return (
                <MenuItem
                  key={d.id}
                  onClick={(e) => {
                    onClick(e);
                    setMenu(d.name);
                    popupState.close;
                  }}
                >
                  {d.name}
                </MenuItem>
              );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default MenuPopupState;
