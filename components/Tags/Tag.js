import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Role from "./Role/Role";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const styles = {
  iconbutton: {
    backgroundColor: "white"
  },
  img: {
    width: "2rem",
    height: "2rem",
  },
};

const useStyles = makeStyles(styles);

const Tag = (props) => {
  const { name, type, form, children } = props;

  const [getTagInfo, setTagInfo] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const classes = useStyles();

  const TagRequest = async () => {
    const data = await fetch(
      `${process.env.HOSTNAME}/api/tags/${type}/${name}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then(async (response) => {
      return await response.json();
    });
    console.log(data);
    setTagInfo(data);
  };

  React.useEffect(() => {
    
    TagRequest().then(() => setLoading(false));
  }, []);

  const TagOptions = (form) => {
    switch (form) {
      case "chip":
        return (
          <Chip
            icon={
              <Image
                src={
                  getTagInfo.image_url !== null
                    ? getTagInfo.image_url
                    : `/asset/image/background/contest/default.svg`
                }
                width={32}
                height={32}
              />
            }
            label={getTagInfo.name !== null ? getTagInfo.name : ""}
          />
        );
      case "iconOnly":
        return (
          <IconButton aria-label="delete" size="large">
            <Image
              src={
                getTagInfo.image_url !== null
                  ? getTagInfo.image_url
                  : `/asset/image/background/contest/default.svg`
              }
              width={32}
              height={32}
            />
            {children}
          </IconButton>
        );
        case "iconOnly_profile":
        return (
          <IconButton aria-label="delete" size="large" className={classes.iconbutton}>
          <img
              className={classes.img}
              src={
                getTagInfo.image_url !== null
                  ? getTagInfo.image_url
                  : `/asset/image/background/contest/default.svg`
              }
              alt="photo"
            />
          </IconButton>
        );
      case "textOnly":
        return <Chip label={getTagInfo.name !== null ? getTagInfo.name : ""} />;
      case "role":
        return (
          <Box>
            <Image
              src={
                getTagInfo.image_url !== null
                  ? getTagInfo.image_url
                  : `/asset/image/background/contest/default.svg`
              }
              width={32}
              height={32}
            />
            {children}
          </Box>
        );
      default:
        throw new Error(console.log(form));
    }
  };

  if (loading) return <div>Loading...</div>;
  return TagOptions(form);
};

export default Tag;
