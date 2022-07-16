const { gql } = require("apollo-server");

const typeDefs = gql`
  enum severityType {
    low
    medium
    high
    critical
  }

  scalar Date

  type Item {
    id: ID!
    title: String!
    description: String
    severity: severityType
    isCompleted: Boolean
    dueDate: Date
    user_id: ID
  }

  type User {
    id: ID!
    username: String!
    email: String!
    todos: [Item!]
  }

  type Query {
    findAllUsers: [User!]!
    findUserById(id: ID!): User
    findUserItems(user_id: ID!, severity: severityType, dueDate: Date): [Item!]!
  }

  type Mutation {
    createItem(
      user_id: ID!
      title: String!
      description: String
      severity: severityType
      isCompleted: Boolean
      dueDate: Date
    ): Item!
    updateItem(
      id: ID!
      user_id: ID
      title: String
      description: String
      severity: severityType
      isCompleted: Boolean
      dueDate: Date
    ): [Int]
    deleteItem(id: ID!): Int
    createUser(username: String!, email: String!): User!
    deleteUser(id: ID!): Int!
  }
`;

module.exports = typeDefs;
