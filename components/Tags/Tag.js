import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Image from "next/image";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Tag = (props) => {
  const { name, type } = props;

  const [getTagInfo, setTagInfo] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const TagRequest = async () => {
    const data = await fetch(
      `${process.env.HOSTNAME}/api/tags/${type}/${name}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      return response.json();
    });
    setTagInfo(data);
  };

  React.useEffect(() => {
    TagRequest().then(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <ListItem key={getTagInfo.id}>
      <Chip
        icon={<Image src={getTagInfo.image_url} width={16} height={16} />}
        label={getTagInfo.name}
      />
    </ListItem>
  );
};

export default Tag;
