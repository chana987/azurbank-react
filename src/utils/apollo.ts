import { setContext } from "@apollo/client/link/context";
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache
} from "@apollo/client";

export const saveJwt = (jwt: string) => {
  sessionStorage.setItem("token", `Bearer ${jwt}`);
};
export const removeJwt = () => {
  sessionStorage.removeItem("token");
};

export const getJwt = () => {
  return sessionStorage.getItem("token");
};

export interface UserData { };
export const saveUserData = (userData: UserData) => { };
export const removeUserData = () => { };
export const getUserData = () => { };

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_API_URL || "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
    const jwt = getJwt();
    return {
        headers: {
            ...headers,
            authorization: jwt || "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
