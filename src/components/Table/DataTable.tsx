import React from 'react';
import { Column } from 'utils/types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CollapsibleRow from './CollapsibleRow';
import Row from './Row';

interface ColProps<T> {
  collapsible?: boolean;
  columns: Column[];
  rows: T[];
}

const DataTable = <T extends { id: string }>(props: ColProps<T>) => {
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          {props.collapsible && <TableCell />}
          {props.columns?.map((column: Column) => (
            <TableCell
              key={column.accessor as string}
            >
              {column.header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows?.map((row: T, i: number) => 
          props.collapsible ? 
            <CollapsibleRow index={i} row={row} columns={props.columns} /> :
            <Row key={i} row={row} columns={props.columns} />
        )}
      </TableBody>
    </Table>
  );
}

export default DataTable;