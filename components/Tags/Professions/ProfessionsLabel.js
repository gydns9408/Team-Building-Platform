import { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import GridItem from "../../Grid/GridItem";
import GridContainer from "../../Grid/GridContainer";
import { Tooltip } from "@mui/material";
const styles = {
  icon: {
    // height: "auto",
    // width: "3rem",
  },
  root: {
    height: "5rem",
    width: "5rem",
    padding: "1rem",
    borderRadius: "0.5rem",
    display: "flex",
  },
};

const useStyles = makeStyles(styles);

const ProfessionsLabel = ({ data }) => {
  const classes = useStyles();
  const [professions, setProfessions] = useState([
    {
      color: null,
      description: null,
      id: null,
      image_url: null,
      name: "분야",
    },
  ]);

  useEffect(() => {
    setProfessions(data);
  }, []);
  useEffect(() => {
    setProfessions(data);
  }, [data]);

  return (
    <Tooltip title={data[0].name}>
      <div className={classes.root}>
        <img src={data[0].image_url} className={classes.icon}></img>

        <style jsx>{`
          div {
            background-color: ${data[0].color};
          }
        `}</style>
      </div>
    </Tooltip>
  );
};

export default ProfessionsLabel;
