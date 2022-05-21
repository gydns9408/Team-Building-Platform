import Link from "next/link";
import Card from "../../../components/CustomCard/Partner/PartnerCard";
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

  var data = 
    [{
    contest : {
      id : 0,
      constest_image_url : null,
      name : "고길동",
      region : "화성",
      explan : "ㅎㅇ",
      Tag : []
    }},
    {
      contest : {
        id : 0,
        constest_image_url : null,
        name : "man",
        region : "목성",
        explan : "ㅎㅇㅎㅇ",
        Tag : []
      }}
  ]
  

  return (
    <MainLayout>
      <GridContainer direction="row" spacing={2}>
        {data.map((d) => {
          return (
            <GridItem key={d.id} xs={12} sm={12} md={12}>
              <Card contestID={d.id} contest= {d}/>
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