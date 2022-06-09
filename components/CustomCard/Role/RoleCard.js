import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import Tag from "../../Tags/Tag";
import Parser from "html-react-parser";
import moment from "moment";
import styles from "../../../styles/jss/nextjs-material-kit/pages/published/teamCreate";
const pageLabels = {
  contestBodyLabel: "개요",
  techStackLabel: "기술 스택",
  prize: "원",
};

const useStyles = makeStyles(styles);

const RoleCard = ({ role }) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(role);
  }, []);
  return (
    <GridContainer direction="column" className={classes.overview}>
      <GridItem xs={7} sm={7} md={7} className={classes.overviewBody}>
        <Tag
          name={role.name}
          type={"Role"}
          form={"role"}
          team={role.team}
          role={role.id}
        >
          <p>{role.description}</p>
        </Tag>
      </GridItem>
      <GridItem className={classes.subTitle + " " + classes.cardFooter}>
        <span>{pageLabels.participantsLabel}</span>
      </GridItem>
    </GridContainer>
  );
};

export default RoleCard;
