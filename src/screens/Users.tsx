import React, { useContext, useEffect } from 'react';
import DataTable from 'components/Table/DataTable';
import { usersColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { User } from 'utils/types';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';

const Users = () => {
  const { users, getUsers } = useContext(UsersContext);

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, []);

  return (
    <Paper elevation={3}>
      <Typography variant="h1">עמיתים</Typography>
        <DataTable<User>
          rows={users}
          columns={usersColumnHeaders}
        />
    </Paper>
  );
};

export default Users;