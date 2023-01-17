import { Currency } from 'utils/types';

export const convertCurrency = (value: number, from: Currency, to: Currency) => {
	if (from === to) {
		return value;
	}
  
	if (from === Currency.ILS) {
		return value / 3.5;
	}

	return value * 3.5;
};
