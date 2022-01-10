import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Divider, Typography } from "@material-ui/core";

import ClaimTokensPanel from "./components/ClaimTokensPanel";
import DashboardTable from "./components/DashboardTable";
import TxProgressModal from "./components/TxProgressModal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& p": {
        color: "#2D3047",
        textTransform: "uppercase",
        fontWeight: 800,
      },
    },
    pageTitle: {
      fontSize: "34px",
      lineHeight: "120%",
      marginBottom: "55px",
    },
    subTitle: {
      fontSize: "22px",
      lineHeight: "130%",
      "& span": {
        opacity: 0.4,
      },
    },
    claimable: {
      fontSize: "16px",
      lineHeight: "130%",
      fontWeight: 600,
      color: "#707582",
      textTransform: "uppercase",
    },
  })
);

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.pageTitle}>Claming Tokens</Typography>

      <Typography className={classes.subTitle} style={{ marginBottom: "20px" }}>
        Tokens available for claming
      </Typography>

      <ClaimTokensPanel />

      <Typography className={classes.subTitle}>Transactions</Typography>

      <Box display={"flex"} my={4}>
        <div>
          <Typography className={classes.subTitle}>
            8,532 <span>Test</span>
          </Typography>
          <span className={classes.claimable}>Total Claimed</span>
        </div>
        <Box px={14}>
          <Divider orientation="vertical" />
        </Box>
        <div>
          <Typography className={classes.subTitle}>
            24 <span>USD</span>
          </Typography>
          <span className={classes.claimable}>Total Claimed</span>
        </div>
      </Box>

      <DashboardTable />

      <TxProgressModal open={open} onClose={handleClose} />
    </Box>
  );
}
