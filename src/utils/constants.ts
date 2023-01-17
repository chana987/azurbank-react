import { Action, Currency, HistoricPrice, Route, Stock, User, UserStock } from './types';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

export const currencySymbols: Record<string, string> = {
	[Currency.ILS]: '₪',
	[Currency.USD]: '$',
	[Currency.EUR]: '€',
};

export const stockColumnHeaders: MRT_ColumnDef<HistoricPrice>[] = [
	{
		header: 'תאריך',
		accessorKey: 'date',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stockPrice',
	},
];

export const stocksColumnHeaders: MRT_ColumnDef<Stock>[] = [
	{
		header: 'שם החברה',
		accessorKey: 'hebrewName',
	}, 
	{
		header: 'סמל',
		accessorKey: 'symbol',
	},
	{
		header: 'שווי שוק',
		accessorKey: 'marketValue',
	},
	{
		header: 'P/E',
		accessorKey: 'PE',
	},
	{
		header: 'תשואת דיבידנדים',
		accessorKey: 'DPR',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stockPrice',
	},
];

export const userActionsColumnHeaders: MRT_ColumnDef<Action>[] = [
	{
		header: 'סוג פעולה',
		accessorKey: 'type',
	},
	{
		header: 'תאריך',
		accessorKey: 'date',
	},
	{
		header: 'שם החברה',
		accessorKey: 'stock.hebrewName',
	},
	{
		header: 'כמות',
		accessorKey: 'amount',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stock.stockPrice',
	},
	{
		header: 'סה"כ מחיר',
		accessorKey: 'value',
	},
	{
		header: 'סטטוס',
		accessorKey: 'status',
	},
];

export const usersColumnHeaders: MRT_ColumnDef<User>[] = [
	{
		header: 'מספר חשבון',
		accessorKey: 'id',
	},
	{
		header: 'שם העמית/ה',
		accessorKey: 'firstName',
	},
	{
		header: 'שם משפחה',
		accessorKey: 'lastName',
	},
	{
		header: 'יום הולדת',
		accessorKey: 'birthday',
	},
	{
		header: 'תאריך הצטרפות',
		accessorKey: 'joinDate',
	},
	{
		header: 'שווי תיק',
		accessorKey: 'portfolioValue',
	},
];

export const userStocksColumnHeaders: MRT_ColumnDef<UserStock>[] = [
	{
		header: 'שם החברה',
		accessorKey: 'stock.hebrewName',
	},
	{
		header: 'סמל',
		accessorKey: 'stock.symbol',
	},
	{
		header: 'P/E',
		accessorKey: 'stock.PE',
	},
	{
		header: 'תשואת דיבידנדים',
		accessorKey: 'stock.DPR',
	},
	{
		header: 'מחיר למנייה',
		accessorKey: 'stock.stockPrice',
	},
	{
		header: 'כמות',
		accessorKey: 'amount',
	},
	{
		header: 'סה"כ שווי',
		accessorKey: 'value',
	},
];
