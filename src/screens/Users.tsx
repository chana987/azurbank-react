import React, { useContext, useEffect } from 'react';
import DataTable from 'components/Table/DataTable';
import { usersColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { User } from 'utils/types';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

const Users = () => {
	const { users, getUsers } = useContext(UsersContext);

	useEffect(() => {
		if (!users.length) {
			getUsers();
		}
	}, []);

	return (
		<Container>
			<Typography variant="h1">עמיתים</Typography>
			<DataTable<User>
				rows={users}
				columns={usersColumnHeaders}
			/>
		</Container>
	);
};

export default Users;