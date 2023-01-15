import React, { useContext } from 'react';
import { Column, Stock } from 'utils/types';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import DataTable from './DataTable';
import { stockColumnHeaders } from 'utils/constants';
import { StocksContext } from 'context/stocks';
import Divider from '@mui/material/Divider';

interface RowProps<T> {
  collapsible?: boolean;
  columns: Column[];
  row: T;
}

const Row = <T extends { id: string }> (props: RowProps<T>) => {
  const { stocks } = useContext(StocksContext);
  const rows = stocks.find(stock => stock.id === props.row.id)?.values ?? [];
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {props.collapsible && <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen?.(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
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
      {props.collapsible && <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
          <Collapse in={open} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
            <Box sx={{ margin: 1, width: '100%' }}>
              <DataTable<Stock>
                collapsible
                columns={stockColumnHeaders}
                rows={rows}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>}
    </>
  );
}

export default Row;