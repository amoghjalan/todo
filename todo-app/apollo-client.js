import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json"
  }
});

export default createClient;
