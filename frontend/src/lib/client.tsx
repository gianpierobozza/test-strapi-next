import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: `${STRAPI_URL}/graphql`,
  }),
  cache: new InMemoryCache(),
});

export default client;