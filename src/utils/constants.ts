import { Column, Currency } from "./types";

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
    header: 'שווי שוק',
    accessor: 'value',
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
    accessor: 'currentPrice',
    convertValue: (value: number) => {
      return `₪${value?.toFixed(2)}`;
    }
  },
];

export const usersColumnHeaders: Column[] = [
  {
    header: 'שם משתמש',
    accessor: 'firstname',
  }, 
  {
    header: 'יום הולדת',
    accessor: 'birthday',
  },
];

export const userStocksColumnHeaders: Column[] = [
  {
    header: 'שם החברה',
    accessor: 'stock.hebrewName',
  },
  {
    header: 'סמל',
    accessor: 'stock.symbol',
  },
  {
    header: 'שווי שוק',
    accessor: 'stock.currentPrice',
    convertValue: (value: number) => {
      return `₪${value?.toFixed(2)}`;
    }
  },
  {
    header: 'כמות',
    accessor: 'amount',
  },
];
