import gql from "graphql-tag";

export const registerMutation = gql`
    mutation createUser($data: UserCreateInput) {
        createUser(data: $data) {
            id
        }
    }
`;
