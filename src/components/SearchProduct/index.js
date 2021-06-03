import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Body from "./Body";
import Content from "./Content";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({}));

function ProductSearch(props) {
  return (
    <Container>
      <Header />
      <Body productlist={props.productlist} />
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    productlist: state.searchProducts
  };
};
export default connect(mapStateToProps, null)(ProductSearch);
