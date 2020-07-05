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

export const SHORT_LINKS = gql`
    query short_links {
        short_links {
            id
            title
            original_url
            short_url
            clicks
            createdAt
            updatedAt
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

export const CREATE_SHORTLINK = gql`
    mutation create_shortLink(
        $original_url: String!
        $title: String!
        $short_url: String
    ) {
        create_shortLink(
            original_url: $original_url
            title: $title
            short_url: $short_url
        ) {
            id
            title
            original_url
            short_url
            clicks
            createdAt
            updatedAt
        }
    }
`;

export const UPDATE_LINK_INFO = gql`
    mutation update_link_info(
        $id: String!
        $original_url: String!
        $title: String!
        $short_url: String!
    ) {
        update_link_info(
            id: $id
            original_url: $original_url
            title: $title
            short_url: $short_url
        ) {
            id
            title
            original_url
            short_url
            clicks
            createdAt
            updatedAt
        }
    }
`;
export const REMOVE_LINK = gql`
    mutation remove_link($id: String!) {
        remove_link(id: $id)
    }
`;
export const RESET_PASSWORD = gql`
    mutation reset_password(
        $email: String!
        $token: String!
        $new_password: String!
    ) {
        reset_password(
            email: $email
            token: $token
            new_password: $new_password
        )
    }
`;
/* -------------------------------------------------------------------------- */
/*                                Subscriptions                               */
/* -------------------------------------------------------------------------- */
