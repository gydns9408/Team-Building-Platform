import Link from "next/link";
import Card from "../../../components/CustomCard/Contest/ContestCard";
import css from "styled-jsx/css";
import React, { useState } from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Paginations from "../../../components/Pagination/Pagination";
import MainLayout from "../../../components/Layout/MainLayout";
import styles from "../../../styles/jss/nextjs-material-kit/components/cardStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function CompetitionSearchPage({ data }) {
  const classes = useStyles();

  return (
    <MainLayout>
      <GridContainer
        direction="row"
        spacing={2}
        sm={12}
        md={12}
        lg={12}
        className={classes.card}
      >
        {data.map((d) => {
          return (
            <GridItem key={d.id} xs={3} sm={3} md={3}>
              <Card contestID={d.id} />
            </GridItem>
          );
        })}
      </GridContainer>
      <Paginations
        pages={[
          { text: 1 },
          { text: "..." },
          { text: 5 },
          { text: 6 },
          { active: true, text: 7 },
          { text: 8 },
          { text: 9 },
          { text: "..." },
          { text: 12 },
        ]}
      />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const { page } = context.query;
  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Contest/${page}?take=${10}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => {
    return response.json();
  });
  return { props: { data } };
}
