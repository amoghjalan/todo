import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation($username: String!, $email: String!) {
    createUser(username: $username, email: $email) {
      id
      username
      email
    }
  }
`;
export const DELETE_USER = gql`
  mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;
export const CREATE_ITEM = gql`
  mutation Mutation(
    $userId: ID!
    $title: String!
    $description: String
    $severity: severityType
    $dueDate: Date
  ) {
    createItem(
      user_id: $userId
      title: $title
      description: $description
      severity: $severity
      dueDate: $dueDate
    ) {
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
export const UPDATE_ITEM = gql`
  mutation Mutation($updateItemId: ID!, $isCompleted: Boolean) {
    updateItem(id: $updateItemId, isCompleted: $isCompleted)
  }
`;
export const DELETE_ITEM = gql`
  mutation Mutation($deleteItemId: ID!) {
    deleteItem(id: $deleteItemId)
  }
`;
