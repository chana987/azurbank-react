import { useLazyQuery } from "@apollo/client";
import {
  GET_ALL_USERS
} from "../graphql/queries";
import React, { createContext } from "react";
import { UsersContextState } from "utils/types";
import { formatUsers } from "utils/formatters";

export const UsersContext = createContext({} as UsersContextState);

export const UsersProvider = ({ children }: { children: React.ReactElement; }) => {
  const [getUsers, { data, loading }] = useLazyQuery(GET_ALL_USERS);

  const iState = {
    users: formatUsers(data?.usersPermissionsUsers?.data) || [],
    getUsers,
    loading,
  } as UsersContextState;

  return (
    <UsersContext.Provider value={iState}>
      {children}
    </UsersContext.Provider>
  );
};
