import React, { useContext, useEffect } from 'react';
import DataTable from 'components/Table/DataTable';
import { userActionsColumnHeaders, userStocksColumnHeaders } from 'utils/constants';
import { UsersContext } from 'context/users';
import { Action, UserStock } from 'utils/types';
import Container from '@mui/material/Container';
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
		<Container>
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
						<Typography sx={{fontWeight: 800}}>
                שם העמית/ה:
						</Typography>
						<Typography sx={{fontWeight: 800}}>
                מספר חשבון:
						</Typography>
						<Typography sx={{fontWeight: 800}}>
                שווי התיק:
						</Typography>
						<Typography sx={{fontWeight: 800}}>
                יתרה שקלית:
						</Typography>
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
							{`${user?.firstName} ${user?.lastName}`}
						</Typography>
						<Typography>
							{user?.id}
						</Typography>
						<Typography>
              ₪{user?.stocks?.map(s => s.value)?.reduce((a, b) => (a || 0) + (b || 0), 0) || 0}
						</Typography>
						<Typography>
              ₪{user?.balance || 0}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardContent>
				<DataTable<UserStock>
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
		</Container>
	);
};

export default SingleUser;