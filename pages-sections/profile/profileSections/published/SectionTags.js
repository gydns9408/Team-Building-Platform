import * as React from "react";

//components
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import TagsContainer from "../../../../components/Tags/TagsContainer";

import { makeStyles } from "@material-ui/core/styles";
import TechStackSearcher from "../../../../components/Tags/TechStack/TechStackSearcher";

const pageLabels = {
  tech_stack: "기술 스택 생성",
  submitButton: "제출",
};

const styles = {
  tabGridIteam: {
    display: "inline-block",
  },
};

const useStyles = makeStyles(styles);

const Published = ({ handleTechStack, tech_stacks }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <GridContainer direction="column" spacing={2}>
      <GridItem className={classes.tabGridIteam}>
        <TagsContainer tags={tech_stacks} type="TechStack" form="iconOnly">
          <TechStackSearcher handle={handleTechStack} />
        </TagsContainer>
      </GridItem>
    </GridContainer>
  );
};

export default Published;
