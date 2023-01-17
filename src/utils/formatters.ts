import { Action, Dividend, HistoricPrice, Stock, User, UserStock } from './types';

export const formatAction = (a: any): Action => {
	return {
		...a?.attributes,
		id: a?.id,
		date: a?.attributes?.date,
		value: a?.attributes?.stockPrice * a?.attributes?.amount,
	};
};

export const formatActions = (actions: any): Action[] => {
	return actions?.map((a: any) => {
		return formatAction(a);
	});
};

export const formatDividend = (d: any): Dividend => {
	return {
		id: d?.id,
		...d?.attributes,
	};
};

export const formatDividends = (dividends: any): Dividend[] => {
	return dividends?.map((d: any) => {
		return formatDividend(d);
	});
};

export const formatHistoricPrice = (h: any): HistoricPrice => {
	return {
		id: h?.id,
		...h?.attributes,
	};
};

export const formatHistoricPrices = (historicPrices: any): HistoricPrice[] => {
	return historicPrices?.map((h: any) => {
		return formatHistoricPrice(h);
	});
};

export const formatStock = (s: any): Stock => {
	return {
		...s.attributes,
		id: s?.id,
		currentPrice: s?.attributes?.historicPrices?.[0]?.stockPrice,
		dividends: formatDividends(s?.attributes?.dividends),
		hebrewName: s?.attributes?.hebrewName,
		historicPrices: formatHistoricPrice(s?.attributes?.historicPrices),
		stockPrice: s?.attributes?.historicPrices?.[0]?.stockPrice,
	};
};    

export const formatStocks = (stocks: any): Stock[] => {
	return stocks?.map((s: unknown) => {
		return formatStock(s);
	});
};

export const formatUser = (u: any): User => {
	const user = {
		...u?.attributes,
		id: u?.id,
		actions: formatActions(u?.attributes?.actions),
		joinDate: u?.attributes?.joinDate || u?.attributes?.createdAt,
		portfolioValue: u?.attributes?.stocks?.reduce((acc: number, s: any) => {
			return acc + s?.stock?.data?.attributes?.values?.[0]?.value * s?.amount;
		}, 0) || 0,
		role: u?.attributes?.role?.data?.attributes?.name,
		stocks: formatUserStocks(u?.attributes?.stocks),
	};
	return user;
};

export const formatUsers = (users: any): User[] => {
	return users?.map((u: any) => {
		return formatUser(u);
	});
};

export const formatUserStocks = (stocks: any): UserStock[] => {
	return stocks?.map((s: any) => {
		return {
			amount: s?.amount,
			stock: formatStock(s?.stock?.data),
			value: s?.stock?.data?.attributes?.historicPrices?.[0]?.stockPrice * s?.amount,
		};
	});
};
