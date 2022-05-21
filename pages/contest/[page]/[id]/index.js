import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
//components
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import TagDropdown from "../../../../components/Tags/TagDropdown";
import MainLayout from "../../../../components/Layout/MainLayout";
import TabPanel from "../../../../components/Tab/TabPanel";
import Editor from "../../../../components/Editors/CKEditorTextEditor";
import Button from "../../../../components/CustomButtons/Button";

import moment from "moment";
import Image from "next/image";

const actionOption = {
  constest_image_url: "",
  article: {
    published: false,
    createdAt: moment().toISOString(),
    updatedAt: moment().toISOString(),
    content: {
      title: "",
      body: "",
      createdAt: moment().toISOString(),
    },
  },
  contest: {
    name: "",
    prize: 0,
    content: "",
    end_period: null,
    start_period: null,
    createAt: moment().toISOString(),
    team: [],
    Tag: [],
    tech_stack: [],
    profession: "",
  },
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "contentTitle":
      return {
        ...prevState,
        article: {
          content: {
            title: action.result,
          },
        },
      };
    case "contentBody":
      return {
        ...prevState,
        article: {
          content: {
            body: action.result,
          },
        },
      };
    case "contestName":
      return {
        ...prevState,
        contest: {
          name: action.result,
        },
      };
    case "contestPrize":
      return {
        ...prevState,
        contest: {
          prize: parseInt(action.result),
        },
      };
    case "contestContent":
      return {
        ...prevState,
        contest: {
          content: action.result,
        },
      };
    case "contestEndPeriod":
      return {
        ...prevState,
        contest: {
          end_period: action.result,
        },
      };
    case "contestStartPeriod":
      return {
        ...prevState,
        contest: {
          start_period: action.result,
        },
      };
    case "contestTag":
      return {
        ...prevState,
        contest: {
          Tag: action.result,
        },
      };
    case "contestTechStack":
      return {
        ...prevState,
        contest: {
          tech_stack: action.result,
        },
      };
    case "contestProfession":
      return {
        ...prevState,
        contest: {
          profession: action.result,
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

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
    border: "1px",
  },
};

const useStyles = makeStyles(styles);

const ContestPage = ({ title, body, professions }) => {
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();

  React.useEffect(() => {
    reqProfession("Profession").then(() => {
      setLoading(false);
    });
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

const PublishedPage = () => {
  const [article, dispatch] = React.useReducer(reducer, actionOption);
  const [professionsList, setProfessionsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const reqProfession = async (type) => {
    const data = await fetch(`${process.env.HOSTNAME}/api/tags/${type}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      return await response.json();
    });
    setProfessionsList(data);
  };

  const handleArticleChange = (data) => {
    dispatch({ type: "contentBody", result: data });
  };
  const handleProfession = async (event) => {
    dispatch({ type: "contestProfession", result: event.target.value });
  };

  React.useEffect(() => {}, []);
  return (
    <GridContainer>
      <GridItem>
        <TagDropdown names={professionsList} onClick={handleProfession} />
      </GridItem>
      <GridItem>
        <Editor
          onChange={handleArticleChange}
          editorLoaded={true}
          name="testName"
          data="testData"
        />
        {article.article.content.body}
        {article.contest.profession}
      </GridItem>
      <GridItem>
        <Button>출판</Button>
      </GridItem>
    </GridContainer>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const BasicTabs = ({ data }) => {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();
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
          <Image
            src={`/asset/image/background/contest/default.svg`}
            width="100%"
            height="100%"
          ></Image>
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
        <ContestPage
          title={data.article.content.title}
          body={data.article.content.body}
          professions={data.contest.profession}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PublishedPage />
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
