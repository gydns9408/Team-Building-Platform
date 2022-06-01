import { useState, useEffect, useReducer } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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

import moment from "moment";
import Fade from "@mui/material/Fade";
const pageLabels = {
  edittingButton: "수정",
  deleteButton: "삭제",
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
  },
  icon: {
    height: "2rem",
    width: "2rem",
    alignItems: "center",
  },
  iconContain: {
    marginRight: "0.5rem",
  },
  iconMenuIcon: {
    height: "2rem",
    width: "2rem",
    marginLeft: "100%",
    left: "100%",
  },
  menu: {
    height: "20rem",
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
      <GridContainer direction="row">
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer direction="row">
            <ProfessionsLabel data={professions} />
            <GridItem className={classes.titleContain} xs={10} sm={10} md={10}>
              <p className={classes.title}>{article.content.title}</p>
              <p>{moment(article.createdAt).format("YYYY.MM.DD")}</p>
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
          </GridContainer>
        </GridItem>
        <GridItem>
          <GridContainer
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center"
          >
            <GridContainer alignItems="center" className={classes.iconContain}>
              <VisibilityIcon className={classes.icon} />
              <p>{article.viewCount}</p>
            </GridContainer>
            <GridContainer alignItems="center" className={classes.iconContain}>
              <GradeIcon className={classes.icon} />
              <p>{article.likeCount}</p>
            </GridContainer>
          </GridContainer>
        </GridItem>
      </GridContainer>

      <GridItem xs={12} sm={12} md={12}>
        <GridContainer direction="row" spacing={3}>
          <GridItem xs={9} sm={9} md={9}>
            <Editor
              name={article.content.title}
              value={article.content.body}
              readOnly={true}
            ></Editor>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <GridContainer direction="column" spacing={3}>
              <GridItem>{contest.name}</GridItem>
              <GridItem>{contest.prize}</GridItem>
              <GridItem>
                <Editor
                  name={contest.name}
                  value={contest.content}
                  readOnly={true}
                ></Editor>
              </GridItem>

              {`${moment(contest.start_period).format("YYYY.MM.DD")}~ ${moment(
                contest.end_period
              ).format("YYYY.MM.DD")}`}
              {/* {contest.Tag[0]} */}

              <GridItem>
                <TagsContainer
                  tags={contest.tech_stack}
                  type="TechStack"
                  form="iconOnly"
                ></TagsContainer>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
};

export default Overview;

//      {article.published}
