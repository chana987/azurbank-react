import { Stock, User, UserStock } from "./types";

export const formatStocks = (stocks: any): Stock[] => {
  return stocks?.map((s: any) => {
    return {
      id: s?.id,
      companyName: s?.attributes?.companyName,
      currency: s?.attributes?.currency,
      currentPrice: s?.attributes?.values?.[0]?.value,
      hebrewName: s?.attributes?.hebrewName,
      symbol: s?.attributes?.symbol,
      values: s?.attributes?.values,
    };
  });
}

export const formatUsers = (users: any): User[] => {
  return users?.map((u: any) => {
    return formatUser(u);
  });
}

export const formatUser = (u: any): User => {
  return {
    id: u?.id,
    birthday: u?.attributes?.birthday,
    firstName: u?.attributes?.username,
    stocks: formatUserStocks(u?.attributes?.stocks),
    portfolioValue: u?.attributes?.stocks?.reduce((acc: number, s: any) => {
      return acc + s?.stock?.data?.attributes?.values?.[0]?.value * s?.amount;
    }, 0),
  };
}

export const formatUserStocks = (stocks: any): UserStock[] => {
  return stocks?.map((s: any) => {
    return {
      id: s?.stock?.data?.id,
      amount: s?.amount,
      companyName: s?.stock?.data?.attributes?.companyName,
      currency: s?.stock?.data?.attributes?.currency,
      currentPrice: s?.stock?.data?.attributes?.values?.[0]?.value,
      hebrewName: s?.stock?.data?.attributes?.hebrewName,
      symbol: s?.stock?.data?.attributes?.symbol,
      value: s?.stock?.data?.attributes?.values?.[0]?.value * s?.amount,
    };
  });
}
