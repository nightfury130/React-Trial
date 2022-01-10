import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import CommonButton from "../CommonButton";

import Logo from "../../assets/image/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid rgba(0, 0, 0, .1)",
      boxShadow: "none",
    },
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <img src={Logo} alt="logo" />
        <CommonButton name="Connect Wallet" />
      </Toolbar>
    </AppBar>
  );
}
