import gql from "graphql-tag";

export const authenticationMutation = gql`
    mutation authenticationQuery(
        $email: String
        $password: String
    ) {
        authenticateUserWithPassword(email: $email, password: $password) {
            token
            item {
                name
                email
            }
        }
    }
`;
