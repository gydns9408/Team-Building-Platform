import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Modal from "../../components/Modal/Modal";
import SectionTagsView from "../../pages-sections/tags/SectionTagsView";

import { Box } from "@material-ui/core";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const TagRequest = async (type, name) => {
  const data = await fetch(`${process.env.HOSTNAME}/api/tags/${type}/${name}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(async (response) => {
    return await response.json();
  });
  return data;
};

const Tag = (props) => {
  const { name, type, form, children } = props;

  const [getTagInfo, setTagInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [modalToggle, setModalToggle] = useState(false);

  const handleModalOpen = () => {
    setModalToggle(true);
  };
  const handleModalClose = () => {
    setModalToggle(false);
  };

  useEffect(() => {
    TagRequest(type, name).then((data) => {
      setTagInfo(data);
      setLoading(false);
    });
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
          <Box>
            <IconButton aria-label="delete" size="large">
              <Image
                src={
                  getTagInfo.image_url !== null
                    ? getTagInfo.image_url
                    : `/asset/image/background/contest/default.svg`
                }
                width={32}
                height={32}
                onClick={handleModalOpen}
              />
              {children}
            </IconButton>
            <Modal
              title={getTagInfo.name !== null ? getTagInfo.name : ""}
              open={modalToggle}
              handleModalClose={handleModalClose}
            >
              <SectionTagsView
                body={
                  getTagInfo.description !== null &&
                  getTagInfo.description !== undefined
                    ? getTagInfo.description
                    : ""
                }
                image_url={
                  getTagInfo.image_url !== null
                    ? getTagInfo.image_url
                    : `/asset/image/background/contest/default.svg`
                }
              />
            </Modal>
          </Box>
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
