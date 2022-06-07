import * as React from "react";

//components
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import Editor from "../../../../components/Editors/CKEditorTextEditor";
import TitleInput from "../../../../components/Input/Email";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";


const pageLabels = {
  tech_stack: "기술 스택 생성",
  submitButton: "제출",
};

const styles = {};

const useStyles = makeStyles(styles);

const Published = ({
    email,
  content,
  handleEmailChange,
  handleContentChange,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return <div>Loading</div>;

  return (
    <GridContainer direction="column" spacing={2}>
      <GridItem>
        <TitleInput onChange={handleEmailChange} data={email} />
      </GridItem>
      <GridItem>
      <Typography><li>자기소개</li></Typography>
      </GridItem>
      <GridItem>
        <Editor
          onChangeHandle={handleContentChange}
          editorLoaded={true}
          name="article"
          value={content}
        />
      </GridItem>
    </GridContainer>
  );
};

export default Published;
