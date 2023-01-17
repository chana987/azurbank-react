export enum ActionStatus {
  UNSUBMITTED = 'UNSUBMITTED',
  AWAITING_APPROVAL = 'AWAITING_APPROVAL',
  COMPLETED = 'COMPLETED',
}

export enum ActionType {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum AuthStatus {
  SignedIn = 'signedin',
  SignedOut = 'signedout',
  Loading = 'loading',
}

export enum Currency {
  EUR = 'EUR',
  ILS = 'ILS',
  USD = 'USD',
}

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

export enum Role {
  GUIDE = 'GUIDE',
  AUTHENTICATED = 'AUTHENTICATED',
}

export enum Route {
  HOME = '',
  LOGIN = 'login',
  REGISTER = 'register',
  STOCK = 'stock',
  STOCKS = 'stocks',
  USER = 'user',
  USERS = 'users',
}

export type RouteParams = {
  [Route.STOCK]: { id: string },
  [Route.USER]: { id: string },
}

export interface Action {
  id: string;
  amount?: number;
  date?: Date;
  status?: ActionStatus;
  stock?: Stock;
  stockPrice?: number;
  type?: ActionType;
  value?: number;
}

export interface AuthContextState {
  authStatus: AuthStatus,
  getMe: () => Promise<any>,
  meLoading: boolean
  loginDetails: LoginDetails,
  login: () => Promise<LoginResult>,
  logout: () => void,
  updateLoginDetails: (i: Partial<LoginDetails>) => void,
  userData: { id: string, username: string, role: string | null },
}

export interface Column {
  accessor: string;
  convertValue?: (value: any) => string;
  header: string;
  link?: Route;
}

export interface Dividend {
  id: string;
  date?: Date;
  percentage?: number;
  sum?: number;
  xDate?: Date;
}

export interface HistoricPrice {
  id: string;
  date?: Date;
  stockPrice?: number;
}

export interface LoginDetails {
  identifier: string;
  password: string;
}

export interface LoginResult {
  message: string;
  success: boolean;
}

export interface Stock {
  id: string;
  companyName?: string;
  currency?: Currency;
  currentPrice?: number;
  dividends: Dividend[];
  DPR?: number;
  hebrewName?: string;
  historicPrices: HistoricPrice[];
  isin?: string;
  issuerId?: number;
  marketValue?: number;
  PE?: number;
  securityId?: number;
  stockPrice?: number;
  symbol?: string;
}

export interface StocksContextState {
  getStocks: () => void;
  loading: boolean;
  stocks: Stock[];
}

export interface User {
  id: string;
  actions: Action[];
  balance?: number;
  birthday?: Date;
  email?: string;
  firstName?: string;
  gender?: Gender;
  joinDate: Date;
  lastName?: string;
  portfolioValue?: number;
  role?: Role;
  stocks: UserStock[];
  username?: string;
}

export interface UserStock {
  id: string;
  amount?: number;
  stock?: Stock;
  value?: number;
}

export interface UsersContextState {
  getUser: (id: string) => void;
  getUsers: () => void;
  loading?: boolean;
  user: User;
  users: User[];
}
