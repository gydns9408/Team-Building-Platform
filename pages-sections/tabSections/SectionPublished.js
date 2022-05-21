import * as React from "react";

//components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import TagDropdown from "../../components/Tags/TagDropdown";
import Editor from "../../components/Editors/CKEditorTextEditor";
import Button from "../../components/CustomButtons/Button";
import TitleInput from "../../components/Input/Title";
import TimePicker from "../../components/TimePicker/TimePicker";
import Slider from "../../components/Slider/SmallSteps";
import TagAppender from "../../components/Tags/TagAppender";

import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

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

const styles = {};

const useStyles = makeStyles(styles);

const Published = () => {
  const classes = useStyles();
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

  React.useEffect(() => {
    reqProfession("Profession").then(() => {
      setLoading(false);
    });
  }, []);

  const handleArticleChange = (data) => {
    dispatch({ type: "contentBody", result: data });
  };
  const handleProfession = async (event) => {
    dispatch({ type: "contestProfession", result: event.target.value });
  };

  if (loading) return <div>Loading</div>;
  return (
    <GridContainer>
      <GridItem>
        <TagAppender />
      </GridItem>
      <GridItem>
        <Slider />
      </GridItem>
      <GridItem>
        <TimePicker />
      </GridItem>
      <GridItem>
        <TimePicker />
      </GridItem>
      <GridItem>
        <TitleInput />
      </GridItem>
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

export default Published;
