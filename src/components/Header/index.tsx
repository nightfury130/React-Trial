import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import Logo from "../../assets/image/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid rgba(0, 0, 0, .1)",
      boxShadow: "none",
    },
    connectButton: {
      width: "205px",
      height: "40px",
      padding: "8px 26px",
      border: "2px solid #707582",
      borderRadius: "0px",
      color: "#151414",
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
    },
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <img src={Logo} alt="logo" />
        <Button className={classes.connectButton}>Connect Wallet</Button>
      </Toolbar>
    </AppBar>
  );
}
