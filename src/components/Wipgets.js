import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  listWipgets: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: "4px",
    textAlign: "center",
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: "10px 0"
  },
  thump: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flexShrink: 0,
    flexBasis: "103px",
    textDecoration: "none"
  },
  NameWipget: {
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
function Wipgets(props) {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.listWipgets}>
        {props.Wipgets_List.map((item, index) => (
          <a href={item.link} className={classes.thump}>
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
            <span className={classes.NameWipget}>{item.name}</span>
          </a>
        ))}
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    Wipgets_List: state.wipgets
  };
};
export default connect(mapStateToProps, null)(Wipgets);
