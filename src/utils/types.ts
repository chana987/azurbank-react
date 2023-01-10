export enum Currency {
  EUR = 'EUR',
  ILS = 'ILS',
  USD = 'USD',
}

export interface Column<T> {
  accessor: keyof T;
  header: string;
  convertValue?: (props: any) => string;
}

export interface Stock {
  id: string;
  companyName: string;
  hebrewName: string;
  symbol: string;
  value: Value;
}

export interface StocksContextState {
  getStocks: () => void;
  loading: boolean;
  stocks: Stock[];
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  stocks: {
    stock: Stock,
    amount: number,
  }[];
}

export interface Value {
  currency: Currency;
  value: number;
}
