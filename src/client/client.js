import { ApolloClient, InMemoryCache } from "@apollo/client";

// define github's base url
const GITHUB_BASE_URL = "https://api.github.com/graphql";

// setup apollo client to be used in the app
const client = new ApolloClient({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;
