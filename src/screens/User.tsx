import React, { useContext, useEffect } from 'react';
import DataTable from 'components/Table/DataTable';
import { userActionsColumnHeaders, userStocksColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { Action, User } from 'utils/types';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const SingleUser = () => {
  const { id } = useParams();
  const { user, getUser } = useContext(UsersContext);

  useEffect(() => {
    if ((!user?.id || (user?.id !== id)) && id) {
      getUser(id);
    }
  }, []);

  return (
    <Paper elevation={3}>
      <Typography variant="h1">{user?.firstName}</Typography>
      <CardContent>
        <Grid
          container
        >
          <Grid
            container
            item
            direction="column"
            textAlign="start"
            md={3}
            xs={6}
          >
            <Grid item>
              <Typography sx={{fontWeight: 800}}>
                קוד העמית:
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{fontWeight: 800}}>
                שווי התיק:
              </Typography>
              </Grid>
          </Grid>
          <Grid
            container
            item
            direction="column"
            textAlign="start"
            md={3}
            xs={6}
            >
            <Typography>
              {user?.id}
            </Typography>
            <Typography>
              ₪{user?.stocks?.map(s => s.value)?.reduce((a, b) => a + b)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <DataTable<User>
          rows={user?.stocks || []}
          columns={userStocksColumnHeaders}
        />
      </CardContent>
      <CardContent>
        <DataTable<Action>
          rows={user?.actions || []}
          columns={userActionsColumnHeaders}
        />
      </CardContent>
    </Paper>
  );
};

export default SingleUser;