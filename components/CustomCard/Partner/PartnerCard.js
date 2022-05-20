import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Avatar, CardHeader } from "@mui/material";
import Tag from "../../Tags/Tag";
import TagContainer from "../../Tags/TagsContainer";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import DateProgress from "../../Progress/DateProgress";
const styles = {
  card: {
    width: "auto",
    height: "100%",
  },
};

const useStyles = makeStyles(styles);

const ContestCard = (props) => {
  const classes = useStyles();

  const { contestID, className, contest } = props;

//   const [contest, setContest] = useState({});
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

  useEffect(() => {
      console.log(contest)
  }, []);
  useEffect(() => {
    contestRequest(contestID).then(() => {
      setLoading(false);
    });
  }, []);

//   if (loading) return <div>Loading...</div>;
  return (
    <Link
      href={`${process.env.HOSTNAME}/profile/${contest.id}`}
      prefetch
      passHref
    >
      <Card className={classes.card + " " + className}>
      <GridContainer direction="row" spacing={2} xs={12} sm={12} md={12}>
        <CardActionArea>
          <CardContent>
          <CardHeader
              avatar={
              <Avatar alt="photo" 
              src={contest.constest_image_url !== null
                ? `${contest.constest_image_url}`
                : `/asset/image/background/contest/default.svg`} />
              }    
          title= {contest.contest.name}
          subheader={contest.contest.region}
          />
            <Typography>{contest.contest.explan}</Typography>
            <TagContainer tags={contest.contest.Tag} />
          </CardContent>
        </CardActionArea>
        </GridContainer>
      </Card>
    </Link>
  );
};

export default ContestCard;
