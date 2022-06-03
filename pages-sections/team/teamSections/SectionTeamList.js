import TeamCard from "../../../components/CustomCard/Team/TeamCard";
import React, { useEffect, useState } from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Paginations from "../../../components/Pagination/Pagination";
import MainLayout from "../../../components/Layout/MainLayout";
import styles from "../../../styles/jss/nextjs-material-kit/components/cardStyle";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import FilrerContainer from "../../../components/Article/PageFiler/FilerContain";
import FilterMenuItem from "../../../components/Article/PageFiler/FilterMenuItem";
import FilterToggleItem from "../../../components/Article/PageFiler/FilterToggleItem";

const pageLabels = {
  professionFilter: "분야",
};

const styled = {
  listItem: {
    padding: "5.625rem",
  },
};

const useStyles = makeStyles(styled);

const reqTeamList = async (contest) => {
  // const { page, currentProfession } = context.query;
  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Team/1?contest=${contest}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then(async (response) => {
    return await response.json();
  });
  const maxPage = await fetch(`${process.env.HOSTNAME}/api/article/Team`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(async (response) => {
    return await response.json();
  });
  // const profession = await fetch(
  //   `${process.env.HOSTNAME}/api/tags/profession`,
  //   {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }
  // ).then(async (response) => {
  //   return await response.json();
  // });
  // return { props: { data, maxPage, profession } };
  return { data, maxPage };
};

const SectionTeamList = ({ contest }) => {
  const classes = useStyles(useStyles);
  const router = useRouter();
  const [currentProfession, setProfession] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [teamList, setTeamList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(1);
  useEffect(() => {
    reqTeamList(contest)
      .then(async ({ data, maxPage }) => {
        await Promise.all([setTeamList(data), setMaxPage(maxPage)]);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {}, [teamList]);
  const handelPageChange = (page) => {
    setCurrentPage(page);
  };
  // const handleMenuClick = (profession) => {
  //   setProfession(profession);
  // };
  if (loading) return <div>Loading</div>;
  return (
    <GridContainer direction="column" spacing={4}>
      {/* <FilrerContainer>
        <FilterMenuItem
          items={profession}
          label={pageLabels.professionFilter}
          handleMenuClick={handleMenuClick}
        />
  </FilrerContainer>*/}

      <GridContainer direction="row">
        {teamList.map((d) => {
          if (d !== undefined) {
            console.log(d);
            return (
              <GridItem
                key={d.article_id}
                xs={4}
                sm={4}
                md={4}
                className={classes.listItem}
              >
                <TeamCard contestID={d.article_id} />
              </GridItem>
            );
          }
        })}
      </GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Paginations
          currentPage={currentPage}
          MaxPage={maxPage}
          handel={handelPageChange}
        />
      </GridItem>
    </GridContainer>
  );
};
export default SectionTeamList;
