import { Fragment, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Fade from "@mui/material/Fade";

const styles = {};

const useStyles = makeStyles(styles);

const FilterItem = ({ item, form, label }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return <Chip label={label}></Chip>;
};

const FilterType = ({
  items,
  form,
  label,
  handleMenuClick,
  handleToggleClick,
}) => {
  switch (form) {
    case "list":
      return (
        <div>
          <Chip label={label}></Chip>
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
                <MenuItem key={item.name} onClick={handleMenuClick}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      );
    case "toggle":
      return (
        <div>
          <Chip label={label} onClick={handleToggleClick}></Chip>
        </div>
      );
    default:
      throw new Error(console.log(form));
  }
};

export default FilterItem;
