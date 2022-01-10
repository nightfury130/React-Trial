import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    connectButton: {
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

interface CommonButtonProps {
  name: string;
}

export default function CommonButton({ name }: CommonButtonProps) {
  const classes = useStyles();

  return <Button className={classes.connectButton}>{name}</Button>;
}
