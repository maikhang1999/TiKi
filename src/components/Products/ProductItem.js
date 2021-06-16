import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import GradeIcon from "@material-ui/icons/Grade";
import { withStyles } from "@material-ui/styles";
import { useHistory, useParams } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  product_item: {
    textDecoration: "none",
    display: "flex",
    position: "relative",
    border: "1px solid transparent",
    cursor: "pointer"
  },
  wrapItem: {
    display: "flex",
    padding: "12px 6px",
    color: "#242424",
    textDecoration: "none",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  thumbnail: {
    flexShrink: 0,
    width: "200px",
    height: "200px",
    margin: "0px 12px",
    textAlign: "center"
  },
  badgeTop: {
    position: "absolute",
    zIndex: 2
  },
  badgeService: {
    marginTop: "12px",
    marginBottom: "8px"
  },
  rating_review: {
    display: "flex",
    marginTop: "4px"
  },
  rating: {
    position: "relative",
    margin: "0 4px 0 0 "
  },
  rating_average: {
    width: "94%",
    whiteSpace: "nowrap",
    position: "absolute",
    top: "0px",
    left: "0px",
    overflow: "hidden"
  },
  review: {
    fontSize: "11px",
    lineHeight: "16px",
    color: "#787878"
  },
  discount_price: {
    display: "flex",
    alignItems: "center",
    marginTop: "4px"
  },
  price: {
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: "500",
    margin: "0 8 0 0 "
  },
  discount: {
    fontSize: "13px",
    lineHeight: "20px",
    borderRadius: "2px",
    backgroundColor: "#ff424e",
    color: "white",
    padding: "0 2px"
  },
  name: {
    display: "-webkit-box",
    overflow: "hidden"
  },
  total_icon_item: {
    color: "#c7c7c7",
    height: "12",
    width: "12"
  },
  average_icon_item: {
    color: "#fdd836",
    height: "12",
    width: "12"
  }
}));

export default function ProductItem(props) {
  const classes = useStyles();
  const product = props.product;
  const history = useHistory();
  const handleClick = (id)=>{
    history.push(`/detail/${id}`)
  }
  return (
    <div style={{ width: "20%" }} onClick={()=>handleClick(product.id)}>
      <div className={classes.product_item}>
        <span className={classes.wrapItem}>
          <div>
            <div className={classes.thumbnail}>
              <div className={classes.badgeTop}></div>
              <img src={product.img} style={{ maxWidth: "100%" }} />
            </div>
            <div className={classes.info}>
              <div className={classes.badgeService}></div>
              <div className={classes.name}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    margin: "0 0 4px",
                    lineHeight: "20px"
                  }}
                >
                  {product.name}
                </span>
              </div>
              <div className={classes.rating_review}>
                <div className={classes.rating}>
                  <div className={classes.total_rating}>
                    <GradeIcon
                      className={classes.total_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                    <GradeIcon
                      className={classes.total_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                    <GradeIcon
                      className={classes.total_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                    <GradeIcon
                      className={classes.total_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                    <GradeIcon
                      className={classes.total_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                  </div>
                  <div className={classes.rating_average}>
                    <GradeIcon
                      className={classes.average_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                    <GradeIcon
                      className={classes.average_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                    <GradeIcon
                      className={classes.average_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                    <GradeIcon
                      className={classes.average_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                    <GradeIcon
                      className={classes.average_icon_item}
                      style={{ height: "12", width: "12" }}
                    />
                  </div>
                </div>
                <div className={classes.review}>(100)</div>
              </div>
            </div>
            <div className={classes.discount_price}>
              <div className={classes.price}>{product.price}</div>
              <div className={classes.discount}>{-product.discount}%</div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
