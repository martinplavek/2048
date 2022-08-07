import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "https://hiring-backend-2048.herokuapp.com/admin/api",
    cache: new InMemoryCache(),
})

export default apolloClient;