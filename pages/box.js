import Searcher from "../components/Tags/Searcher/Search";
import RoleItem from "../components/Tags/Searcher/SearcherItem/RoleItem";
import ProfessionsItem from "../components/Tags/Searcher/SearcherItem/ProfessionsItem";
import { Fragment } from "react";
//   index, filed, basicQuery,
const Index = () => {
  return (
    <Fragment>
      <Searcher
        index={"role_index"}
        filed={["name", "description", "type"]}
        basicQuery={"role"}
        size={10}
      >
        <RoleItem></RoleItem>
      </Searcher>
      <Searcher
        index={"professtion_index"}
        filed={["name", "description", "type"]}
        basicQuery={"professtion"}
        size={10}
        direction={"row"}
      >
        <ProfessionsItem></ProfessionsItem>
      </Searcher>
    </Fragment>
  );
};

export default Index;
