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

export const GET_USER = gql`
  query user($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          birthday
          stocks {
            amount
            stock {
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
      email
      role {
        name
      }
    }
  }
`;