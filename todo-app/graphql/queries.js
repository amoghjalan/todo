import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    findAllUsers {
      id
      username
    }
  }
`;
export const GET_USERDATA = gql`
  query Query($findUserByIdId: ID!) {
    findUserById(id: $findUserByIdId) {
      id
      username
      email
    }
  }
`;
export const GET_USERTASKS = gql`
  query Query($userId: ID!) {
    findUserItems(user_id: $userId) {
      id
      title
      description
      severity
      isCompleted
      dueDate
      user_id
    }
  }
`;
