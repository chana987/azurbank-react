import { Stock } from "./types";

export const formatStocks = (stocks: any): Stock[] => {
  return stocks?.map((stock: any) => {
    return {
      id: stock?.id,
      companyName: stock?.attributes?.companyName,
      currency: stock?.attributes?.currency,
      currentPrice: stock?.attributes?.values?.[0]?.value,
      hebrewName: stock?.attributes?.hebrewName,
      symbol: stock?.attributes?.symbol,
      values: stock?.attributes?.values,
    };
  });
}

export const formatUsers = (users: any): any => {
  return users?.map((user: any) => {
    return {
      id: user?.id,
      firstname: user?.attributes?.username,
      stocks: formatStocks(user?.attributes?.stocks),
      birthday: user?.attributes?.birthday,
    };
  });
}

export const formatUserStocks = (user: any): any => {
  return user?.stocks?.map((stock: any) => {
    return {
      id: stock?.stock?.id,
      amount: stock?.amount,
      companyName: stock?.stock?.attributes?.companyName,
      currency: stock?.stock?.attributes?.currency,
      currentPrice: stock?.stock?.attributes?.values?.[0]?.value,
      hebrewName: stock?.stock?.attributes?.hebrewName,
      symbol: stock?.stock?.attributes?.symbol,
      value: stock?.stock?.attributes?.values?.[0]?.value * stock?.amount,
    };
  });
}
