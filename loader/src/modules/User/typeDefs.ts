import gql from 'graphql-tag';

export default gql`
  ## QUERY ##
  type User {
    id: ID!
    name: String!
    # Relations
    lists: [TodoList!]!
  }

  extend type Query {
    user(id: ID!): User
  }
`;
