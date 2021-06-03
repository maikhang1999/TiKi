import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timer from "./Timer";
import SlickSlider from "./SlickSlider";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  wrapHomeDeal: {
    backgroundColor: "white"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px"
  }
}));
export default function HomeDeal() {
  const classes = useStyles();
  return (
    <Container className={classes.wrapHomeDeal} style={{ width: "1234px" }}>
      <div className={classes.header}>
        <div>
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
            alt="flash deal"
          />
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/flash.gif"
            alt="flash deal"
          />
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
            alt="flash deal"
          />
        </div>
        <Timer initialMinute={2} initialSeconds={10} />
      </div>
      <div className={classes.slickList}>
        <SlickSlider />
      </div>
    </Container>
  );
}
