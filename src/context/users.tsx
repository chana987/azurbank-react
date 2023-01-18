import { useLazyQuery } from '@apollo/client';
import {
	GET_ALL_USERS, GET_USER,
} from '../graphql/queries';
import React, { createContext } from 'react';
import { UsersContextState } from 'utils/types';
import { formatUser, formatUsers } from 'utils/formatters';

export const UsersContext = createContext({} as UsersContextState);

export const UsersProvider = ({ children }: { children: React.ReactElement; }) => {
	const [getUsers, { data, loading }] = useLazyQuery(GET_ALL_USERS);
	const [getUser, { data: userData }] = useLazyQuery(GET_USER, {
		variables: { id: '1' },
	});

	const iState = {
		user: formatUser(userData?.usersPermissionsUser?.data) || {},
		users: formatUsers(data?.usersPermissionsUsers?.data) || [],
		getUser,
		getUsers,
		loading,
	} as UsersContextState;

	return (
		<UsersContext.Provider value={iState}>
			{children}
		</UsersContext.Provider>
	);
};
