import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($input: UsersPermissionsLoginInput!){
  login(input: $input){
    jwt
    user {
      id
      username
      stocks {
        value
        amount
      }
    }
  }
}`;
