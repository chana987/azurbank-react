import { useLazyQuery } from '@apollo/client';
import {
	GET_ALL_STOCKS,
} from '../graphql/queries';
import React, { createContext } from 'react';
import { StocksContextState } from 'utils/types';
import { formatStocks } from 'utils/formatters';

export const StocksContext = createContext({} as StocksContextState);

export const StocksProvider = ({ children }: { children: React.ReactElement; }) => {
	const [getStocks, { data, loading }] = useLazyQuery(GET_ALL_STOCKS);

	const iState = {
		stocks: formatStocks(data?.stocks?.data) || [],
		getStocks,
		loading,
	} as StocksContextState;

	return (
		<StocksContext.Provider value={iState}>
			{children}
		</StocksContext.Provider>
	);
};
