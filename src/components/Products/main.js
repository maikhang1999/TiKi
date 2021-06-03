import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ProductItem from "./ProductItem";

const useStyles = makeStyles((theme) => ({
  InfiniteScroll: {
    display: "flex",
    flexDirection: "colunm",
    alignItems: "center",
    backgroudCorlor: "white",
    padding: "0 0 16px",
    marginBottom: "24px",
    borderRadius: "0 0 4px 4px"
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "stretch",
    backgroudCorlor: "#ffffff",
    borderTop: "1px solid #f2f2f2"
  }
}));
export default function Main(props) {
  const classes = useStyles();
  const products = props.products;
  return (
    <div className={classes.InfiniteScroll}>
      <div className={classes.content}>
        {products.map((product, index) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
}
