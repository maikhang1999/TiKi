import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    position: "sticky",
    top: "0px",
    zIndex: 999,
    backgroundColor: "white",
    borderRadius: "4px 4px 0px 0px"
  },
  tabActive: {
    display: "flex",
    width: "248px",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer"
  }
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.tabActive}>
        <div
          style={{
            borderBottom: "4px solid #ff424e",
            padding: "8px 0px",
            width: "120px"
          }}
        >
          <div className={classes.WrapperPicture}>
            <img
              src="https://salt.tikicdn.com/ts/upload/f4/67/1b/8f7b421be961d877af6ebebf45da2d62.png"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
