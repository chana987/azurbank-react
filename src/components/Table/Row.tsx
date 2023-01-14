import React from 'react';
import { Column } from 'utils/types';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

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
        const initialValue = props.row[column.accessor as keyof T] as string;
        const value = column.convertValue?.(initialValue) ?? initialValue;
        return (
          <TableCell key={column.accessor}>
            {column.link ? 
              <Link to={`/${column.link}/:${props.row.id}`} >{value}</Link> : 
              value}
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export default Row;