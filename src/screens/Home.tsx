import React, { useContext, useEffect } from 'react';
import { StocksContext } from 'context/stocks';
import { stocksColumnHeaders } from 'utils/constants';
import Container from '@mui/material/Container';
import DataTable from 'components/Table/DataTable';
import { Stock } from 'utils/types';
import Typography from '@mui/material/Typography';

const Home = () => {
	const { stocks, getStocks } = useContext(StocksContext);

	useEffect(() => {
		if (!stocks.length) {
			getStocks();
		}
	}, []);

	return (
		<Container>
			<Typography variant="h1">מניות</Typography>
			<DataTable<Stock>
				collapsible
				columns={stocksColumnHeaders}
				rows={stocks}
			/>
		</Container>
	);
};

export default Home;