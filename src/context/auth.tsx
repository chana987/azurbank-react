import { useLazyQuery, useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/mutations';
import { ME } from 'graphql/queries';
import React, { createContext, useState, useEffect } from 'react';
import { AuthContextState, AuthStatus, LoginDetails, LoginResult, User } from 'utils/types';
import * as apollo from 'utils/apollo';

export const AuthContext = createContext({} as AuthContextState);

export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
	const userJWT = apollo.getJwt();
	const [getMe, { data: meData, loading: meLoading }] = useLazyQuery(ME,
		{
			context: {
				headers: {
					authorization: userJWT,
				}
			}
		});
	const [loginMutation] = useMutation(LOGIN, { refetchQueries: [{ query: ME }] });
	const [userData, setUserData] = useState({} as User);
	const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.SignedOut);
	const [loginDetails, setLoginDetails] = useState<LoginDetails>
	({ identifier: '', password: '' } as LoginDetails);

	useEffect(() => {
		if (meData?.me?.id) {
			setAuthStatus(AuthStatus.SignedIn);
		}
		if (!userData.role) {
			getMe();
		}
	}, [meData]);

	const updateLoginDetails =
        (i: Partial<LoginDetails>) => setLoginDetails(() => ({ ...loginDetails, ...i }));

	const login = async (): Promise<LoginResult> => {
		try {
			const response = await loginMutation({
				variables: {
					'input': {
						'identifier': loginDetails.identifier,
						'password': loginDetails.password,
						'provider': 'local'
					}
				}
			});
			if (response?.data?.login) {
				setAuthStatus(AuthStatus.SignedIn);
				const jwt = response.data.login.jwt;
				const id = response.data.login.user.id;
				setUserData({ ...userData, id });

				apollo.saveJwt(jwt);
				await getMe();

				return { success: true, message: '' };
			} else {
				return { success: false, message: 'שגיאת מערכת' };
			}
		} catch (error: any) {
			return { success: false, message: 'אחד מפרטי ההתחברות שגויים' } as LoginResult;
		}
	};

	const logout = () => {
		apollo.removeJwt();
		setAuthStatus(AuthStatus.SignedOut);
	};

	const iState = {
		authStatus,
		updateLoginDetails,
		loginDetails,
		login,
		userData,
		meLoading,
		getMe,
		logout
	} as AuthContextState;

	return (
		<AuthContext.Provider value={iState}>{children}</AuthContext.Provider>
	);
};
