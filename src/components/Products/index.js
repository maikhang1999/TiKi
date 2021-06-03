import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./header";
import Body from "./main";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({}));

function Products(props) {
  return (
    <Container>
      <Header />
      <Body products={props.products} />
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};
export default connect(mapStateToProps, null)(Products);
