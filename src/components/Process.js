import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 10
  },
  colorPrimary: {
    backgroundColor: "#ffaaaf"
  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#ff424e"
  }
}))(LinearProgress);
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "relative",
    width: "80%",
    left: "10px"
  },
  content: {
    fontSize: "11px",
    color: "white",
    position: "absolute",
    top: "4px",
    left: "86px"
  }
});

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={20} />
      <span className={classes.content}>Vua mo ban</span>
    </div>
  );
}
