import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from "@material-ui/core";

interface Data {
  asset: string;
  amount: number;
  totalValue: number;
  time: number;
}

function createData(
  asset: string,
  amount: number,
  totalValue: number,
  time: number
): Data {
  return { asset, amount, totalValue, time };
}

const rows = [
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
  createData("TEST TOKEN", 2324, 74.03, 1641655681),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  {
    id: "asset",
    numeric: false,
    label: "Asset",
  },
  { id: "amount", numeric: true, label: "Amount" },
  { id: "totalValue", numeric: true, label: "Total Value" },
  { id: "time", numeric: true, label: "Time" },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id === "asset" ? "left" : "center"}
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id && (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              )}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
      borderRadius: "0px",
      boxShadow: "1px 1px 0px rgba(0, 0, 0, 0.08)",
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
    colored: {
      backgroundColor: "#fbfbf9",
    },
  })
);

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("time");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell>{row.asset}</TableCell>
                      <TableCell align="center" className={classes.colored}>
                        {row.amount}
                      </TableCell>
                      <TableCell align="center">{row.totalValue}</TableCell>
                      <TableCell align="center" className={classes.colored}>
                        {row.time}
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
