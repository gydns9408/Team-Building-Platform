import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../../components/CustomCard/Profile/ProfileCard";
import Card2 from "../../../components/CustomCard/Profile/ProfileCard2";
import css from "styled-jsx/css";
import React, { useEffect, useState, useReducer, Fragment } from "react";
import styles from "../../../styles/jss/nextjs-material-kit/components/cardStyle";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tabs, Tab } from "@mui/material";
import { getSession, useSession, signIn, signOut } from "next-auth/react";


import Header from "../../../components/header/Header";

// import ProfileOverview from "../../../../pages-sections/profile/profileSections/SectionOverview";
// import ProfileHeaderImage from "../../../../pages-sections/profile/profileSections/SectionHeaderImage";
import ProfilePublishedTab from "../../../pages-sections/profile/profileSections/SectionPublishedTab";




const useStyles = makeStyles(styles);


const requestProfileUpdate = async() => {

 


  
  


  

  const data = await fetch (
  `${process.env.HOSTNAME}/api/profile/${id}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body : JSON.stringify(body)
  }
).then((response) => {
  return response.json();
})
}

const requestProfileUpdate2 = async(id) => {




  const data = await fetch (
    `${process.env.HOSTNAME}/api/profile/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => {
    return response.json();
  })
  }

  const requestProfileUpdateViewCount = async(id) => {

    const data = await fetch (
      `${process.env.HOSTNAME}/api/profile/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      return response.json();
    })
    }


export default function CompetitionSearchPage({ data }) {
  const {data: user} =useSession
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const {data: session} =useSession()
  const [editing, setEditing] = React.useState(false);

  const handleEditing = () => {
    setEditing(!editing);
  };

  return (
    <>
    {editing ? (
      <ProfilePublishedTab
      citizensValue={data[0]}
      handleEditing={handleEditing}
      />
    ) : (
    <Fragment>
      <Header/>
    <Button onClick={()=> 
      handleEditing()
      } 
      variant="outlined" 
      component="span"
      >프로필 수정</Button>
    <Card contestID={data}/>
    <h2>&nbsp;</h2>
    <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
    <Link
      href={`${process.env.HOSTNAME}/profile/${router.query.id}`}
       prefetch
      passHref
     >
    <Button onClick={()=> 
      handlePublished(data[0].user_id)
      } 
      variant="contained" 
      component="span"
      >좋아요</Button>
    </Link>
    <Card2 contestID={data}/>

    </Fragment>
    
    )
    }
    </>
  );
}

const handlePublished = async (data) => {
  await requestProfileUpdate2(data);
};

const handlePublishedViewCount = async (data) => {
  await requestProfileUpdateViewCount(data);
};

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

  handlePublishedViewCount(data[0].user_id);

  return { props: { data } };
}