import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Toolbar, Fab, Container, Box } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import Header from "./components/Header";
import Dashboard from "./views/Dashboard";
import ScrollTop from "./components/ScrollTop";

import Web3 from "web3";

// const web3 = new Web3();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& button": {
        fontFamily: "Montserrat",
        fontWeight: 600,
      },
      "& p": {
        fontFamily: "Montserrat",
      },
      "& table *": {
        fontFamily: "Montserrat",
      },
    },
    container: {
      maxWidth: "1148px",
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Toolbar id="back-to-top-anchor" />
      <Container classes={{ maxWidthLg: classes.container }}>
        <Box my={8}>
          <Dashboard />
        </Box>
      </Container>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
