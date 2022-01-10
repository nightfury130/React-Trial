import { useEthers, useEtherBalance } from "@usedapp/core";
import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export default function ConnectButton() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const classes = useStyles();

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box>
      <Typography style={{ color: "black" }}>
        {`${account.slice(0, 6)}...${account.slice(
          account.length - 4,
          account.length
        )}`}
      </Typography>
    </Box>
  ) : (
    <Button className={classes.connectButton} onClick={handleConnectWallet}>
      CONNECT WALLET
    </Button>
  );
}
