import { useEffect, useState, useReducer, Fragment } from "react";

//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import TabPanel from "../../../components/Tab/TabPanel";
import Button from "../../../components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import SectionArticle from "./published/SectionArticle";
import SectionContest from "./published/SectionContest";
import SectionTags from "./published/SectionTags";
import moment from "moment";
const pageCopys = {
  tech_stack: "기술 스택 생성",
  submitButton: "제출",
};

const articleOtion = {
  published: false,
  createdAt: moment().toISOString(),
  updatedAt: moment().toISOString(),
  content: {
    title: "",
    body: "",
    createdAt: moment().toISOString(),
  },
};
const contestOption = {
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
};

const articleReducer = (prevState, action) => {
  switch (action.type) {
    case "contentTitle":
      return {
        ...prevState,
        content: {
          ...prevState.content,
          title: action.result,
        },
      };
    case "contentBody":
      return {
        ...prevState,
        content: {
          ...prevState.content,
          body: action.result,
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
const contestReducer = (prevState, action) => {
  switch (action.type) {
    case "contestTitle":
      return {
        ...prevState,
        name: action.result,
      };
    case "contestPrize":
      return {
        ...prevState,
        prize: parseInt(action.result),
      };
    case "contestContent":
      return {
        ...prevState,
        content: action.result,
      };
    case "contestEndPeriod":
      return {
        ...prevState,
        end_period: moment(action.result).toISOString(),
      };
    case "contestStartPeriod":
      return {
        ...prevState,
        start_period: action.result,
      };
    case "contestTag":
      return {
        ...prevState,
        Tag: [...prevState.Tag, action.result],
      };
    case "contestTechStack":
      return {
        ...prevState,
        tech_stack: [...prevState.tech_stack, action.result],
      };
    case "contestProfession":
      return {
        ...prevState,
        profession: action.result,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const styles = {};

const useStyles = makeStyles(styles);

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const PublishedTab = ({ data }) => {
  const [article, articleDispatch] = useReducer(articleReducer, articleOtion);
  const [contest, contestDispatch] = useReducer(contestReducer, contestOption);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const classes = useStyles(styles);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleArticleTitleChange = (data) => {
    articleDispatch({ type: "contentTitle", result: data.target.value });
  };
  const handleArticleBodyChange = (data) => {
    articleDispatch({ type: "contentBody", result: data });
  };
  const handleContestTitleChange = (data) => {
    contestDispatch({ type: "contestTitle", result: data.target.value });
  };
  const handleContestContentChange = (data) => {
    contestDispatch({ type: "contestContent", result: data });
  };
  const handleProfession = async (data) => {
    contestDispatch({ type: "contestProfession", result: data.target.value });
    console.log(data);
  };
  const handleTimePicker = (data) => {
    contestDispatch({ type: "contestEndPeriod", result: data });
  };
  const handlePrize = (data) => {
    contestDispatch({ type: "contestPrize", result: data });
  };
  const handleTagAppender = (data) => {
    contestDispatch({ type: "contestTag", result: data.target.value });
  };
  const handleTechStack = (data) => {
    contestDispatch({ type: "contestTechStack", result: data });
  };

  const handlePublished = () => {
    console.log(article);
    console.log(contest);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Fragment>
      <Button onClick={handlePublished}>{pageCopys.submitButton}</Button>
      <GridContainer direction="row" className={classes.contestHead}>
        <GridItem xs={3} sm={3} md={3}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="대회 개요" {...a11yProps(0)} />
            <Tab label="대회 정보" {...a11yProps(1)} />
            <Tab label="태그" {...a11yProps(2)} />
          </Tabs>
        </GridItem>
        <GridItem xs={9} sm={9} md={9}>
          <TabPanel value={value} index={0}>
            <SectionArticle
              title={article.content.title}
              content={article.content.body}
              handleArticleTitleChange={handleArticleTitleChange}
              handleArticleBodyChange={handleArticleBodyChange}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SectionContest
              handleProfession={handleProfession}
              handleContestTitleChange={handleContestTitleChange}
              handleContestContentChange={handleContestContentChange}
              handleTimePicker={handleTimePicker}
              handlePrize={handlePrize}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SectionTags
              handleTagAppender={handleTagAppender}
              handleTechStack={handleTechStack}
              tech_stacks={contest.tech_stack}
            />
          </TabPanel>
        </GridItem>
      </GridContainer>
    </Fragment>
  );
};

export default PublishedTab;
