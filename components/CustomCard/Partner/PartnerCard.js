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
import GridContainer from "../../Grid/GridContainer";

const styles = {
  card: {
    width: "auto",
    height: "100%",
  },
};

const useStyles = makeStyles(styles);

const ContestCard = (props) => {
  const classes = useStyles();

  const { contestID, className } = props;
  //   const [contest, setContest] = useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(()=>{console.log(props)},[])

    if (loading) return <div>Loading...</div>;
  return (
    // <Link
    //   href={`${process.env.HOSTNAME}/profile/${contest.id}`}
    //   prefetch
    //   passHref
    // >
        <Card className={classes.card + " " + className}>
          <GridContainer direction="row" spacing={2} xs={12} sm={12} md={12}>
            <CardActionArea>
              <CardContent>
                <CardHeader
                  avatar={
                    <Avatar
                      alt="photo"
                      src={
                        contestID.user.image !== null
                          ? `${contestID.user.image}`
                          : `/asset/image/background/contest/default.svg`
                      }
                    />
                  }
                  title={contestID.user.name}
              />
                <Typography>자기소개</Typography>
                <TagContainer tags={contestID.tech_stack} />
              </CardContent>
            </CardActionArea>
          </GridContainer>
        </Card>
     //</Link>
   );
};

export default ContestCard;
