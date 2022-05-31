import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../../components/CustomCard/Profile/ProfileCard";
import Card2 from "../../../components/CustomCard/Profile/ProfileCard2";
import css from "styled-jsx/css";
import React, { useEffect, useState, useReducer, Fragment } from "react";
import styles from "../../../styles/jss/nextjs-material-kit/components/cardStyle";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import { getSession, useSession, signIn, signOut } from "next-auth/react";




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
        // profession : citizens.profession,
        ...(contest.profession[0] !== undefined && {
          profession: {
            connect: citizens.profession.map((stack) => {
              return {
                name: stack.name,
              };
            }),
          },
        }),
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
  const [citizens, citizensDispatch] = useReducer(citizensReducer, citizensOption);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const {data: session} =useSession()

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
    <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
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