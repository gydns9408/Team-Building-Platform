import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Card from "../../../components/Card/Contestcard";
import css from "styled-jsx/css";
import React, { useState } from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Paginations from "../../../components/Pagination/Pagination";
import { useRouter } from "next/router";

export default function CompetitionSearchPage({ data }) {
  let [chosenField, chosenFieldHandler] = useState("0");

  return (
    <>
      <h1>대회 탐색</h1>
      <h2 className="grid2">
        <h2>{chosenField}</h2>
        <button
          onClick={() => {
            chosenFieldHandler((chosenField = "1"));
          }}
        >
          분야1
        </button>
        <button
          onClick={() => {
            chosenFieldHandler((chosenField = "2"));
          }}
        >
          분야2
        </button>
        <button
          onClick={() => {
            chosenFieldHandler((chosenField = "3"));
          }}
        >
          분야3
        </button>
        <button
          onClick={() => {
            chosenFieldHandler((chosenField = "4"));
          }}
        >
          분야4
        </button>
        <button
          onClick={() => {
            chosenFieldHandler((chosenField = "5"));
          }}
        >
          분야5
        </button>
      </h2>

      <GridContainer columns={{ xs: 4, sm: 8, md: 12 }}>
        <GridItem sm={12} md={6} lg={3}>
          {data.map((d) => {
            return <Card contestID={d.id} />;
          })}
        </GridItem>
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
    </>
  );
}

export async function getServerSideProps(context) {
  const { page } = context.query;
  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Contest/${page}?take=${5}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => {
    return response.json();
  });
  return { props: { data } };
}
