import * as React from "react";

//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import styles from "../../../styles/jss/nextjs-material-kit/pages/image/headerImage";

const useStyles = makeStyles(styles);

const imagePath = {
  path: "/asset/image/background/contest/",
};

const HeaderImage = ({ contestImage, editing }) => {
  const router = useRouter();
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [createObjectURL, setCreateObjectURL] = React.useState(null);
  const [imageName, setImageName] = React.useState("");
  const classes = useStyles(styles);

  const onImgChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = await event.target.files[0];
      setImage(image);
      setCreateObjectURL(URL.createObjectURL(image));
      setImageName(image.name);
      return image;
    }
  };

  const uploadToServer = async (img) => {
    const body = new FormData();
    body.append("file", img);

    const response = await fetch(
      `${process.env.HOSTNAME}/api/file/${imagePath.path}/`,
      {
        method: "post",
        body: body,
      }
    );

    return response;
  };

  const handleSubmit = async (name) => {
    if (imageName.length !== "") {
      const body = {
        constest_image_url: `${imagePath.path}${name}`,
      };
      const data = await fetch(
        `${process.env.HOSTNAME}/api/article/Contest/${router.query.page}/${router.query.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      )
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson ? await response.json() : null;

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
      console.log(data);
      return data;
    }
  };

  React.useEffect(() => {
    setCreateObjectURL(
      contestImage !== undefined
        ? contestImage
        : "/asset/image/background/contest/default.svg"
    );
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <GridContainer>
      <GridItem className={classes.contestHead}>
        <img src={createObjectURL} className={classes.image}></img>
        {editing ? (
          <Button
            variant="contained"
            component="label"
            className={classes.headerButton}
          >
            <input
              type="file"
              hidden
              onChangeCapture={(event) => {
                onImgChange(event).then(async (e) => {
                  await uploadToServer(e);
                  await handleSubmit(e.name);
                });
              }}
            />
          </Button>
        ) : (
          ""
        )}
      </GridItem>
    </GridContainer>
  );
};

export default HeaderImage;
