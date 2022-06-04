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
import Editor from "../../../../components/Editors/CKEditorTextEditor";
import Role from "../../../../components/Tags/Role/Role";
import Tag from "../../../../components/Tags/Tag";
import CommentItem from "../../../../components/Comment/CommentItem";
import moment from "moment";
import SectionComments from "../../../../pages-sections/comment/SectionComments";

const pageLabels = {
  roleLabel: "모집 분야",
};

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
      <GridContainer direction="column">
        <GridItem>
          <GridContainer direction="row">
            <GridItem xs={12} sm={12} md={12}>
              <Typography variant="h6">{data.article.content.title}</Typography>
              <Typography>
                {moment(data.article.createdAt).format("YYYY.MM.DD")}
              </Typography>
              <Typography>{data.article.viewCount}</Typography>
              <Typography>{data.article.likeCount}</Typography>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem>
          <Card>
            <Editor
              name={data.article.content.title}
              value={data.article.content.body}
              readOnly={true}
            ></Editor>
          </Card>
        </GridItem>
        <GridItem>{pageLabels.roleLabel}</GridItem>
        <Card>
          {data.team.role.map((role) => {
            console.log(role);
            return (
              <GridItem xs={12} sm={12} md={12}>
                <Tag
                  name={role.name}
                  type={"Role"}
                  form={"role"}
                  team={role.team}
                  role={role.id}
                >
                  <p>{role.description}</p>
                </Tag>
                <Role
                  // className={classes.avatarIcon}
                  team={data.team.id}
                  role={role.id}
                />
              </GridItem>
            );
          })}
        </Card>
        {/* <GridContainer direction="column" spacing={3} xs={3} sm={3} md={3}>
          <GridItem>
            <TagsContainer
              tags={data.team.tech_stack}
              type="TechStack"
              form="iconOnly"
            ></TagsContainer>
          </GridItem>
        </GridContainer> */}
        <GridItem>
          <SectionComments />
        </GridItem>
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
