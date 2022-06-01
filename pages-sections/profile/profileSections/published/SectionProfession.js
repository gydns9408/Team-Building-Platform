import * as React from "react";

//components
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import TagsContainer from "../../../../components/Tags/TagsContainer";

import { makeStyles } from "@material-ui/core/styles";
import ProfessionSearcher from "../../../../components/Tags/Profession/ProfessionSearcher";

const pageLabels = {
  tech_stack: "분야 생성",
  submitButton: "제출",
};

const styles = {};

const useStyles = makeStyles(styles);

const Published = ({
    handleProfession,
    profession,
}) => {
  console.log(profession);
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <GridContainer direction="column" spacing={2}>
      <GridItem>
        <TagsContainer tags={profession} type="Profession" form="chip">
          {/* <ProfessionSearcher handle={handleProfession} /> */}
        </TagsContainer>
      </GridItem>
    </GridContainer>
  );
};

export default Published;
