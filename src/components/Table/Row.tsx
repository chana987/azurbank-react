import React from 'react';
import { Column } from 'utils/types';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface RowProps<T> {
  columns: Column[];
  open?: boolean;
  row: T;
  setOpen?: (open: boolean) => void;
}

const Row = <T extends { id: string }> (props: RowProps<T>) => {

  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      {props.open !== undefined && <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => props.setOpen?.(!props.open)}
        >
          {props.open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
      </TableCell>}
      {props.columns?.map((column: Column) => {
        const value = props.row[column.accessor as keyof T] as string;
        return (
          <TableCell key={column.accessor}>
            {column.convertValue?.(value) ?? value}
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export default Row;