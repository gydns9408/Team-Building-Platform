import Tag from "../components/Tags/Tag";
import { Fragment } from "react";
const tags = () => {
  return (
    <Fragment>
      <Tag type={"Role"} name={"프론트 엔드"} />
      <Tag type={"TechStack"} name={"Typescript"} />
      <Tag type={"Program"} name={"Adobe Photoshop"} />
    </Fragment>
  );
};

export default tags;
