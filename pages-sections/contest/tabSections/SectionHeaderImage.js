import * as React from "react";

//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";

import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

const styles = {
  title: {
    borderBottom: "0.5px",
    borderBottomStyle: "solid",
    alignItems: "center",
  },
  body: {
    margin: "2rem",
  },
  contestHead: {},
  headerImage: {
    height: "15rem",
  },
  headerButton: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
  },
};

const useStyles = makeStyles(styles);

const HeaderImage = () => {
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles(styles);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <GridContainer>
      <GridItem className={classes.headerImage}>
        <Image
          src={`/asset/image/background/contest/default.svg`}
          layout="fill"
          objectFit="contain"
        />

        <Button
          variant="contained"
          component="label"
          className={classes.headerButton}
        >
          <input
            type="file"
            hidden
            onChange={(file) => {
              console.log(file.target.files);
            }}
          />
        </Button>
      </GridItem>
    </GridContainer>
  );
};

export default HeaderImage;
