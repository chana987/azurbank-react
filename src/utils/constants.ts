import { Column, Currency, Route } from "./types";

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
    header: 'שווי כולל',
    accessor: 'currentPrice',
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
    header: 'כמות',
    accessor: 'amount',
  },
  {
    header: 'שווי כולל',
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
    header: 'שם העמית',
    accessor: 'firstname',
    link: Route.USER,
  },
  {
    header: 'קוד זיהוי',
    accessor: 'id',
  },
  {
    header: 'יום הולדת',
    accessor: 'birthday',
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
    header: 'שווי',
    accessor: 'currentPrice',
    convertValue: (value: number) => {
      return `₪${value?.toFixed(2)}`;
    }
  },
  {
    header: 'כמות',
    accessor: 'amount',
  },
];
