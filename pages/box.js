import Searcher from "../components/Tags/Searcher/Search";
import RoleItem from "../components/Tags/Searcher/SearcherItem/RoleItem";
import { Fragment } from "react";
//   index, filed, basicQuery,
const Index = () => {
  return (
    <Fragment>
      <Searcher
        index={"role_index"}
        filed={["name", "description"]}
        basicQuery={""}
        size={10}
      >
        <RoleItem></RoleItem>
      </Searcher>
    </Fragment>
  );
};

export default Index;
