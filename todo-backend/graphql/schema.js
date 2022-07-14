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
    id: Int!
    title: String!
    description: String
    severity: severityType
    isCompleted: Boolean
    dueDate: Date
  }

  type Query {
    allItems(severity: severityType, dueDate: Date): [Item]!
  }

  type Mutation {
    addItem(
      title: String!
      description: String
      severity: severityType
      isCompleted: Boolean
      dueDate: Date
    ): Item!
    deleteItem(id: Int!): Int
    updateItem(
      id: Int!
      title: String
      description: String
      severity: severityType
      isCompleted: Boolean
      dueDate: Date
    ): [Int]
  }
`;

module.exports = typeDefs;
