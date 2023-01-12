import { gql } from '@apollo/client';

export const GET_ALL_STOCKS = gql`
  query stocks {
    stocks(sort: "hebrewName") {
      data {
        id
        attributes {
          hebrewName
          values {
            date
            value
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query me {
    me {
      id
      username
      role {
        name
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query users {
    usersPermissionsUsers {
      data {
        id
        attributes {
          username
          birthday
        }
      }
    }
  }
`;
      