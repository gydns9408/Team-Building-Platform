import { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import GridItem from "../../Grid/GridItem";
import GridContainer from "../../Grid/GridContainer";

const styles = {
  icon: {
    height: "3rem",
    width: "3rem",
  },
  span: {
    height: "5rem",
    width: "5rem",
    padding: "1rem",
    borderRadius: "0.5rem",
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
    console.log(data);
    setProfessions(data);
  }, []);
  useEffect(() => {
    setProfessions(data);
  }, [data]);

  return (
    <span className={classes.span}>
      <img src={data[0].image_url} className={classes.icon}></img>
      <style jsx>{`
        span {
          background-color: ${data[0].color};
        }
      `}</style>
    </span>
  );
};

export default ProfessionsLabel;
