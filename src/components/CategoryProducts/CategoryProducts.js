import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "20px",
    lineHeight: "28px",
    padding: "10px 16px",
    textTransform: "uppercase"
  },
  listCategoryProduct: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
    width: "100%"
  },
  categoryProduct: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flexShrink: 0,
    flexBasis: "103px",
    textDecoration: "none"
  },
  nameCategory: {
    marginTop: "12px",
    fontSize: "13px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.54",
    color: "rgb(36, 36, 36)",
    width: "81px",
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
}));

function CategoryProducts(props) {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.header}>Danh muc noi bat</div>
      <div className={classes.listCategoryProduct}>
        {props.categoryProducts.map((item, index) => (
          <a href={item.link} className={classes.categoryProduct}>
            <img
              src={item.img}
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                marginTop: "5px",
                marginLeft: "14px"
              }}
            />
            <span className={classes.nameCategory}>{item.name}</span>
          </a>
        ))}
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    categoryProducts: state.categoryProducts
  };
};
export default connect(mapStateToProps, null)(CategoryProducts);
