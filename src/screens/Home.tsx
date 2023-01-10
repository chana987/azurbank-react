import React, { useContext, useEffect } from 'react';
import { StocksContext } from 'context/stocks';
import { stockColumnHeaders } from 'utils/constants';
import Paper from '@mui/material/Paper';
import CollapsibleTable from 'components/CollapsibleTable';

const Home = () => {
  const { stocks, getStocks } = useContext(StocksContext);

  useEffect(() => {
    getStocks();
  }, []);

  return (
    <Paper elevation={3}>
      <h1>בית</h1>
      <CollapsibleTable
        columns={stockColumnHeaders}
        rows={stocks}
      />
    </Paper>
  );
};

export default Home;