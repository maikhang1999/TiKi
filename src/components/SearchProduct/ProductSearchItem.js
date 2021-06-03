import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "8px",
    border: "1px solid #eeeeee",
    overflow: "hidden",
    textDecoration: "none",
    textAlign: "left"
  },
  pictureGroup: {
    display: "flex",
    padding: "8px",
    width: "100%",
    justifyContent: "space-between"
  },
  picture: {
    paddingTop: "100%",
    position: "relative",
    backgroundColor: "#ffffff"
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0px",
    left: "0px",
    zIndex: 2,
    objectFit: "contain"
  }
}));
export default function ProducSearchItem(props) {
  const item = props.item;
  const classes = useStyles();
  return (
    <a href={item.link} className={classes.item}>
      <div className={classes.pictureGroup}>
        {item.imageList.map((img, index) => (
          <div style={{ width: "86px" }}>
            <div className={classes.picture}>
              <img src={img} className={classes.img} />
            </div>
          </div>
        ))}
      </div>
      <Content title={item.title} quanity={item.quanity} />
    </a>
  );
}
