import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  listBanners: {
    display: "flex",
    justifyContent: "space-between",

    margin: "10px 0",
    width: "100%"
  },
  banner: {
    height: "150px",
    backgroundColor: "#e8e8e8",
    borderRadius: "20px",
    overflow: "hidden"
  }
}));

function Banner(props) {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.listBanners}>
        {props.banners.map((item, index) => (
          <a href={item.link} className={classes.banner}>
            <img src={item.img} />
          </a>
        ))}
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    banners: state.banners
  };
};
export default connect(mapStateToProps, null)(Banner);
