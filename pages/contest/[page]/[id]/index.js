import * as React from "react";
import Main from "../../../../components/Article/MainArticle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import TagDropdown from "../../../../components/Tags/TagDropdown";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const ContestPage = ({ title, body }) => {
  return (
    <GridContainer>
      <GridItem>
        <Typography>{title}</Typography>
        <Typography>{body}</Typography>
      </GridItem>
    </GridContainer>
  );
};

const reqProfession = async (type) => {
  const data = await fetch(`${process.env.HOSTNAME}/api/tags/${type}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    return response.json();
  });
  return data;
};

const BasicTabs = ({ data }) => {
  const [value, setValue] = React.useState(0);
  const [profession, setProfession] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const reqProfession = async (type) => {
    const data = await fetch(`${process.env.HOSTNAME}/api/tags/${type}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      return await response.json();
    });
    setProfession(data);
  };

  React.useEffect(() => {
    reqProfession("Profession").then(() => {
      setLoading(false);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (loading) return <div>Loading...</div>;
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="개요" {...a11yProps(0)} />
          <Tab label="팀" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TagDropdown names={profession} type={"Profession"} />
        <ContestPage
          title={data.article.content.title}
          body={data.article.content.body}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
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
