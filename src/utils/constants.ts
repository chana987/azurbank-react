import { Column, Currency, Stock, Value } from "./types";

export const currencySymbols: Record<string, string> = {
  [Currency.ILS]: '₪',
  [Currency.USD]: '$',
  [Currency.EUR]: '€',
};

export const stockColumnHeaders: Column<Stock>[] = [
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
    accessor: 'value',
    convertValue: (value: Value) => {
      return `${currencySymbols[value.currency]}${value.value.toFixed(2)}`;
    }
  },
];