import { useState, useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import IconButton from "@mui/material/IconButton";
//components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import TagsContainer from "../../../components/Tags/TagsContainer";

import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import CardHeader from "../../../components/Card/CardHeader";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import teamStyle from "../../../styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import ProfessionsLabel from "../../../components/Tags/Professions/ProfessionsLabel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GradeIcon from "@mui/icons-material/Grade";
import Editor from "../../../components/Editors/CKEditorTextEditor";

import Treasure from "../../../svg/contest/Treasure.svg";
import moment from "moment";
import Parser from "html-react-parser";
import Fade from "@mui/material/Fade";
import SectionComments from "../../comment/SectionComments";
import { Box } from "@mui/system";

const pageLabels = {
  edittingButton: "수정",
  deleteButton: "삭제",
  contestOverview: "대회 개요",
  contestPrize: "상금",
  contestPeriod: "대회 기간",
  contestTechStack: "기술 스택",
  prize: "원",
};

const styles = {
  title: {
    alignItems: "center",
    fontFamily: "Do Hyeon",
    fontSize: "3rem",
    marginTop: "0",
    marginBottom: "0",
  },
  titleContain: {
    marginLeft: "1rem",
  },
  dateContain: {
    marginLeft: "100%",
  },
  body: {
    margin: "2rem",
    color: "#263747",
    fontFamily: "SCDream3",
    fontSize: "1rem",
  },
  icon: {
    height: "2rem",
    width: "2rem",
    alignItems: "center",
    marginRight: "1rem",
  },
  iconContain: {
    marginRight: "0.5rem",
  },
  iconMenuIcon: {
    height: "2rem",
    width: "2rem",
    marginLeft: "100%",
  },
  editor: {
    border: "none",
  },
  menu: {
    height: "20rem",
  },
  card: {
    padding: "2.5rem",
    margin: "0",
  },
  overviewItem: {
    alignItems: "start",
    justifyContent: "center",
    paddingRight: "1rem",
  },
  overviewBody: {
    fontSize: "1rem",
  },
  borderRight: {
    borderRight: "0.0625rem solid #D7E2EB",
  },
  subTitle: {
    marginTop: "1rem",
    marginBottom: "1.5rem",
    fontFamily: "SCDream4",
    fontWeight: "bold",
  },
};

const useStyles = makeStyles(teamStyle);
const customStyles = makeStyles(styles);
const Overview = ({ article, contest, professions, handleEditing }) => {
  const [loading, setLoading] = useState(true);
  const classes = customStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <GridContainer direction="column" spacing={3}>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer direction="row">
          <GridItem xs={1} sm={1} md={1}>
            <ProfessionsLabel data={professions} />
          </GridItem>
          <GridItem className={classes.titleContain} xs={9} sm={9} md={9}>
            <GridContainer direction="column">
              <GridItem>
                <p className={classes.title}>{article.content.title}</p>
              </GridItem>
              <GridItem>
                <p>{moment(article.createdAt).format("YYYY.MM.DD")}</p>
              </GridItem>
              <GridItem>
                <TagsContainer
                  tags={contest.Tag}
                  type={"Tag"}
                  form={"textOnly"}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={1} sm={1} md={1}>
            <IconButton className={classes.iconMenuIcon}>
              <MoreVertOutlinedIcon
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            </IconButton>
            <Menu
              className={classes.menu}
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                onClick={() => {
                  handleEditing();
                  handleClose();
                }}
              >
                {pageLabels.edittingButton}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                {pageLabels.deleteButton}
              </MenuItem>
            </Menu>
          </GridItem>
          <GridItem>
            <GridContainer direction="row-reverse" justifyContent="flex-start">
              <GridItem xs={1} sm={1} md={1}>
                <VisibilityIcon className={classes.icon} />
                <p>{article.viewCount}</p>
                <GradeIcon className={classes.icon} />
                <p>{article.likeCount}</p>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card className={classes.card}>
              <GridContainer direction="row" spacing={3}>
                <GridItem
                  xs={3}
                  sm={3}
                  md={3}
                  className={classes.overviewItem + " " + classes.borderRight}
                >
                  <GridContainer direction="column">
                    <GridItem className={classes.subTitle}>
                      {pageLabels.contestOverview}
                    </GridItem>
                    <GridItem>
                      <p className={classes.overviewBody}>{contest.name}</p>
                    </GridItem>
                    <GridItem className={classes.overviewBody}>
                      <p className={classes.overviewBody}>
                        <div>{Parser(contest.content)}</div>
                      </p>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem
                  xs={3}
                  sm={3}
                  md={3}
                  className={classes.overviewItem + " " + classes.borderRight}
                >
                  <GridContainer direction="column">
                    <GridItem className={classes.subTitle}>
                      {pageLabels.contestPeriod}
                    </GridItem>
                    <GridItem className={classes.overviewBody}>
                      <p className={classes.overviewBody}>
                        {`${moment(contest.start_period).format(
                          "YYYY.MM.DD"
                        )}~ ${moment(contest.end_period).format("YYYY.MM.DD")}`}
                      </p>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem
                  xs={3}
                  sm={3}
                  md={3}
                  className={classes.overviewItem + " " + classes.borderRight}
                >
                  <GridContainer direction="column">
                    <GridItem className={classes.subTitle}>
                      <p className={classes.overviewBody}>
                        {pageLabels.contestPrize}
                      </p>
                    </GridItem>

                    <GridItem>
                      <Treasure className={classes.icon} />
                      <p className={classes.overviewBody}>
                        {contest.prize}
                        {pageLabels.prize}
                      </p>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={3} sm={3} md={3} className={classes.overviewItem}>
                  <GridContainer direction="column">
                    <GridItem className={classes.subTitle}>
                      {pageLabels.contestTechStack}
                    </GridItem>
                    <GridItem className={classes.overviewBody}>
                      <TagsContainer
                        tags={contest.tech_stack}
                        type="TechStack"
                        form="iconOnly"
                      ></TagsContainer>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card className={classes.card}>
          <div className={classes.body}>{Parser(article.content.body)}</div>
        </Card>
      </GridItem>
      <GridItem>
        <SectionComments />
      </GridItem>
    </GridContainer>
  );
};

export default Overview;
