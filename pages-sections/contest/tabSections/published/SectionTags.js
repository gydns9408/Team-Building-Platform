import * as React from "react";

//components
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import TagAppender from "../../../../components/Tags/TagAppender";
import TagsContainer from "../../../../components/Tags/TagsContainer";
import Modal from "../../../../components/Modal/Modal";

import GenerateTags from "../../../tags/SectionGenerateTags";

import { makeStyles } from "@material-ui/core/styles";
import TechStackSearcher from "../../../../components/Tags/TechStack/TechStackSearcher";
const pageCopys = {
  tech_stack: "기술 스택 생성",
  submitButton: "제출",
};

const tagForm = { name: "", description: "" };

const styles = {};

const useStyles = makeStyles(styles);

const Published = ({ handleTagAppender, handleTechStack, tech_stacks }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <GridContainer direction="column" spacing={2}>
      <GridItem>
        <TagAppender names={[tagForm]} type="Tag" handle={handleTagAppender} />
      </GridItem>
      <GridItem>
        <TagsContainer tags={tech_stacks} type="TechStack" form="iconOnly">
          <TechStackSearcher handle={handleTechStack} />
        </TagsContainer>
      </GridItem>
    </GridContainer>
  );
};

export default Published;
