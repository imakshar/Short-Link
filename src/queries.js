import gql from "graphql-tag";

/* -------------------------------------------------------------------------- */
/*                                   Queries                                  */
/* -------------------------------------------------------------------------- */
export const AUTH_USER = gql`
    query auth_user {
        auth_user {
            id
            name
            email
        }
    }
`;
/* -------------------------------------------------------------------------- */
/*                                  Mutations                                 */
/* -------------------------------------------------------------------------- */

export const SIGNUP = gql`
    mutation signup($name: String!, $email: EmailAddress!, $password: String!) {
        signup(name: $name, email: $email, password: $password) {
            id
            name
            email
            createdAt
            updatedAt
        }
    }
`;
export const SIGNIN = gql`
    mutation signin($email: EmailAddress!, $password: String!) {
        signin(email: $email, password: $password)
    }
`;

/* -------------------------------------------------------------------------- */
/*                                Subscriptions                               */
/* -------------------------------------------------------------------------- */
