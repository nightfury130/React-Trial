import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography } from "@material-ui/core";

import Logo from "../../../assets/image/logo_red.png";

import TxProgressModal from "./TxProgressModal";

import { contractAddress } from "../../../config/constant";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ffffff",
      boxShadow: "1px 1px 0px rgba(0, 0, 0, 0.08)",
      height: "119px",
      padding: "0 40px",
      display: "flex",
      marginBottom: "60px",
    },
    subParagraphy: {
      fontSize: "16px",
      lineHeight: "130%",
    },
    address: {
      fontSize: "14px",
      lineHeight: "140%",
      color: "#333333",
      fontWeight: "normal",
    },
    claimable: {
      color: "#707582",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "130%",
      textTransform: "uppercase",
    },
    claimableValue: {
      fontSize: "19px",
      lineHeight: "130%",
      "& span": {
        opacity: 0.4,
      },
    },
    claimTokensBtn: {
      backgroundColor: "#F1FB56",
      width: "187px",
      height: "59px",
      padding: "8px 20px",
      fontSize: "16px",
      letterSpacing: "0.02em",
      color: "#2D3047",
      borderRadius: "0px",
      fontWeight: 700,
      "&:hover": {
        backgroundColor: "#dde740",
      },
    },
  })
);

export default function ClaimTokensPanel() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <img src={Logo} alt="logo" />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.subParagraphy}>Contract</Typography>
          <span className={classes.address}>{contractAddress}</span>
        </Grid>
        <Grid item xs={2}>
          <span className={classes.claimable}>Claimable</span>
          <Typography className={classes.claimableValue}>
            5356 <span>Test</span>
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ textAlign: "right" }}>
          <Button
            className={classes.claimTokensBtn}
            onClick={() => {
              setOpen(true);
            }}
          >
            Claim Tokens
          </Button>
        </Grid>
      </Grid>
      <TxProgressModal open={open} onClose={handleClose} />
    </Box>
  );
}
