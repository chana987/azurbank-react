import { Action, Dividend, HistoricPrice, Stock, User, UserStock } from './types';

export const formatAction = (a: any): Action => {
	return {
		id: a?.id,
		value: a?.attributes?.stockPrice * a?.attributes?.amount,
		...a?.attributes,
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
		id: s?.id,
		currentPrice: s?.attributes?.historicPrices?.[0]?.stockPrice,
		dividends: formatDividends(s?.attributes?.dividends),
		historicPrices: formatHistoricPrice(s?.attributes?.historicPrices),
		...s?.attributes,
	};
};    

export const formatStocks = (stocks: any): Stock[] => {
	return stocks?.map((s: unknown) => {
		return formatStock(s);
	});
};

export const formatUser = (u: any): User => {
	return {
		id: u?.id,
		actions: formatActions(u?.attributes?.actions),
		joinDate: u?.attributes?.joinDate || u?.attributes?.createdAt,
		portfolioValue: u?.attributes?.stocks?.reduce((acc: number, s: any) => {
			return acc + s?.stock?.data?.attributes?.values?.[0]?.value * s?.amount;
		}, 0),
		role: u?.attributes?.role?.data?.attributes?.name,
		stocks: formatUserStocks(u?.attributes?.stocks),
		...u?.attributes,
	};
};

export const formatUsers = (users: any): User[] => {
	return users?.map((u: any) => {
		return formatUser(u);
	});
};

export const formatUserStocks = (stocks: any): UserStock[] => {
	return stocks?.map((s: any) => {
		return {
			id: s?.stock?.data?.id,
			amount: s?.amount,
			stock: formatStock(s?.stock?.data?.attributes),
			value: s?.stock?.data?.attributes?.historicPrices?.[0]?.stockPrice * s?.amount,
		};
	});
};
