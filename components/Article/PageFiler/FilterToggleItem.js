import { Fragment, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Fade from "@material-ui/core/Fade";

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
        <Fragment>
          <Chip label={label}></Chip>
          <Menu
            id="fade-menu"
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
        </Fragment>
      );
    case "toggle":
      return (
        <Fragment>
          <Chip label={label} onClick={handleToggleClick}></Chip>
        </Fragment>
      );
    default:
      throw new Error(console.log(form));
  }
};

export default FilterItem;
