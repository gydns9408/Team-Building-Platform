import { useEffect, useState, useReducer } from "react";

import Title from "../../components/Input/Title";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Button";
import Editor from "../../components/Editors/CKEditorTextEditor";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  stackImage: {
    width: "5rem",
  },
};
const useStyles = makeStyles(styles);

const techStackOption = {
  name: "",
  description: "",
  image_url: "",
};
const techStackReducer = (prevState, action) => {
  switch (action.type) {
    case "name":
      return {
        ...prevState,
        name: action.result,
      };
    case "description":
      return {
        ...prevState,
        description: action.result,
      };
    case "imageUrl":
      return {
        ...prevState,
        image_url: `/asset/icon/tech_stack/${prevState.name}`,
      };
  }
};

const SectionGenerateTags = () => {
  const [techStack, dispatch] = useReducer(techStackReducer, techStackOption);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const classes = useStyles(styles);

  const onImgChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      setImage(image);
      setCreateObjectURL(URL.createObjectURL(image));
    }
  };
  const handleTitleChange = (data) => {
    dispatch({ type: "name", result: data.target.value });
  };
  const handleDescriptionChange = (data) => {
    dispatch({ type: "description", result: data });
  };
  const handleImageChange = () => {
    dispatch({ type: "imageUrl" });
  };

  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch(`${process.env.HOSTNAME}/api/file`, {
      method: "POST",
      body: body,
    });

    return response;
  };

  const handelStackSubmit = async () => {
    const body = { techStack };
    handleImageChange();
    await uploadToServer();
    const data = await fetch(
      `${process.env.HOSTNAME}/api/tags/TechStack/${techStack.name}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    return data;
  };
  useEffect(() => {
    setCreateObjectURL("/asset/image/background/contest/default.svg");
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <GridContainer direction="column">
      <GridItem>
        <Title onChange={handleTitleChange} />
      </GridItem>
      <GridContainer direction="column">
        <GridItem>
          <img src={createObjectURL} className={classes.stackImage}></img>
        </GridItem>
        <GridItem>
          <Button variant="contained" component="label">
            <input type="file" accept="image/*" hidden onChange={onImgChange} />
          </Button>
        </GridItem>
      </GridContainer>
      <GridItem>
        <Editor
          onChange={handleDescriptionChange}
          editorLoaded={true}
          name="testName"
          data=""
        />
      </GridItem>
      <GridItem>
        <Button onClick={handelStackSubmit} />
      </GridItem>
      {/* {image} */}
    </GridContainer>
  );
};

export default SectionGenerateTags;
