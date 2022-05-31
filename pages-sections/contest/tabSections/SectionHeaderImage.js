import * as React from "react";

//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
const styles = {
  title: {
    borderBottom: "0.5px",
    borderBottomStyle: "solid",
    alignItems: "center",
  },
  body: {
    margin: "2rem",
  },
  contestHead: {
    height: "15rem",
    display: "flex",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  headerButton: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
  },
};

const useStyles = makeStyles(styles);

const imagePath = {
  path: "/asset/image/background/contest/",
};

const HeaderImage = ({ contestImage }) => {
  const router = useRouter();
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [createObjectURL, setCreateObjectURL] = React.useState(null);
  const [imageName, setImageName] = React.useState("");
  const classes = useStyles(styles);

  const onImgChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      setImage(image);
      setCreateObjectURL(URL.createObjectURL(image));
      setImageName(image.name);
    }
  };
  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", image);

    const response = await fetch(
      `${process.env.HOSTNAME}/api/file${imagePath.path}/`,
      {
        method: "post",
        body: body,
      }
    );

    return response;
  };

  const handelStackSubmit = async () => {
    if (imageName.length !== "") {
      const body = {
        constest_image_url: `${imagePath.path}/${imageName}`,
      };

      await uploadToServer();
      const data = await fetch(
        `${process.env.HOSTNAME}/api/article/Contest/${router.query.page}/${router.query.id}`,
        {
          method: "POST",
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
        <Button
          variant="contained"
          component="label"
          className={classes.headerButton}
        >
          <input type="file" hidden onChange={onImgChange} />
        </Button>
        <Button onClick={handelStackSubmit}></Button>
      </GridItem>
    </GridContainer>
  );
};

export default HeaderImage;
