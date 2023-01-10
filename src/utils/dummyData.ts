import { Currency, Stock, User } from "./types";

export const stocks: Stock[] = [
  {
    id: '1',
    companyName: 'Apple',
    hebrewName: 'אפל',
    symbol: 'AAPL',
    value: {
      currency: Currency.USD,
      value: 100,
    }
  },
  {
    id: '2',
    companyName: 'Microsoft',
    hebrewName: 'מייקרוסופט',
    symbol: 'MSFT',
    value: {
      currency: Currency.USD,
      value: 200,
    }
  },
  {
    id: '3',
    companyName: 'Google',
    hebrewName: 'גוגל',
    symbol: 'GOOG',
    value: {
      currency: Currency.ILS,
      value: 300,
    },
  },
];

export const users: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    stocks: [
      {
        stock: stocks[0],
        amount: 10,
      },
      {
        stock: stocks[1],
        amount: 20,
      },
    ],
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@gmail.com',
    stocks: [
      {
        stock: stocks[0],
        amount: 30,
      },
      {
        stock: stocks[2],
        amount: 40,
      },
    ],
  },
];