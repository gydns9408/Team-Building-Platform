import { Fragment } from "react";
import TechStackSearcher from "../components/Tags/TechStack/TechStackSearcher";
const searchPage = ({ data }) => {
  return (
    <Fragment>
      <TechStackSearcher />
    </Fragment>
  );
};

export default searchPage;

export async function getServerSideProps(context) {
  const searchQuery = "tech_stack";
  const index = "tech_stack_index";
  const filed = "type";
  const body = {
    index: index,
    searchQuery: searchQuery,
    filed: filed,
  };

  const data = await fetch(`${process.env.HOSTNAME}/api/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json();
  });
  console.log(data);
  return {
    props: { data },
  };
}
