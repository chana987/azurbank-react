import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Row from './Row';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

interface ColProps<T extends Record<string, any>> {
  collapsible?: boolean;
  columns: MRT_ColumnDef<T>[];
  rows: T[];
}

const DataTable = <T extends { id: string }>(props: ColProps<T>) => {
	return (
		<Table stickyHeader>
			<TableHead>
				<TableRow>
					{props.collapsible && <TableCell />}
					{props.columns?.map((column) => (
						<TableCell
							key={column.accessorKey as string}
						>
							{column.header}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{props.rows?.map((row: T, i: number) => 
					<Row key={i} row={row} columns={props.columns} collapsible={props.collapsible} />,
				)}
			</TableBody>
		</Table>
	);
};

export default DataTable;