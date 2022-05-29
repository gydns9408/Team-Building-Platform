import * as React from "react";

//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";

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

const HeaderImage = () => {
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [createObjectURL, setCreateObjectURL] = React.useState(null);
  const classes = useStyles(styles);

  const onImgChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  React.useEffect(() => {
    setCreateObjectURL("/asset/image/background/contest/default.svg");
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
      </GridItem>
    </GridContainer>
  );
};

export default HeaderImage;

