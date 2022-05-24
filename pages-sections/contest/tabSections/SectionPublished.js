import * as React from "react";

//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import TagDropdown from "../../../components/Tags/TagDropdown";
import Editor from "../../../components/Editors/CKEditorTextEditor";
import Button from "../../../components/CustomButtons/Button";
import TitleInput from "../../../components/Input/Title";
import TimePicker from "../../../components/TimePicker/TimePicker";
import Slider from "../../../components/Slider/SmallSteps";
import TagAppender from "../../../components/Tags/TagAppender";
import Tag from "../../../components/Tags/Tag";
import TagsContainer from "../../../components/Tags/TagsContainer";
import Modal from "../../../components/Modal/Modal";

import GenerateTags from "../../tags/SectionGenerateTags";

import { makeStyles } from "@material-ui/core/styles";

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
    case "contestName":
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

const tagForm = { name: "", description: "" };

const styles = {};

const useStyles = makeStyles(styles);

const reqTags = async (type) => {
  const data = await fetch(`${process.env.HOSTNAME}/api/tags/${type}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(async (response) => {
    return await response.json();
  });
  return data;
};

const Published = () => {
  const classes = useStyles();
  const [article, articleDispatch] = React.useReducer(
    articleReducer,
    articleOtion
  );
  const [contest, contestDispatch] = React.useReducer(
    contestReducer,
    contestOption
  );
  const [professionsList, setProfessionsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    reqTags("Profession")
      .then((data) => {
        setProfessionsList(data);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  const handleTitleChange = (data) => {
    articleDispatch({ type: "contentTitle", result: data.target.value });
  };
  const handleArticleChange = (data) => {
    articleDispatch({ type: "contentBody", result: data });
  };
  const handleProfession = async (data) => {
    contestDispatch({ type: "contestProfession", result: data.target.value });
  };
  const handleTagAppender = (data) => {
    contestDispatch({ type: "contestTag", result: data.target.value });
  };
  const handleTimePicker = (data) => {
    contestDispatch({ type: "contestEndPeriod", result: data });
  };
  const handlePrize = (data) => {
    contestDispatch({ type: "contestPrize", result: data });
  };
  const handleTechStack = (data) => {
    contestDispatch({ type: "contestTechStack", result: data });
  };

  const handlePublished = () => {
    console.log(article);
    console.log(contest);
  };

  if (loading) return <div>Loading</div>;

  return (
    <GridContainer direction="column" spacing={2}>
      <GridContainer direction="row" spacing={2}>
        <GridItem xs={2} sm={2} md={2}>
          <TagDropdown names={professionsList} onClick={handleProfession} />
        </GridItem>
        <GridItem xs={9} sm={9} md={9}>
          <TitleInput onChange={handleTitleChange} />
        </GridItem>
      </GridContainer>
      <GridContainer direction="column" spacing={2}>
        <GridItem>
          <TimePicker onChange={handleTimePicker} />
        </GridItem>
        <GridItem>
          <Editor
            onChange={handleArticleChange}
            editorLoaded={true}
            name="testName"
            data="testData"
          />
        </GridItem>
        <GridItem>
          <Slider onChange={handlePrize} />
        </GridItem>
        <GridItem>
          <TagAppender
            names={[tagForm]}
            type="Tag"
            handle={handleTagAppender}
          />
        </GridItem>
        <GridItem>
          <TagsContainer
            tags={contest.tech_stack}
            type="TechStack"
            form="iconOnly"
          />
        </GridItem>
        <GridItem>
          <Button onClick={handlePublished}>{pageCopys.submitButton}</Button>
          <Modal title={pageCopys.tech_stack}>
            <GenerateTags handle={handleTechStack} />
          </Modal>
        </GridItem>
      </GridContainer>
    </GridContainer>
  );
};

export default Published;
