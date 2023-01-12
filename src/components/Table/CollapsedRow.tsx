import React, { useContext } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Collapse, Box } from '@mui/material';
import DataTable from './DataTable';
import { stockColumnHeaders } from 'utils/constants';
import { StocksContext } from 'context/stocks';
import { Stock } from 'utils/types';

interface RowProps<T> {
  open: boolean;
  row: T;
}

const CollapsedRow = <T extends { id: string }> (props: RowProps<T>) => {
  const { stocks } = useContext(StocksContext);
  const rows = stocks.find(stock => stock.id === props.row.id)?.values ?? [];

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={props.open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <DataTable<Stock>
              collapsible
              columns={stockColumnHeaders}
              rows={rows}
            />
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}

export default CollapsedRow;