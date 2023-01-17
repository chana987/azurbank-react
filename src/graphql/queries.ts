import { gql } from '@apollo/client';

export const GET_ALL_STOCKS = gql`
  query stocks {
    stocks(sort: "hebrewName") {
      data {
        id
        attributes {
          companyName
          currency
          dividends {
            date
            percentage
            sum
            xDate
          }
          DPR
          hebrewName
          historicPrices {
            date
            stockPrice
          }
          isin
          issuerId
          marketValue
          PE
          securityId
          stockPrice
          symbol
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
          actions {
            amount
            date
            status
            stock {
              data {
                id
              }
            }
            stockPrice
            type
          }
          birthday
          email
          firstName
          gender
          lastName
          role {
            data {
              attributes {
                name
              }
            }
          }
          stocks {
            amount
            stock {
              data {
                id
              }
            }
          }
          username
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
          actions {
            amount
            date
            status
            stock {
              data {
                id
              }
            }
            stockPrice
            type
          }
          balance
          birthday
          createdAt
          email
          firstName
          gender
          joinDate
          lastName
          role {
            data {
              attributes {
                name
              }
            }
          }
          stocks {
            amount
            stock {
              data {
                id
              }
            }
          }
          username
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
        data {
          attributes {
            name
          }
        }
      }
    }
  }
`;