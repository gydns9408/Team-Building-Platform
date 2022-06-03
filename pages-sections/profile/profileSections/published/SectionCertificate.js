import * as React from "react";

//components
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import TagsContainer from "../../../../components/Tags/TagsContainer";

import { makeStyles } from "@material-ui/core/styles";
import TechStackSearcher from "../../../../components/Tags/TechStack/TechStackSearcher";

const pageLabels = {
  tech_stack: "분야 생성",
  submitButton: "제출",
};

const styles = {};

const useStyles = makeStyles(styles);

const Published = ({
    handleCertificate,
    certificate,
}) => {
  console.log(certificate);
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <GridContainer direction="column" spacing={2}>
      <GridItem>
        <TagsContainer tags={certificate} type="Certification" form="chip">
          {/* <TechStackSearcher handle={handleTechStack} /> */}
        </TagsContainer>
      </GridItem>
    </GridContainer>
  );
};

export default Published;
