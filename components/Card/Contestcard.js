import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import css from "styled-jsx/css";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Tag from "../Tags/Tag";
import TagContainer from "../Tags/TagsContainer";

const style = css`
  .test {
    background-color: white;
    height: 60px;
    font-size: 1rem;
  }
`;

const ContestCard = (props) => {
  const { contestID } = props;

  const [contest, setContest] = useState({});
  const [loading, setLoading] = React.useState(true);

  const contestRequest = async (contestID) => {
    const data = await fetch(
      `${process.env.HOSTNAME}/api/article/Contest/page/${contestID}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then(async (response) => {
      return await response.json();
    });
    setContest(data);
  };

  useEffect(() => {}, []);
  useEffect(() => {
    contestRequest(contestID).then(() => {
      setLoading(false);
    });
  }, [contest]);
  const photosize = 50;

  if (loading) return <div>Loading...</div>;
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            height="140"
            image={
              contest.constest_image_url !== null
                ? `${contest.constest_image_url}`
                : `/asset/image/background/contest/default.svg`
            }
            alt="green iguana"
          />
          <Typography>{contest.contest.team.length}명 </Typography>

          {contest.article.content.title}

          <Typography variant="body2" color="text.secondary">
            {contest.article.content.body}
          </Typography>
          <TagContainer tags={contest.contest.Tag} />
          <Typography>{contest.contest.prize}원</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ContestCard;
