import { setContext } from '@apollo/client/link/context';
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';

export const saveJwt = (jwt: string) => {
	sessionStorage.setItem('token', `Bearer ${jwt}`);
};
export const removeJwt = () => {
	sessionStorage.removeItem('token');
};

export const getJwt = () => {
	return sessionStorage.getItem('token');
};

export interface UserData {
  firstname: string;
  lastname: string;
}
export const saveUserData = () => Promise<boolean>;
export const removeUserData = () => Promise<boolean>;
export const getUserData = () => Promise<UserData>;

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_API_URL || 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
	const jwt = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjczNTIwNTM2LCJleHAiOjE2NzYxMTI1MzZ9.5gFZAu6ti3ql74lUo677eqbJ82C3YtUFxSCGtPTu0Kg';
	return {
		headers: {
			...headers,
			authorization: jwt || '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default client;
