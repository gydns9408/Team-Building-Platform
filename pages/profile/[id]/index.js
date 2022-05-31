import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../../components/CustomCard/Profile/ProfileCard";
import css from "styled-jsx/css";
import React, { useEffect, useState, useReducer, Fragment } from "react";
import styles from "../../../styles/jss/nextjs-material-kit/components/cardStyle";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";





const useStyles = makeStyles(styles);

const citizensOption = {
  id: 0,
  user_id: "",
  certificate : [],
  program: [],
  user_attention_profession : [],
  user : [],
  profile : [],
  team: [],
  tech_stack: [],
  profession: [{}],
};

const citizensReducer = (prevState, action) => {
  switch (action.type) {
    case "init":
      return { ...action.result };
    case "citizensCertificate":
      return {
        ...prevState,
        certificate : { ...action.result },
      };
    case "citizensProgram":
      return {
        ...prevState,
        program : { ...action.result },
      };
    case "citizensUserAttentionProfession":
      return {
        ...prevState,
        user_attention_profession : { ...action.result },
      };
    case "citizensUser":
      return {
        ...prevState,
        user : { ...action.result },
      };
    case "citizensProfile":
      return {
        ...prevState,
        profile : { ...action.result },
      };
    case "citizensTechStack":
      return {
        ...prevState,
        tech_stack: [...prevState.tech_stack, action.result],
      };
    case "citizensProfession":
      return {
        ...prevState,
        profession: { ...action.result },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const requestProfileUpdate = async() => {

 


  const body = await {
    citizens: {
      update: {
        profession : citizens.profession,
        // tech_stack : citizens.tech_stack,
        ...(contest.tech_stack[0] !== undefined && {
          tech_stack: {
            connect: citizens.tech_stack.map((stack) => {
              return {
                name: stack.name,
              };
            }),
          },
        }),
        certificate : citizens.certificate,
        program : citizens.program,


        user: {
          update: {
            email: citizens.user.email,
          },
        },

        profile: {
          update: {
            content : citizens.profile.content,
            view_count : citizens.profile.view_count,
            like_count : citizens.profile.like_count,
            resume : {
              update: {
                resume_name : citizens.profile.resume.resume_name,
                image_url : citizens.profile.resume.image_url
              },
            }
          },
        },

        user_attention_profession : {
          update: {
            profession : citizens.user_attention_profession.profession,
          },
        },

      },
    },
  };
  


  

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


export default function CompetitionSearchPage({ data }) {
  const classes = useStyles();
  const [citizens, citizensDispatch] = useReducer(citizensReducer, citizensOption);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    Promise.all([
      citizensDispatch({ type: "init", result: data }),
    ]).then(() => {
      console.log(data);
      setLoading(false);
    });
  }, []);

  return (
    <Fragment>
    <Card contestID={data}/>
    <Button onClick={()=> handlePublished(router.query.id)} >입력</Button>
    </Fragment>
  );
}

const handlePublished = async (data) => {
  await requestProfileUpdate2(data);
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
  return { props: { data } };
}