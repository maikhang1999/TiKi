import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AutorenewIcon from "@material-ui/icons/Autorenew";
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "20px",
    lineHeight: "28px",
    padding: "10px 0px",
    display: "flex",
    justifyContent: "space-between",
    cursor: "default",
    textTransform: "uppercase"
  },
  leftAndRight: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase"
  },
  right: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    cursor: "pointer",
    fontSize: "15px",
    lineHeight: "24px",
    color: "#0d5cb6"
  }
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <span className={classes.leftAndRight}>
        <SearchIcon />
        <span>Tim kiem noi bat</span>
      </span>
      <span className={classes.right}>
        <AutorenewIcon />
        <span>Xem Them</span>
      </span>
    </div>
  );
}
