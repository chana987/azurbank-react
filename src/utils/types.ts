export enum AuthStatus {
  SignedIn = "signedin",
  SignedOut = "signedout",
  Loading = "loading",
}

export enum Currency {
  EUR = 'EUR',
  ILS = 'ILS',
  USD = 'USD',
}

export enum Role {
  GUIDE = 'GUIDE',
  AUTHENTICATED = 'AUTHENTICATED',
}

export interface AuthContextState {
  authStatus: AuthStatus,
  updateLoginDetails: (i: Partial<LoginDetails>) => void,
  loginDetails: LoginDetails,
  login: () => Promise<LoginResult>,
  logout: () => void,
  getMe: () => Promise<any>,
  userData: { id: string, username: string, role: string | null },
  meLoading: boolean
}

export interface Column {
  accessor: string;
  header: string;
  convertValue?: (value: any) => string;
}

export interface LoginDetails {
  password: string;
  identifier: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
}

export interface Stock {
  id: string;
  companyName?: string;
  currency?: Currency;
  currentPrice?: number;
  hebrewName?: string;
  symbol?: string;
  values?: Value[];
}

export interface StocksContextState {
  getStocks: () => void;
  loading: boolean;
  stocks: Stock[];
}

export interface User {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: Role;
  stocks?: {
    stock: Stock,
    amount: number,
    value: number,
  }[];
}

export interface UsersContextState {
  getUsers: () => void;
  loading: boolean;
  users: User[];
}

export interface Value {
  id: string;
  date: Date;
  value: number;
}
