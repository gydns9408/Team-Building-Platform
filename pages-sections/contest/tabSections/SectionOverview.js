import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const styles = {
  title: {
    borderBottom: "0.5px",
    borderBottomStyle: "solid",
    alignItems: "center",
  },
  body: {
    margin: "2rem",
  },
};

const useStyles = makeStyles(styles);

const Overview = ({ title, body, professions }) => {
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <GridContainer direction="column" spacing={3}>
      <GridContainer direction="row" spacing={3} className={classes.title}>
        <GridItem xs={1} sm={1} md={1}>
          {/* <TagDropdown names={professions} type={"Profession"} /> */}
          <Box bgcolor={"#88b9ff"} height="4rem" width="4rem" fontSize={"8px"}>
            {professions.map((profession) => {
              return profession.name;
            })}
          </Box>
        </GridItem>
        <GridItem xs={11} sm={11} md={11}>
          <Typography variant="h6">{title}</Typography>
        </GridItem>
      </GridContainer>
      <GridContainer direction="row" spacing={3} className={classes.body}>
        <GridItem xs={12} sm={12} md={12}>
          <Typography>{body}</Typography>
        </GridItem>
      </GridContainer>
    </GridContainer>
  );
};

export default Overview;