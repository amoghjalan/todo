import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json"
  }
});

export default createClient;
function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ? apolloClient : createClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore(...existingCache, ...initialState);
  }
}
