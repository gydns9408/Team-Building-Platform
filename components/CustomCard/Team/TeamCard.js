import React, { Fragment, useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TagContainer from "../../Tags/TagsContainer";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Card from "../../Card/Card";
import CardBody from "../../Card/CardBody";
import CardFooter from "../../Card/CardFooter";
import CardHeader from "../../Card/CardHeader";
import Modal from "../../Modal/Modal";
import TeamOverview from "../../../pages-sections/team/teamSections/SectionOverview";
const pageLabels = {};

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

const contestRequest = async (contestID) => {
  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Team/Read/${contestID}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then(async (response) => {
    return await response.json();
  });
  return data;
};

const useStyles = makeStyles(styles);

const ContestCard = (props) => {
  const classes = useStyles();

  const { contestID, className } = props;

  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const [modalToggle, setModalToggle] = useState(false);

  const handleModalOpen = () => {
    setModalToggle(true);
  };
  const handleModalClose = () => {
    setModalToggle(false);
  };

  useEffect(() => {
    contestRequest(contestID)
      .then((data) => {
        setTeam(data);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <Fragment>
      <Card className={classes.card + " " + className}>
        <Link
          href={`${process.env.HOSTNAME}/team/Read/${team.article_id}`}
          passHref
        >
          <CardHeader>
            <CardActionArea>
              <img
                src={
                  team.team_image_url !== null
                    ? `${team.team_image_url}`
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
            <Typography>{team.article.content.title}</Typography>
          </CardContent>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <TagContainer tags={team.team.role} type="Role" form="iconOnly" />
        </CardFooter>
      </Card>
      <Modal
        title={team.article.content.title}
        open={modalToggle}
        handleModalClose={handleModalClose}
      >
        <TeamOverview />
      </Modal>
    </Fragment>
  );
};

export default ContestCard;
