const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const models = require("./database/models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server
  .listen()
  .then(({ url }) => console.log("Server is running on localhost:4000"))
  .catch(error => console.log(error));
