import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = new ApolloClient({
  uri: "https://relative-airedale-37.hasura.app/v1/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "GfWDC4cJeGxzQ3LJfLQ74u63TgEJcjZamIQZEcxoJ8Zwz9YdcGpECoXVVTx1Idxc"
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
