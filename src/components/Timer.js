import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  countDownTime: {
    display: "flex",
    alignItems: "center"
  },
  time: {
    backgroundColor: "#ff424e",
    color: "white",
    borderRadius: "4px",
    lineHeight: "1.6",
    padding: "2px",
    margin: "0px 4px"
  }
}));
export default function Timer({ initialMinute, initialSeconds }) {
  const classes = useStyles();
  const [minutes, setMinutes] = useState(Number(initialMinute));
  const [seconds, setSeconds] = useState(Number(initialSeconds));
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <React.Fragment>
      <div className={classes.countDownTime}>
        <span className={classes.time}>
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        :
        <span className={classes.time}>
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
        <img
          src="https://salt.tikicdn.com/ts/upload/93/23/bf/1a8d8d0978740faf58eba5f419507de3.png"
          style={{ height: "28px" }}
        />
      </div>
    </React.Fragment>
  );
}
