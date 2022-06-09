import { useState, useEffect, Fragment } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
//components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import MainLayout from "../../components/Layout/MainLayout";
import Title from "../../components/Input/Title";
import Editor from "../../components/Editors/CKEditorTextEditor";
import { Typography } from "@material-ui/core";
import styles from "../../styles/jss/nextjs-material-kit/pages/published/teamCreate";
import SectionHeaderImage from "../../pages-sections/contest/tabSections/SectionHeaderImage";
import Searcher from "../../components/Tags/Searcher/Search";
import RoleItem from "../../components/Tags/Searcher/SearcherItem/RoleItem";
import RoleCard from "../../components/CustomCard/Role/RoleCard";
import palettes from "../../styles/nextjs-material-kit/palettes";

import { IconButton } from "@material-ui/core";

import { getSession, useSession, signIn, signOut } from "next-auth/react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import moment from "moment";
import { useRouter } from "next/router";
const pageLabels = {
  roleLabel: "모집 분야",
  participantsLabel: "참여자",
  joinButton: "신청",
  placeholder: "제목 입력",
};

const useStyles = makeStyles(styles);

const CreateTeam = ({ data }) => {
  const { data: session, status } = useSession();
  const classes = useStyles();

  const [selectRole, setSelectRole] = useState([]);

  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {}, [selectRole]);

  const handleSelectRole = (data) => {
    const newRole = selectRole.filter((role) => role.name !== data.name);
    console.log(newRole);
    setSelectRole([...newRole, data]);
  };
  return (
    <MainLayout>
      <SectionHeaderImage editing={editing} />
      <GridContainer direction="column">
        <GridItem className={classes.titleContain} xs={9} sm={9} md={9}>
          <GridContainer direction="column">
            <GridItem>
              <Title placeholder={pageLabels.placeholder} />
            </GridItem>
            <GridItem className={classes.subTitle}>
              <Typography>{moment().format("YYYY.MM.DD")}</Typography>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem>
          <Card className={classes.card}>
            <Editor className={classes.body}></Editor>
          </Card>
        </GridItem>
        <GridItem className={classes.subTitle}></GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <GridContainer direction="row">
              <GridContainer
                direction="row"
                className={classes.roleCardContain}
              >
                {selectRole.map((role) => {
                  return (
                    <GridItem
                      xs={3}
                      sm={3}
                      md={3}
                      key={role.name}
                      className={
                        classes.overviewItem + " " + classes.borderRight
                      }
                    >
                      <RoleCard role={role}></RoleCard>
                    </GridItem>
                  );
                })}
                <GridItem
                  xs={3}
                  sm={3}
                  md={3}
                  key={"Searcher"}
                  className={
                    classes.overviewItem +
                    " " +
                    classes.borderRight +
                    " " +
                    classes.searcher
                  }
                >
                  <Searcher
                    index={"role_index"}
                    filed={["name", "description", "type"]}
                    basicQuery={"role"}
                    size={10}
                    handle={handleSelectRole}
                  >
                    <RoleItem />
                  </Searcher>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}></GridItem>
      </GridContainer>
      <IconButton className={classes.createButton}>
        <SaveAltIcon
          sx={{ fontSize: "2rem" }}
          style={{ color: palettes.darkBlue3 }}
        />
      </IconButton>
    </MainLayout>
  );
};

export default CreateTeam;

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const data = await fetch(
//     `${process.env.HOSTNAME}/api/article/Team/Read/${id}`,
//     {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     }
//   ).then((response) => {
//     return response.json();
//   });
//   return { props: { data } };
// }
