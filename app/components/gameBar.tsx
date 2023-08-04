import React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.1)',
  },
  colorPrimary: {
    backgroundColor: 'grey'
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '10px 0',
  },
  label: {
    textTransform: 'uppercase',
    fontSize: '14px',
    marginBottom: '5px',
  },
});

const GameBar = ({ skill, level } : { skill: any, level: any}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.label}>{skill}</div>
      <BorderLinearProgress variant="determinate" value={level} />
    </div>
  );
};

export default GameBar;
