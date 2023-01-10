import * as React from 'react';
import { Column, Stock } from 'utils/types';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface ColProps {
  columns: Column<any>[];
  rows: Stock[];
}

interface RowProps {
  columns: Column<any>[];
  row: Stock;
}

const Row = ({ columns, row }: RowProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        {columns.map((column: Column<any>) => {
          const value = row[column.accessor as keyof Stock] as string;
          return (
            <TableCell key={column.accessor as string} align="left">
              {column.convertValue ? column.convertValue(value) : value}
            </TableCell>
          );
        })}
      </TableRow>
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
}

export default function CollapsibleTable(props: ColProps) {
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell />
          {props.columns.map((column: Column<any>) => (
            <TableCell
              key={column.accessor as string}
            >
              {column.header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map((row: Stock) => (
          <Row key={row.id} row={row} columns={props.columns} />
        ))}
      </TableBody>
    </Table>
  );
}