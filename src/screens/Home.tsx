import React, { useContext, useEffect } from 'react';
import { StocksContext } from 'context/stocks';
import { stocksColumnHeaders } from 'utils/constants';
import Paper from '@mui/material/Paper';
import DataTable from 'components/Table/DataTable';
import { Stock } from 'utils/types';

const Home = () => {
  const { stocks, getStocks } = useContext(StocksContext);

  useEffect(() => {
    if (!stocks.length) {
      getStocks();
    }
  }, []);

  return (
    <Paper elevation={3}>
      <h1>בית</h1>
      <DataTable<Stock>
        collapsible
        columns={stocksColumnHeaders}
        rows={stocks}
      />
    </Paper>
  );
};

export default Home;