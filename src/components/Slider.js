import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { Component } from "react";
import Box from "@material-ui/core/Box";
import { fade, makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  WrapSlider: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "1rem"
  }
}));

var items = [
  {
    name:
      "https://salt.tikicdn.com/cache/w824/ts/banner/b6/4c/3f/a57d0776d546aa1534b7cafc906e8ef1.jpg",
    description: "Probably the most random thing you have ever seen!"
  },
  {
    name:
      "https://salt.tikicdn.com/cache/w824/ts/banner/9e/12/a1/e54300c9c5a8b793df98153a92954b21.png.jpg",
    description: "Hello World!"
  }
];

export default function Slider() {
  const classes = useStyles();

  return (
    <Container className={classes.WrapSlider}>
      <Carousel
        interval={3000}
        animation="slide"
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
        navButtonsProps={{
          style: {
            marginTop: "-2rem"
          }
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <div className="Subbanner">
        <a href="https://tiki.vn/khuyen-mai/uu-dai-cho-khach-hang-moi">
          <img src="https://salt.tikicdn.com/cache/w408/ts/banner/69/9a/36/dcff148edf2a3918a8ac974d4b75cb20.png.jpg" />
        </a>
      </div>
    </Container>
  );
}

function Item(props) {
  return (
    <Box>
      <img src={props.item.name} style={{ width: "100%" }} />
    </Box>
  );
}
