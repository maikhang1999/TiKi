import React,{useEffect} from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./header";
import Body from "./main";

const useStyles = makeStyles((theme) => ({}));

export default function Products() {
 
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}


