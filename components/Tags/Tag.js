import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Tag = (props) => {
  const { name, type, form } = props;

  const [getTagInfo, setTagInfo] = React.useState({});
  const [loading, setLoading] = React.useState(true);

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
                width={16}
                height={16}
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
              width={24}
              height={24}
            />
          </IconButton>
        );
        case "iconOnly_big":
          return (
            <IconButton aria-label="delete" size="large">
              <Image
                src={
                  getTagInfo.image_url !== null
                    ? getTagInfo.image_url
                    : `/asset/image/background/contest/default.svg`
                }
                width={50}
                height={50}
              />
            </IconButton>
          );
      case "textOnly":
        return <Chip label={getTagInfo.name !== null ? getTagInfo.name : ""} />;
      default:
        throw new Error(console.log(form));
    }
  };

  if (loading) return <div>Loading...</div>;
  return TagOptions(form);
};

export default Tag;
