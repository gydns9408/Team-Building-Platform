import Link from "next/link";
import Card from "../../../components/CustomCard/Profile/ProfileCard";
import css from "styled-jsx/css";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/jss/nextjs-material-kit/components/cardStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function CompetitionSearchPage({ data }) {
  const classes = useStyles();

  
  // var data = 
  //   [{
  //   contest : {
  //     id : 0,
  //     constest_image_url : null,
  //     name : "고길동",
  //     region : "화성",
  //     explan : "ㅎㅇ",
  //     Tag : []
  //   }},
  //   {
  //     contest : {
  //       id : 0,
  //       constest_image_url : null,
  //       name : "man",
  //       region : "목성",
  //       explan : "ㅎㅇㅎㅇ",
  //       Tag : []
  //     }}
  // ]
  
  useEffect(()=>{console.log(data)},[])

  return (
    <Card contestID={data}/>
  );
}

export async function getServerSideProps(context) {

  const {id} = context.query;

  const data = await fetch(
    `${process.env.HOSTNAME}/api/profile/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => {
    return response.json();
  });
  return { props: { data } };
}