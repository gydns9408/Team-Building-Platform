import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import Button from "../../../components/CustomButtons/Button";
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


const Overview = ({ article, contest, professions, handleEditing }) => {
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <GridContainer direction="column" spacing={3}>
      <GridContainer direction="row" spacing={3} className={classes.title}>
        <GridItem xs={1} sm={1} md={1}>
          <Box bgcolor={"#88b9ff"} height="4rem" width="4rem" fontSize={"8px"}>
            {professions.map((profession) => {
              return profession.name;
            })}
          </Box>
        </GridItem>
        <GridItem xs={11} sm={11} md={11}>
          <Typography variant="h6">{article.content.title}</Typography>
          <Button onClick={handleEditing}></Button>
        </GridItem>
      </GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        {article.content.id}
        {article.content.article_id}
        {article.content.title}
        {article.content.body}
        {article.content.createdAt}
        {contest.id}
        {contest.name}
        {contest.prize}
        {contest.content}
        {contest.end_period}
        {contest.start_period}
        {contest.createAt}
        {/* {contest.team[0]}
        {contest.Tag[0]}
        {contest.tech_stack[0]}
         */}
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        {article.viewCount}
        {article.likeCount}
        {article.createdAt}
        {article.updatedAt}
      </GridItem>
      <GridContainer direction="row" spacing={3} className={classes.body}>
        <GridItem xs={12} sm={12} md={12}>
          <Typography>{article.content.body}</Typography>
        </GridItem>
      </GridContainer>
    </GridContainer>
  );
};

export default Overview;

//      {article.published}
