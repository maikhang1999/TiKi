import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { fade, makeStyles } from "@material-ui/core/styles";
import Process from "./Process";
const useStyles = makeStyles((theme) => ({
  deal_items: {
    padding: "0 20px"
  },
  deal_item: {
    position: "relative"
  },
  deals_disscount: {
    backgroundColor: "#ff424e",
    color: "white",
    position: "absolute",
    left: "0",
    top: "0",
    borderRadius: "4px 0px 26px",
    padding: "2px 8px 4px 2px"
  },
  price: {
    color: "black",
    textAlign: "center",
    lineHeight: "24px",
    fontSize: "15px",
    fontWeight: "500"
  }
}));
const deal_items = [
  {
    img:
      "https://salt.tikicdn.com/cache/280x280/ts/product/50/86/f1/8c08d595e64661d3d0d9438ca2194de3.jpg",
    name: "Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng",
    price: "200000"
  },
  {
    img:
      "https://salt.tikicdn.com/cache/280x280/ts/product/82/95/cf/f11cddb33c745f8145e955e2c5c4b880.jpg",
    name: "Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng",
    price: "200000"
  },
  {
    img:
      "https://salt.tikicdn.com/cache/280x280/ts/product/b0/39/57/a5c7b46a18cd2e077fb2d805ed600e67.jpg",
    name: "Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng",
    price: "200000"
  },
  {
    img:
      "https://salt.tikicdn.com/cache/280x280/ts/product/89/1f/90/e1bb55a8b8f67780fbb53fae09e0812d.jpg",
    name: "Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng",
    price: "200000"
  },
  {
    img:
      "https://salt.tikicdn.com/cache/280x280/ts/product/08/52/3b/f31fe2b6ff847dcde2e1080c6dbd37ff.jpg",
    name: "Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng",
    price: "200000"
  },
  {
    img:
      "https://salt.tikicdn.com/cache/280x280/ts/product/65/5b/61/eff13cf032dea38ccaa08a8d1282375e.jpg",
    name: "Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng",
    price: "200000"
  },
  {
    img:
      "https://salt.tikicdn.com/cache/280x280/ts/product/67/49/ef/f6ac7c4c1d3f40a0111e81d0b08d5acc.jpg",
    name: "Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng",
    price: "200000"
  }
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon
        style={{ backgroundColor: "#494949", color: "azure" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon
        style={{ backgroundColor: "#494949", color: "azure" }}
      />
    </div>
  );
}
export default function SlickSlider() {
  var settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const classes = useStyles();
  return (
    <div className={classes.deal_items}>
      <Slider ref={(c) => (this.slider = c)} {...settings}>
        {deal_items.map((item, index) => {
          return (
            <React.Fragment>
              <div>
                <div className={classes.deal_item}>
                  <img src={item.img} style={{ width: "95%" }} />
                  <div className={classes.deals_disscount}>-19%</div>
                </div>
                <div className={classes.price}>{item.price}₫</div>
                <Process />
              </div>
            </React.Fragment>
          );
        })}
      </Slider>
    </div>
  );
}
