import { useState, useEffect } from "React";
import { Dialog, IconButton, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import CommonButton from "../../../components/CommonButton";

import {
  contractAddress,
  contract,
  NETWORK_NAME,
} from "../../../config/constant";

const useStyles = makeStyles({
  dialogPaper: {
    width: "568px",
    boxShadow: "1px 1px 0px rgba(0, 0, 0, 0.08)",
    padding: "16px",
    display: "flex",
  },
  dialog: {
    background: "rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(6px)",
  },
  closeIcon: {
    width: "fit-content",
    alignSelf: "end",
    color: "#181818",
  },
  title: {
    fontSize: "27px",
    fontWeight: 800,
    textAlign: "center",
    color: "#181818",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    marginBottom: "20px",
    lineHeight: "140%",
  },
  content: {
    fontSize: "18px",
    fontWeight: "normal",
    color: "#181818",
    textAlign: "center",
    lineHeight: "150%",
  },
  address: {
    color: "#F88012",
  },
});

interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function TxProgressModal(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, open } = props;

  const [loading, setLoading] = useState(true);
  const [txhash, setTxhash] = useState("");

  useEffect(() => {
    contract.methods.ASelfClaimToMyWallet().call((err: any, result: any) => {
      setTxhash(result.logs[0]);
    });
  }, [txhash]);

  const onNavigateScan = () => {
    window.open("https://mumbai.polygonscan.com/tx/" + txhash, "_blank");
  };

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper, root: classes.dialog }}
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <IconButton className={classes.closeIcon} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      {loading ? (
        <Box style={{ padding: "16px", textAlign: "center" }}>
          <Typography className={classes.title}>
            Transaction in
            <br />
            progress
          </Typography>
          <Typography
            className={classes.content}
            style={{ marginBottom: "20px" }}
          >
            Transaction is proceeding on [{NETWORK_NAME}].
            <br />
            This can take a moment, please be patient...
          </Typography>
        </Box>
      ) : (
        <Box style={{ padding: "16px", textAlign: "center" }}>
          <Typography className={classes.title}>
            Transaction finished
            <br />
            successfully
          </Typography>
          <Typography
            className={classes.content}
            style={{ lineHeight: "23px", marginBottom: "60px" }}
          >
            Hash: <span className={classes.address}>{txhash}</span>
          </Typography>

          <CommonButton
            name="Check on polygonscan"
            onClick={() => onNavigateScan()}
          />
        </Box>
      )}
    </Dialog>
  );
}
