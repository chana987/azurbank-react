import React, { useContext } from 'react';
import { HistoricPrice } from 'utils/types';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import DataTable from './DataTable';
import { stockColumnHeaders } from 'utils/constants';
import { StocksContext } from 'context/stocks';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

interface RowProps<T extends Record<string, any>> {
  collapsible?: boolean;
  columns: MRT_ColumnDef<T>[];
  row: T;
}

const Row = <T extends { id: string }> (props: RowProps<T>) => {
	const { stocks } = useContext(StocksContext);
	const rows = stocks.find(stock => stock.id === props.row.id)?.historicPrices ?? [];
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
				{props.columns?.map((column) => {
					const initialValue = props.row[column.accessorKey as keyof T] as string;
					const value = initialValue;
					return (
						<TableCell key={column.id}>
							{value}
						</TableCell>
					);
				})}
			</TableRow>
			{props.collapsible && <TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
					<Collapse in={open} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
						<Box sx={{ margin: 1, width: '100%' }}>
							<DataTable<HistoricPrice>
								columns={stockColumnHeaders}
								rows={rows}
							/>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>}
		</>
	);
};

export default Row;