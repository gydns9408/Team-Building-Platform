import Card from "../../../components/CustomCard/Contest/ContestCard";
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

const reqTeamList = () => {
  // const { page, currentProfession } = context.query;
  // const data = await fetch(
  //   `${process.env.HOSTNAME}/api/article/Contest/${page}?take=${12}${
  //     currentProfession !== undefined
  //       ? `&currentProfession=${currentProfession}`
  //       : ""
  //   }`,
  //   {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }
  // ).then(async (response) => {
  //   return await response.json();
  // });
  // const maxPage = await fetch(
  //   `${process.env.HOSTNAME}/api/article/Contest?${
  //     currentProfession !== undefined
  //       ? `&currentProfession=${currentProfession}`
  //       : ""
  //   }`,
  //   {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }
  // ).then(async (response) => {
  //   return await response.json();
  // });
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
};

const SectionTeamList = ({ data, maxPage, profession }) => {
  const classes = useStyles(useStyles);
  const router = useRouter();
  const [currentProfession, setProfession] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setCurrentPage(router.query.page);
  //   setLoading(false);
  // }, []);
  // useEffect(() => {
  //   if (currentProfession !== undefined) {
  //     router.push(
  //       `/contest/${currentPage}?currentProfession=${currentProfession}`
  //     );
  //   } else {
  //     router.push(`/contest/${currentPage}`);
  //   }
  // }, [currentPage]);
  // useEffect(() => {
  //   if (currentProfession !== undefined) {
  //     router.push(`/contest/1?currentProfession=${currentProfession}`);
  //   }
  // }, [currentProfession]);
  const handelPageChange = (page) => {
    setCurrentPage(page);
  };
  const handleMenuClick = (profession) => {
    setProfession(profession);
  };
  if (loading) return <div>Loading</div>;
  return (
    <GridContainer direction="column" spacing={4}>
      {/* <FilrerContainer>
        <FilterMenuItem
          items={profession}
          label={pageLabels.professionFilter}
          handleMenuClick={handleMenuClick}
        />
      </FilrerContainer>
      <GridContainer direction="row">
        {data.map((d) => {
          return (
            <GridItem
              key={d.id}
              xs={4}
              sm={4}
              md={4}
              className={classes.listItem}
            >
              <Card contestID={d.id} />
            </GridItem>
          );
        })}
      </GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Paginations
          currentPage={currentPage}
          MaxPage={maxPage}
          handel={handelPageChange}
        />
      </GridItem> */}
    </GridContainer>
  );
};
export default SectionTeamList;
/*
export async function getServerSideProps(context) {
  const { page, currentProfession } = context.query;

  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Contest/${page}?take=${12}${
      currentProfession !== undefined
        ? `&currentProfession=${currentProfession}`
        : ""
    }`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then(async (response) => {
    return await response.json();
  });
  const maxPage = await fetch(
    `${process.env.HOSTNAME}/api/article/Contest?${
      currentProfession !== undefined
        ? `&currentProfession=${currentProfession}`
        : ""
    }`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then(async (response) => {
    return await response.json();
  });
  const profession = await fetch(
    `${process.env.HOSTNAME}/api/tags/profession`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then(async (response) => {
    return await response.json();
  });

  return { props: { data, maxPage, profession } };
}

*/
