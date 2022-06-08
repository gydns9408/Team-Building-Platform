import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea, Avatar, CardHeader, Button, List, ListItem, ListItemText, Divider } from "@mui/material";
import Tag from "../../Tags/Tag";
import TagContainer from "../../Tags/TagsContainer";
import TagsContainer_profile_private from "../../Tags/TagsContainer_profile_private";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Image from "next/image";
import Parser from "html-react-parser";
import GridContainer from "../../Grid/GridContainer";
import GridItem2 from "../../Grid/GridItem2";
import Paginations from "../../Pagination/Pagination";
import MainLayout from "../../Layout/MainLayout2";
import Header from "../../header/Header";
import ProfessionsContainer from "../../Professions/ProfessionsContainer";
import ContestParticipationContainer from "../../ContestParticipation/ContestParticipationContainer";
import CertificateContainer from "../../Certificate/CertificateContainer";
import ProgramContainer from "../../Program/ProgramContainer";
import TeamsContainer from "../../TeamContainer/TeamsContainer";
import ResumeContainer from "../../Resume/ResumeContainer";



const styles = {
  card: {
    width: "auto",
    height: "100%",
  },
  profile_img: {
    // width: "18.75rem",
    // height: "18.75rem",
    width: "15rem",
    height: "15rem",
    borderRadius: "50%"
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

  useEffect(() => { console.log(props) }, [])

  const photosize = 200


  if (loading) return <div>Loading...</div>;
  return (

    <GridContainer direction="row" spacing={2}>
      <GridItem2 xs={3} sm={3} md={3}>
        <GridContainer direction="column" spacing={2}>
          <GridItem2>
            <h2>프로필</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <img
              className={classes.profile_img}
              src={
                contestID[0].user.image !== null
                  ? `${contestID[0].user.image}`
                  : `/asset/image/background/contest/default.svg`
              }
              alt="photo"
            />
          </GridItem2>
          <GridItem2>
            <h2>개인정보</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <Typography color="#8C8C8C" >닉네임 : {contestID[0].user.name}</Typography>
            <Typography color="#8C8C8C">이메일 : {contestID[0].user.email}</Typography>
          </GridItem2>
        </GridContainer>
      </GridItem2>
      <GridItem2 xs={5} sm={5} md={5}>
        <GridContainer direction="column" spacing={0}>
          <GridItem2>
            <h2>자기소개</h2>

            <Divider />
            <Typography>&nbsp;</Typography>
            <Box
            sx={{
            backgroundColor :  "#FFFFFF",
            borderColor : "#D0D7DE",
            borderStyle : "solid",
            borderWidth : "1px",
            borderRadius : "6px"
            }}
            >
            
            <Typography>{
            contestID[0].profile.content !== null
           ? Parser(contestID[0].profile.content)
           : null
          }</Typography>
          </Box>
          </GridItem2>
          <GridItem2>
            <h2>관련분야</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <ProfessionsContainer tags={contestID[0].profession} />
          </GridItem2>
          <GridItem2>
            <h2>관심있는 분야</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <ProfessionsContainer tags={
              contestID[0].user_attention_profession.length !== 0
                ? contestID[0].user_attention_profession[0].profession
                : [{ id: null, name: null }]
            } />
          </GridItem2>
          <GridItem2>
            <h2>기술스택</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <TagsContainer_profile_private tags={contestID[0].tech_stack}
              type={"TechStack"}
              form={"iconOnly_big"}
            />
          </GridItem2>
          <GridItem2>
            <h2>자격증</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <CertificateContainer tags={contestID[0].certificate} />
          </GridItem2>
          <GridItem2>
            <h2>활용 가능한 프로그램</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <ProgramContainer tags={contestID[0].program} />
          </GridItem2>
        </GridContainer>
      </GridItem2>

      <GridItem2 xs={4} sm={4} md={4}>
        <GridContainer direction="column" spacing={2}>
          {/* <GridItem2>
            <h2>이력서</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <ResumeContainer tags={contestID[0].profile.resume} />
          </GridItem2> */}
          <GridItem2>
            <h2>공모전 참가 이력</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <Box
            sx={{
            backgroundColor :  "#FFFFFF",
            borderColor : "#D0D7DE",
            borderStyle : "solid",
            borderWidth : "1px",
            borderRadius : "6px"
            }}
            >
            <ContestParticipationContainer datas={contestID[0].profile.contest} />
            </Box>
          </GridItem2>
          <GridItem2>
            <h2>소속중인 팀</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <Box
            sx={{
            backgroundColor :  "#FFFFFF",
            borderColor : "#D0D7DE",
            borderStyle : "solid",
            borderWidth : "1px",
            borderRadius : "6px"
            }}
            >
            <TeamsContainer datas={contestID[0].team} />
            </Box>
          </GridItem2>
          <GridItem2>
            <h2>이 프로필의 조회수</h2>
            <Divider />
            <Typography>&nbsp;</Typography>
            <Typography color="#8C8C8C">{contestID[0].profile.view_count}</Typography>
          </GridItem2>
        </GridContainer>
      </GridItem2>
    </GridContainer>

  );
};

export default ContestCard;

//배효운