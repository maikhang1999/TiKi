import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    margin: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    margin: "1rem"
  },
  appBar: {
    backgroundColor: "rgb(1, 127, 255)"
  },
  search: {
    position: "relative",
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  buttonSearch: {
    backgroundColor: "#0d5cb6",
    color: "white"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none"
  },
  inputRoot: {
    color: "inherit",
    backgroundColor: fade(theme.palette.common.white, 0.15)
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "auto",
    [theme.breakpoints.up("md")]: {
      width: "auto"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  wrap: {
    fontSize: "11px",
    display: "flex",
    flexDirection: "column"
  },
  textIcon: {
    display: "flex",
    alignItems: "flex-end"
  },

  danhmuc: {
    display: "flex",
    alignItems: "flex-start"
  },
  shoppingCart: {
    margin: "10px"
  }
}));
export default useStyles;
