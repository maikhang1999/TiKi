import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "8px 12px",
    alignSelf: "flex-start",
    width: "100%",
    flex: "1 1 0%"
  },
  title: {
    fontSize: "15px",
    fontWeight: "500px",
    lineHeight: "1.6",
    overflow: "hidden"
  }
}));

export default function Content(props) {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <span className={classes.title}>{props.title}</span>
      <span className={classes.quanity}>{props.quanity} san pham</span>
    </div>
  );
}
