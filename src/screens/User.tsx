import React, { useContext, useEffect } from 'react';
import DataTable from 'components/Table/DataTable';
import { userStocksColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { User } from 'utils/types';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';

const SingleUser = () => {
  const { id } = useParams();
  const { user, getUser } = useContext(UsersContext);

  useEffect(() => {
    if (!user?.id && (user?.id !== id) && id) {
      getUser(id);
    }
  }, []);

  return (
    <Paper elevation={3}>
      <h1>חברים</h1>
      <DataTable<User>
        rows={user?.stocks || []}
        columns={userStocksColumnHeaders}
      />
    </Paper>
  );
};

export default SingleUser;