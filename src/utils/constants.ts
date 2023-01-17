import { Column, Currency, Route } from './types';

export const currencySymbols: Record<string, string> = {
	[Currency.ILS]: '₪',
	[Currency.USD]: '$',
	[Currency.EUR]: '€',
};

export const stockColumnHeaders: Column[] = [
	{
		header: 'תאריך',
		accessor: 'date',
		convertValue: (value: string) => {
			return new Date(value).toLocaleDateString('he-IL');
		}
	},
	{
		header: 'מחיר למנייה',
		accessor: 'stockPrice',
		convertValue: (value: number) => {
			return `₪${value?.toFixed(2)}`;
		}
	},
];

export const stocksColumnHeaders: Column[] = [
	{
		header: 'שם החברה',
		accessor: 'hebrewName',
	}, 
	{
		header: 'סמל',
		accessor: 'symbol',
	},
	{
		header: 'שווי שוק',
		accessor: 'marketPrice',
		convertValue: (value: number) => {
			return `₪${value?.toFixed(2)}`;
		}
	},
	{
		header: 'P/E',
		accessor: 'PE',
	},
	{
		header: 'תשואת דיבידנדים',
		accessor: 'DPR',
	},
	{
		header: 'מחיר למנייה',
		accessor: 'stockPrice',
		convertValue: (value: number) => {
			return `₪${value?.toFixed(2)}`;
		}
	},
];

export const userActionsColumnHeaders: Column[] = [
	{
		header: 'סוג פעולה',
		accessor: 'type',
	},
	{
		header: 'תאריך',
		accessor: 'date',
		convertValue: (value: string) => {
			return new Date(value).toLocaleDateString('he-IL');
		}
	},
	{
		header: 'שם החברה',
		accessor: 'stock.hebrewName',
	},
	{
		header: 'כמות',
		accessor: 'amount',
	},
	{
		header: 'מחיר למנייה',
		accessor: 'stockPrice',
	},
	{
		header: 'סה"כ מחיר',
		accessor: 'value',
		convertValue: (value: number) => {
			return `₪${value?.toFixed(2)}`;
		}
	},
	{
		header: 'סטטוס',
		accessor: 'status',
	},
];

export const usersColumnHeaders: Column[] = [
	{
		header: 'מספר חשבון',
		accessor: 'id',
	},
	{
		header: 'שם העמית',
		accessor: 'firstname',
		link: Route.USER,
	},
	{
		header: 'שם משפחה',
		accessor: 'lastname',
	},
	{
		header: 'יום הולדת',
		accessor: 'birthday',
	},
	{
		header: 'תאריך הצטרפות',
		accessor: 'joinDate',
	},
	{
		header: 'שווי תיק',
		accessor: 'portfolioValue',
		convertValue: (value: number) => {
			return `₪${value?.toFixed(2)}`;
		}
	},
];

export const userStocksColumnHeaders: Column[] = [
	{
		header: 'שם החברה',
		accessor: 'hebrewName',
		link: Route.STOCK,
	},
	{
		header: 'סמל',
		accessor: 'symbol',
	},
	{
		header: 'שווי שוק',
		accessor: 'marketPrice',
		convertValue: (value: number) => {
			return `₪${value?.toFixed(2)}`;
		}
	},
	{
		header: 'P/E',
		accessor: 'PE',
	},
	{
		header: 'תשואת דיבידנדים',
		accessor: 'DPR',
	},
	{
		header: 'מחיר למנייה',
		accessor: 'stockPrice',
		convertValue: (value: number) => {
			return `₪${value?.toFixed(2)}`;
		}
	},
	{
		header: 'כמות',
		accessor: 'amount',
	},
	{
		header: 'סה"כ מחיר',
		accessor: 'value',
		convertValue: (value: number) => {
			return `₪${value?.toFixed(2)}`;
		}
	}
];
