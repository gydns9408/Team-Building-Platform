import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
//components
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import MainLayout from "../../../../components/Layout/MainLayout";
import TabPanel from "../../../../components/Tab/TabPanel";

//section
import Overview from "../../../../pages-sections/contest/tabSections/SectionOverview";
import Published from "../../../../pages-sections/contest/tabSections/SectionPublished";
import HeaderImage from "../../../../pages-sections/contest/tabSections/SectionHeaderImage";
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

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const BasicTabs = ({ data }) => {
  const [value, setValue] = React.useState(0);
  const [editing, setEditing] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles(styles);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <MainLayout>
      <GridContainer direction="column" className={classes.contestHead}>
        <GridItem>
          <HeaderImage />
        </GridItem>
        <GridItem>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="개요" {...a11yProps(0)} />
            <Tab label="팀" {...a11yProps(1)} />
            <Tab label="업데이트" {...a11yProps(1)} />
          </Tabs>
        </GridItem>
      </GridContainer>
      <TabPanel value={value} index={0}>
        <Overview
          title={data.article.content.title}
          body={data.article.content.body}
          professions={data.contest.profession}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Published />
      </TabPanel>
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const { page } = context.query;
  const { id } = context.query;
  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Contest/${page}/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => {
    return response.json();
  });
  return { props: { data } };
}

export default BasicTabs;
