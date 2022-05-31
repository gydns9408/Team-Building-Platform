import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Avatar, CardHeader, Button } from "@mui/material";
import Tag from "../../Tags/Tag";
import TagContainer from "../../Tags/TagsContainer";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Image from "next/image";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import Paginations from "../../Pagination/Pagination";
import MainLayout from "../../Layout/MainLayout2";
import ProfessionsContainer from "../../Professions/ProfessionsContainer";
import ContestParticipationContainer from "../../ContestParticipation/ContestParticipationContainer";
import CertificateContainer from "../../Certificate/CertificateContainer";
import ProgramContainer from "../../Program/ProgramContainer";
import TeamsContainer from "../../TeamContainer/TeamsContainer";

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

  const photosize = 500


    if (loading) return <div>Loading...</div>;
  return (
    <MainLayout>
    <GridContainer direction="row" spacing={0}>
          <GridItem xs={12} sm={12} md={12}>
          <h2>프로필</h2>
          <Avatar
          alt="photo"
          src={
            contestID[0].user.image !== null
            ? `${contestID[0].user.image}`
            : `/asset/image/background/contest/default.svg`
          }
          />
          <h2>개인정보</h2>
          <Typography>닉네임 : {contestID[0].user.name}</Typography>
          <Typography>이메일 : {contestID[0].user.email}</Typography>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
          <h2>자기소개</h2>
          <Typography>{contestID[0].profile.content}</Typography>
          <h2>관련분야</h2>
          <ProfessionsContainer tags={contestID[0].profession} />
          <h2>관심있는 분야</h2>
          <ProfessionsContainer tags={
            contestID[0].user_attention_profession.length !== 0
            ? contestID[0].user_attention_profession[0].profession
            : [{id : null, name : null}]
            }/>
          <h2>기술스택</h2>
          <TagContainer tags={contestID[0].tech_stack}
          type={"TechStack"}
          form={"iconOnly"}
          />

          <h2>이력서</h2>
          <Typography>{
          contestID[0].profile.resume.length !== 0
          ? contestID[0].profile.resume[0].resume_name
          : null
          }</Typography>
          <Image 
          src={
            contestID[0].profile.resume.length !== 0
          ? contestID[0].profile.resume[0].image_url
          : `/asset/image/background/contest/default.svg`
        }
          alt="이미지"
          width={photosize}
          height={photosize}
          />
          <h2>공모전 참가 이력</h2>
          <ContestParticipationContainer datas={contestID[0].profile.contest}/>
          <h2>자격증</h2>
          <CertificateContainer tags={contestID[0].certificate} />
          <h2>활용 가능한 프로그램</h2>
          <ProgramContainer tags={contestID[0].program} />
          <h2>소속중인 팀</h2>
          <TeamsContainer datas={contestID[0].team} />
          <h2>이 프로필의 조회수</h2>
          <Typography>{contestID[0].profile.view_count}</Typography>
          </GridItem>
    </GridContainer>
  </MainLayout>
   );
};

export default ContestCard;
