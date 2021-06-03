import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ProductSearchItem from "./ProductSearchItem";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridTemplateRows: "1fr",
    gap: "0px 16px"
  }
}));
export default function Body(props) {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      {props.productlist.map((item, index) => (
        <ProductSearchItem item={item} />
      ))}
    </div>
  );
}
