import * as React from "react";
import classNames from "classnames";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
//components
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import Button from "../../../../components/CustomButtons/Button";
import TagsContainer from "../../../../components/Tags/TagsContainer";

import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import CardFooter from "../../../../components/Card/CardFooter";
import CardHeader from "../../../../components/Card/CardHeader";

import styles from "../../../../styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import MainLayout from "../../../../components/Layout/MainLayout";

// const styles = {
//   title: {
//     alignItems: "center",
//   },
//   body: {
//     margin: "2rem",
//   },
// };

const useStyles = makeStyles(styles);

const Overview = ({ data }) => {
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MainLayout>
      <GridContainer direction="column" spacing={3}>
        <GridContainer direction="row" spacing={3}>
          <GridItem xs={1} sm={1} md={1}></GridItem>
          <GridItem xs={11} sm={11} md={11}>
            <Typography variant="h6">{data.article.content.title}</Typography>
            <Typography>{data.article.createdAt}</Typography>
            <Typography>{data.article.viewCount}</Typography>
            <Typography>{data.article.likeCount}</Typography>
          </GridItem>
        </GridContainer>
        <GridContainer direction="row" spacing={3}>
          <GridItem xs={9} sm={9} md={9}>
            <Typography>{data.article.content.body}</Typography>
          </GridItem>
          <GridContainer direction="column" spacing={3} xs={3} sm={3} md={3}>
            <GridItem>
              <TagsContainer
                tags={data.team.tech_stack}
                type="TechStack"
                form="iconOnly"
              ></TagsContainer>
            </GridItem>
          </GridContainer>
        </GridContainer>
      </GridContainer>
    </MainLayout>
  );
};

export default Overview;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Team/Read/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => {
    return response.json();
  });
  console.log(data);
  return { props: { data } };
}
