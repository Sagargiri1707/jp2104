import React from "react";
import HeaderStyles from "./Header.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    float: "right",
    width: "auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    width: "0ch",
    "&:focus": {
      width: "12ch",
    },
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    borderColor: "white",
    backgroundColor: "blue",
    color: "white",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" style={{backgroundColor:"#141414"}}>
        <Toolbar>
          <div style={{ flex: 1 }}></div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button variant="outlined" className={classes.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
