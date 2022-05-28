import Link from "next/link";
import Card from "../../../components/CustomCard/Contest/ContestCard";
import css from "styled-jsx/css";
import React, { useEffect, useState } from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Paginations from "../../../components/Pagination/Pagination";
import MainLayout from "../../../components/Layout/MainLayout";
import styles from "../../../styles/jss/nextjs-material-kit/components/cardStyle";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles(styles);

export default function CompetitionSearchPage({ data, maxPage }) {
  const classes = useStyles();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setCurrentPage(router.query.page, setLoading(false));
  }, []);
  useEffect(() => {
    router.push(`/contest/${currentPage}`);
  }, [currentPage]);

  const handelPageChange = (page) => {
    setCurrentPage(page);
  };
  if (loading) return <div>Loading</div>;
  return (
    <MainLayout>
      <GridContainer direction="row" spacing={2}>
        {data.map((d) => {
          return (
            <GridItem key={d.id} xs={3} sm={3} md={3}>
              <Card contestID={d.id} />
            </GridItem>
          );
        })}
      </GridContainer>
      <Paginations
        currentPage={currentPage}
        MaxPage={maxPage}
        handel={handelPageChange}
      />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const { page } = context.query;
  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Contest/${page}?take=${16}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => {
    return response.json();
  });
  const maxPage = await fetch(`${process.env.HOSTNAME}/api/article/Contest/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    return response.json();
  });
  return { props: { data, maxPage } };
}
