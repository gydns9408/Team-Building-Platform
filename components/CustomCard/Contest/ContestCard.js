import React, { Fragment, useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Tag from "../../Tags/Tag";
import TagContainer from "../../Tags/TagsContainer";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import DateProgress from "../../Progress/DateProgress";
import Card from "../../Card/Card";
import CardBody from "../../Card/CardBody";
import CardFooter from "../../Card/CardFooter";
import CardHeader from "../../Card/CardHeader";
const styles = {
  card: {
    width: "auto",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  cardFooter: {
    alignItems: "flex-end",
  },
};

const useStyles = makeStyles(styles);

const ContestCard = (props) => {
  const classes = useStyles();

  const { contestID, className } = props;

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

  useEffect(() => {
    contestRequest(contestID).then(() => {
      setLoading(false);
    });
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <Fragment>
      <Card className={classes.card + " " + className}>
        <Link
          href={`${process.env.HOSTNAME}/contest/Read/${contest.id}`}
          passHref
        >
          <CardHeader>
            <CardActionArea>
              <img
                src={
                  contest.constest_image_url !== null
                    ? `${contest.constest_image_url}`
                    : `/asset/image/background/contest/default.svg`
                }
                alt="green iguana"
                className={classes.image}
              />
            </CardActionArea>
          </CardHeader>
        </Link>
        <CardBody>
          <CardContent>
            <Typography>{contest.contest.team.length}명 </Typography>
            <Typography>{contest.article.content.title}</Typography>
            <Typography>{contest.contest.start_period}</Typography>
            <Typography>{contest.contest.end_period}</Typography>
            <Typography>{contest.contest.prize}원</Typography>
          </CardContent>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <TagContainer
            tags={contest.contest.tech_stack}
            type="TechStack"
            form="iconOnly"
          />
          <TagContainer tags={contest.contest.Tag} type="Tag" form="textOnly" />
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export default ContestCard;
