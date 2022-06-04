import { useState, useEffect } from "react";
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

import MainLayout from "../../../../components/Layout/MainLayout";
import Editor from "../../../../components/Editors/CKEditorTextEditor";
import Role from "../../../../components/Tags/Role/Role";
import Tag from "../../../../components/Tags/Tag";
import moment from "moment";
import SectionComments from "../../../../pages-sections/comment/SectionComments";
import SectionHeaderImage from "../../../../pages-sections/contest/tabSections/SectionHeaderImage";

const styles = {
  title: {
    alignItems: "center",
    fontFamily: "Do Hyeon",
    fontSize: "3rem",
    marginTop: "0",
    marginBottom: "0",
  },
  titleContain: {
    marginLeft: "1rem",
  },
  dateContain: {
    marginLeft: "100%",
  },
  body: {
    margin: "2rem",
    color: "#263747",
    fontFamily: "SCDream3",
    fontSize: "1rem",
  },
  icon: {
    height: "2rem",
    width: "2rem",
    alignItems: "center",
    marginRight: "1rem",
  },
  iconContain: {
    marginRight: "0.5rem",
  },
  iconMenuIcon: {
    height: "2rem",
    width: "2rem",
    marginLeft: "100%",
  },
  editor: {
    border: "none",
  },
  menu: {
    height: "20rem",
  },
  card: {
    padding: "2.5rem",
    margin: "0",
  },
  overviewItem: {
    alignItems: "start",
    justifyContent: "center",
    paddingRight: "1rem",
  },
  overviewBody: {
    fontSize: "1rem",
  },
  borderRight: {
    borderRight: "0.0625rem solid #D7E2EB",
  },
  subTitle: {
    marginTop: "1rem",
    marginBottom: "1.5rem",
    fontFamily: "SCDream4",
    fontWeight: "bold",
  },
};

const pageLabels = {
  roleLabel: "모집 분야",
};

const useStyles = makeStyles(styles);

const Overview = ({ data }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MainLayout>
      <SectionHeaderImage
        contestImage={data.team_image_url}
        editing={editing}
      />
      <GridContainer direction="column">
        <GridItem className={classes.titleContain} xs={9} sm={9} md={9}>
          <GridContainer direction="column">
            <GridItem>
              <p className={classes.title}>{data.article.content.title}</p>
            </GridItem>
            <GridItem>
              <p>{moment(data.article.createdAt).format("YYYY.MM.DD")}</p>
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
