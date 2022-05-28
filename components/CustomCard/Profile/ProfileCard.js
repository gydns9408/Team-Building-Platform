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
import GridItem from "../../Grid/GridItem";
import Paginations from "../../Pagination/Pagination";
import MainLayout from "../../Layout/MainLayout2";
import ProfessionsContainer from "../../Professions/ProfessionsContainer";

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
  useEffect(()=>{console.log(contestID[0].tech_stack)},[])

    if (loading) return <div>Loading...</div>;
  return (
    <MainLayout>
    <GridContainer direction="row" spacing={0}>
          <GridItem xs={12} sm={12} md={12}>
          <Typography>프로필</Typography>
          <Avatar
          alt="photo"
          src={
            contestID[0].user.image !== null
            ? `${contestID[0].user.image}`
            : `/asset/image/background/contest/default.svg`
          }
          />
          <Typography>개인정보</Typography>
          <Typography>닉네임 : {contestID[0].user.name}</Typography>
          <Typography>이메일 : {contestID[0].user.email}</Typography>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
          <Typography>관심분야</Typography>
          <ProfessionsContainer tags={contestID[0].profession} />
          <Typography>기술스택</Typography>
          <TagContainer tags={contestID[0].tech_stack}
          type={"TechStack"}
          form={"iconOnly"}
          />

          </GridItem>
    </GridContainer>
  </MainLayout>
   );
};

export default ContestCard;
